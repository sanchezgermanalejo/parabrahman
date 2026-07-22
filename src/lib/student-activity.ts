import "server-only";

import { academyCourse } from "@/content/academy";
import { nextZoomMeeting } from "@/content/meetings";
import { hasSupabaseConfig } from "@/lib/supabase/config";
import { createClient } from "@/lib/supabase/server";

export type StudentActivityItem = {
  id: string;
  kind: "video" | "forum";
  title: string;
  body: string;
  authorName: string;
  href: string;
  createdAt: string;
  pending: boolean;
};

export type StudentActivity = {
  available: boolean;
  pendingCount: number;
  ownVideoComments: number;
  communityConversations: number;
  items: StudentActivityItem[];
  lastSeenAt?: string;
  meeting: typeof nextZoomMeeting;
};

const emptyActivity: StudentActivity = {
  available: false,
  pendingCount: 0,
  ownVideoComments: 0,
  communityConversations: 0,
  items: [],
  meeting: nextZoomMeeting,
};

export async function getStudentActivity(): Promise<StudentActivity> {
  if (!hasSupabaseConfig()) return emptyActivity;

  try {
    const supabase = await createClient();
    const { data: claimsData, error: claimsError } = await supabase.auth.getClaims();
    const userId = claimsData?.claims?.sub;

    if (claimsError || typeof userId !== "string") return emptyActivity;

    const [stateResult, commentsResult, threadsResult, postsResult] = await Promise.all([
      supabase
        .from("student_activity_state")
        .select("last_seen_at")
        .eq("user_id", userId)
        .maybeSingle(),
      supabase
        .from("lesson_discussions")
        .select("id, lesson_id")
        .eq("user_id", userId)
        .eq("status", "published")
        .limit(200),
      supabase
        .from("forum_threads")
        .select("id, title")
        .eq("user_id", userId)
        .in("status", ["published", "closed"])
        .limit(100),
      supabase
        .from("forum_posts")
        .select("thread_id")
        .eq("user_id", userId)
        .eq("status", "published")
        .limit(300),
    ]);

    const ownComments = commentsResult.data ?? [];
    const ownCommentIds = ownComments
      .map((item) => item.id)
      .filter((id): id is string => typeof id === "string");
    const ownThreads = threadsResult.data ?? [];
    const conversationIds = new Set<string>();
    for (const thread of ownThreads) {
      if (typeof thread.id === "string") conversationIds.add(thread.id);
    }
    for (const post of postsResult.data ?? []) {
      if (typeof post.thread_id === "string") conversationIds.add(post.thread_id);
    }

    const [videoRepliesResult, conversationThreadsResult, forumRepliesResult] = await Promise.all([
      ownCommentIds.length
        ? supabase
            .from("lesson_discussions")
            .select("id, parent_id, lesson_id, author_name, body, created_at")
            .in("parent_id", ownCommentIds)
            .neq("user_id", userId)
            .eq("status", "published")
            .order("created_at", { ascending: false })
            .limit(50)
        : Promise.resolve({ data: [], error: null }),
      conversationIds.size
        ? supabase
            .from("forum_threads")
            .select("id, title")
            .in("id", [...conversationIds])
            .limit(100)
        : Promise.resolve({ data: [], error: null }),
      conversationIds.size
        ? supabase
            .from("forum_posts")
            .select("id, thread_id, author_name, body, created_at")
            .in("thread_id", [...conversationIds])
            .neq("user_id", userId)
            .eq("status", "published")
            .order("created_at", { ascending: false })
            .limit(50)
        : Promise.resolve({ data: [], error: null }),
    ]);

    const lastSeenAt = stateResult.data?.last_seen_at;
    const lastSeenTime = typeof lastSeenAt === "string" ? new Date(lastSeenAt).getTime() : 0;
    const isPending = (createdAt: string) => new Date(createdAt).getTime() > lastSeenTime;
    const lessonById = new Map<
      string,
      (typeof academyCourse.lessons)[number]
    >(academyCourse.lessons.map((lesson) => [lesson.id, lesson]));
    const threadTitles = new Map<string, string>();
    for (const thread of [...ownThreads, ...(conversationThreadsResult.data ?? [])]) {
      if (typeof thread.id === "string" && typeof thread.title === "string") {
        threadTitles.set(thread.id, thread.title);
      }
    }

    const videoItems: StudentActivityItem[] = (videoRepliesResult.data ?? []).flatMap((reply) => {
      if (
        typeof reply.id !== "string" ||
        typeof reply.lesson_id !== "string" ||
        typeof reply.author_name !== "string" ||
        typeof reply.body !== "string" ||
        typeof reply.created_at !== "string"
      ) return [];
      const lesson = lessonById.get(reply.lesson_id);
      if (!lesson || !lesson.href.startsWith("/")) return [];
      return [{
        id: `video-${reply.id}`,
        kind: "video" as const,
        title: `Respuesta en “${lesson.title}”`,
        body: reply.body,
        authorName: reply.author_name,
        href: `${lesson.href}#comentarios`,
        createdAt: reply.created_at,
        pending: isPending(reply.created_at),
      }];
    });

    const forumItems: StudentActivityItem[] = (forumRepliesResult.data ?? []).flatMap((reply) => {
      if (
        typeof reply.id !== "string" ||
        typeof reply.thread_id !== "string" ||
        typeof reply.author_name !== "string" ||
        typeof reply.body !== "string" ||
        typeof reply.created_at !== "string"
      ) return [];
      return [{
        id: `forum-${reply.id}`,
        kind: "forum" as const,
        title: threadTitles.get(reply.thread_id) ?? "Respuesta en la comunidad",
        body: reply.body,
        authorName: reply.author_name,
        href: `/comunidad/${reply.thread_id}`,
        createdAt: reply.created_at,
        pending: isPending(reply.created_at),
      }];
    });

    const items = [...videoItems, ...forumItems]
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, 30);

    return {
      available:
        !stateResult.error &&
        !commentsResult.error &&
        !threadsResult.error &&
        !postsResult.error &&
        !videoRepliesResult.error &&
        !conversationThreadsResult.error &&
        !forumRepliesResult.error,
      pendingCount: items.filter((item) => item.pending).length,
      ownVideoComments: ownCommentIds.length,
      communityConversations: conversationIds.size,
      items,
      lastSeenAt: typeof lastSeenAt === "string" ? lastSeenAt : undefined,
      meeting: nextZoomMeeting,
    };
  } catch {
    return emptyActivity;
  }
}
