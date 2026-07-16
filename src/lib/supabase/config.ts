const urlVariable = "NEXT_PUBLIC_SUPABASE_URL";
const keyVariable = "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY";

export function hasSupabaseConfig() {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
  );
}

export function getSupabaseConfig() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const publishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!url || !publishableKey) {
    throw new Error(
      `Falta configurar ${urlVariable} o ${keyVariable}. Copia .env.example como .env.local y agrega los valores del proyecto Supabase.`,
    );
  }

  return { url, publishableKey };
}
