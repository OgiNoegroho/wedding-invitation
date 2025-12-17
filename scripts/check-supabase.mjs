#!/usr/bin/env node
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

dotenv.config({ path: ".env" });

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;

if (!url || !key) {
  console.error(
    "Missing NEXT_PUBLIC_SUPABASE_URL or anon/publishable key in .env"
  );
  process.exit(2);
}

const supabase = createClient(url, key);

async function main() {
  try {
    const { data, error } = await supabase.from("rsvps").select("id").limit(1);
    if (error) {
      console.error("Supabase query error:", error.message ?? error);
      process.exit(1);
    }
    console.log("Supabase connection OK. Sample rows:", data || []);
    process.exit(0);
  } catch (err) {
    console.error("Error connecting to Supabase:", err);
    process.exit(1);
  }
}

main();
