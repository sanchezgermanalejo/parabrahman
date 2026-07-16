import "server-only";

import { availableLessonIds } from "@/content/academy";
import { hasSupabaseConfig } from "@/lib/supabase/config";
import { createClient } from "@/lib/supabase/server";

export type StudentProgress = {
  available: boolean;
  completedLessonIds: string[];
  lastCompletedLessonId?: string;
  lastCompletedAt?: string;
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
      .select("lesson_id, completed_at, updated_at")
      .eq("user_id", userId)
      .order("updated_at", { ascending: false });

    if (error) return { available: false, completedLessonIds: [] };

    const validLessonIds = new Set<string>(availableLessonIds);
    const completedRows = (data ?? []).filter(
      (row): row is typeof row & { lesson_id: string } =>
        typeof row.lesson_id === "string" && validLessonIds.has(row.lesson_id),
    );
    const lastCompleted = completedRows[0];

    return {
      available: true,
      completedLessonIds: completedRows.map((row) => row.lesson_id),
      lastCompletedLessonId: lastCompleted?.lesson_id,
      lastCompletedAt:
        lastCompleted?.completed_at ?? lastCompleted?.updated_at ?? undefined,
    };
  } catch {
    return { available: false, completedLessonIds: [] };
  }
}
