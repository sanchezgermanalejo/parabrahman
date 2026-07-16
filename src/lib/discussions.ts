import "server-only";

import { hasSupabaseConfig } from "@/lib/supabase/config";
import { createClient } from "@/lib/supabase/server";

export type LessonDiscussionItem = {
  id: string;
  authorName: string;
  kind: "comment" | "question";
  rating: number;
  body: string;
  createdAt: string;
};

export type LessonDiscussionResult = {
  available: boolean;
  items: LessonDiscussionItem[];
};

type DiscussionRow = {
  id: string;
  author_name: string;
  kind: "comment" | "question";
  rating: number;
  body: string;
  created_at: string;
};

export async function getLessonDiscussions(
  lessonId: string,
): Promise<LessonDiscussionResult> {
  if (!hasSupabaseConfig()) return { available: false, items: [] };

  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("lesson_discussions")
      .select("id, author_name, kind, rating, body, created_at")
      .eq("lesson_id", lessonId)
      .eq("status", "published")
      .order("created_at", { ascending: false })
      .limit(50);

    if (error) return { available: false, items: [] };

    return {
      available: true,
      items: ((data ?? []) as DiscussionRow[]).map((item) => ({
        id: item.id,
        authorName: item.author_name,
        kind: item.kind,
        rating: item.rating,
        body: item.body,
        createdAt: item.created_at,
      })),
    };
  } catch {
    return { available: false, items: [] };
  }
}
