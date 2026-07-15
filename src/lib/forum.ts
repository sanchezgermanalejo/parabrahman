import "server-only";

import type { ForumCategory } from "@/content/forum";
import { hasSupabaseConfig } from "@/lib/supabase/config";
import { createClient } from "@/lib/supabase/server";

export type ForumThreadSummary = {
  id: string;
  title: string;
  body: string;
  category: ForumCategory;
  authorName: string;
  createdAt: string;
  updatedAt: string;
  replyCount: number;
  closed: boolean;
};

export type ForumPost = {
  id: string;
  authorName: string;
  body: string;
  createdAt: string;
  attachment?: {
    name: string;
    type: string;
    size: number;
    url: string;
  };
};

export type ForumIndexResult = {
  available: boolean;
  threads: ForumThreadSummary[];
};

export type ForumThreadResult = {
  available: boolean;
  thread?: ForumThreadSummary;
  posts: ForumPost[];
};

type ThreadRow = {
  id: string;
  title: string;
  body: string;
  category: ForumCategory;
  author_name: string;
  status: "published" | "closed";
  created_at: string;
  updated_at: string;
};

type PostRow = {
  id: string;
  thread_id: string;
  author_name: string;
  body: string;
  attachment_path: string | null;
  attachment_name: string | null;
  attachment_type: string | null;
  attachment_size: number | null;
  created_at: string;
};

function mapThread(row: ThreadRow, replyCount: number): ForumThreadSummary {
  return {
    id: row.id,
    title: row.title,
    body: row.body,
    category: row.category,
    authorName: row.author_name,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    replyCount,
    closed: row.status === "closed",
  };
}

export async function getForumThreads(): Promise<ForumIndexResult> {
  if (!hasSupabaseConfig()) return { available: false, threads: [] };

  try {
    const supabase = await createClient();
    const [{ data: threads, error: threadError }, { data: posts, error: postError }] =
      await Promise.all([
        supabase
          .from("forum_threads")
          .select("id, title, body, category, author_name, status, created_at, updated_at")
          .order("updated_at", { ascending: false })
          .limit(50),
        supabase.from("forum_posts").select("thread_id").limit(500),
      ]);

    if (threadError || postError) return { available: false, threads: [] };

    const counts = new Map<string, number>();
    for (const post of posts ?? []) {
      if (typeof post.thread_id === "string") {
        counts.set(post.thread_id, (counts.get(post.thread_id) ?? 0) + 1);
      }
    }

    return {
      available: true,
      threads: ((threads ?? []) as ThreadRow[]).map((row) =>
        mapThread(row, counts.get(row.id) ?? 0),
      ),
    };
  } catch {
    return { available: false, threads: [] };
  }
}

export async function getForumThread(threadId: string): Promise<ForumThreadResult> {
  if (!hasSupabaseConfig()) return { available: false, posts: [] };

  try {
    const supabase = await createClient();
    const [{ data: thread, error: threadError }, { data: posts, error: postError }] =
      await Promise.all([
        supabase
          .from("forum_threads")
          .select("id, title, body, category, author_name, status, created_at, updated_at")
          .eq("id", threadId)
          .single(),
        supabase
          .from("forum_posts")
          .select("id, thread_id, author_name, body, attachment_path, attachment_name, attachment_type, attachment_size, created_at")
          .eq("thread_id", threadId)
          .eq("status", "published")
          .order("created_at", { ascending: true })
          .limit(200),
      ]);

    if (threadError || postError || !thread) {
      return { available: !threadError || threadError.code !== "42P01", posts: [] };
    }

    const mappedPosts = ((posts ?? []) as PostRow[]).map((post) => {
      const publicUrl = post.attachment_path
        ? supabase.storage.from("forum-attachments").getPublicUrl(post.attachment_path).data.publicUrl
        : undefined;

      return {
        id: post.id,
        authorName: post.author_name,
        body: post.body,
        createdAt: post.created_at,
        attachment:
          publicUrl && post.attachment_name && post.attachment_type && post.attachment_size
            ? {
                name: post.attachment_name,
                type: post.attachment_type,
                size: post.attachment_size,
                url: publicUrl,
              }
            : undefined,
      };
    });

    return {
      available: true,
      thread: mapThread(thread as ThreadRow, mappedPosts.length),
      posts: mappedPosts,
    };
  } catch {
    return { available: false, posts: [] };
  }
}
