// Lightweight Supabase client helpers for this app
import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

// Browser / client instance (safe to use in client components)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper to create a server-side client when you have a service key
export function createServerSupabaseClient(
  serviceKey?: string
): SupabaseClient {
  const key = serviceKey ?? process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";
  return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL ?? "", key);
}

export default supabase;
