import "server-only";

import { hasSupabaseConfig } from "@/lib/supabase/config";
import { createClient } from "@/lib/supabase/server";

export type CurrentStudent = {
  email: string;
  fullName?: string;
};

export async function getCurrentStudent(): Promise<CurrentStudent | null> {
  if (!hasSupabaseConfig()) return null;

  try {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.getClaims();
    const claims = data?.claims;

    if (error || !claims || typeof claims.email !== "string") return null;

    const metadata = claims.user_metadata;
    const fullName =
      metadata &&
      typeof metadata === "object" &&
      "full_name" in metadata &&
      typeof metadata.full_name === "string"
        ? metadata.full_name.trim()
        : undefined;

    return {
      email: claims.email,
      fullName: fullName || undefined,
    };
  } catch {
    return null;
  }
}
