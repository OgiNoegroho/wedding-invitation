"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image - Responsive */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <Image
          src="/hero.jpg"
          alt="Wedding Background"
          fill
          priority
          className="object-cover object-center"
          quality={90}
        />
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center px-4">
        <motion.p
          className="text-white tracking-[0.35em] text-xs md:text-sm mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          THE WEDDING OF
        </motion.p>

        <motion.h1
          className="font-greatvibes text-white text-5xl md:text-7xl lg:text-8xl mb-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        >
          Mega & Ilham
        </motion.h1>
      </div>
    </section>
  );
}
