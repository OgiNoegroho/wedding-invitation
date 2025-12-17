import { NextRequest, NextResponse } from "next/server";
import supabase from "@/lib/supabaseClient";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, attendance, message } = body;

    if (!name || !attendance) {
      return NextResponse.json(
        { error: "Missing name or attendance" },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("rsvps")
      .insert([{ name, attendance, message }])
      .select()
      .single();
    if (error)
      return NextResponse.json({ error: error.message }, { status: 500 });

    return NextResponse.json(data, { status: 201 });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  const { data, error } = await supabase
    .from("rsvps")
    .select("*")
    .order("created_at", { ascending: false });
  if (error)
    return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}
