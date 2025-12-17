"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Landing() {
  const searchParams = useSearchParams();
  const guestName = searchParams.get("to");

  return (
    <section className="fixed inset-0 flex items-center justify-center bg-black text-white">
      <div className="flex flex-col items-center text-center px-6">
        {/* Heart */}
        <div className="mb-8 text-gray-300 text-3xl">♥</div>

        {/* Subtitle */}
        <p className="text-xs tracking-[0.35em] text-gray-300 mb-6 font-playfair">
          THE WEDDING OF
        </p>

        {/* Names */}
        <h1 className="font-greatvibes text-5xl md:text-6xl mb-10">
          Mega & Ilham
        </h1>

        {/* Recipient */}
        <p className="text-sm text-gray-300 mb-1 font-playfair">Kepada Yth:</p>

        <p className="text-base font-playfair">Bapak/Ibu/Saudara/i</p>

        {/* Guest name (ONLY if exists) */}
        {guestName && (
          <p className="text-lg font-playfair mt-1 mb-10">{guestName}</p>
        )}

        {/* Button */}
        <Link
          href="/main"
          className="bg-white text-black px-8 py-3 rounded-md text-sm tracking-wide hover:bg-gray-200 transition"
        >
          Open Invitation
        </Link>
      </div>
    </section>
  );
}