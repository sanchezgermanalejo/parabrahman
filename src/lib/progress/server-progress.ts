import "server-only";

import { availableLessonIds } from "@/content/academy";
import { hasSupabaseConfig } from "@/lib/supabase/config";
import { createClient } from "@/lib/supabase/server";

export type StudentProgress = {
  available: boolean;
  completedLessonIds: string[];
};

export async function getStudentProgress(): Promise<StudentProgress> {
  if (!hasSupabaseConfig()) return { available: false, completedLessonIds: [] };

  try {
    const supabase = await createClient();
    const { data: claimsData, error: claimsError } = await supabase.auth.getClaims();
    const userId = claimsData?.claims?.sub;

    if (claimsError || typeof userId !== "string") {
      return { available: false, completedLessonIds: [] };
    }

    const { data, error } = await supabase
      .from("lesson_progress")
      .select("lesson_id")
      .eq("user_id", userId);

    if (error) return { available: false, completedLessonIds: [] };

    const validLessonIds = new Set<string>(availableLessonIds);
    return {
      available: true,
      completedLessonIds: (data ?? [])
        .map((row) => row.lesson_id)
        .filter((lessonId): lessonId is string =>
          typeof lessonId === "string" && validLessonIds.has(lessonId),
        ),
    };
  } catch {
    return { available: false, completedLessonIds: [] };
  }
}
