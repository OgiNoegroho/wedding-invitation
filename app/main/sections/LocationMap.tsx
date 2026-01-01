"use client";

import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";

export default function LocationMap() {
  return (
    <motion.section
      className="relative w-full bg-black py-32 px-4 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto text-center text-white">
        {/* Title */}
        <motion.h2
          className="text-4xl font-serif mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Lokasi Acara
        </motion.h2>

        {/* Divider */}
        <motion.div
          className="flex items-center justify-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="h-px w-20 bg-gray-600" />
          <span className="mx-4 text-gray-400">✦</span>
          <div className="h-px w-20 bg-gray-600" />
        </motion.div>

        {/* Map Card */}
        <motion.div
          className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_40px_100px_rgba(0,0,0,0.7)]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3579.3348822608637!2d101.04969307496458!3d0.36451799963190645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwMjEnNTIuMyJOIDEwMcKwMDMnMDguMiJF!5e1!3m2!1sid!2sid!4v1767243947730!5m2!1sid!2sid"
            className="w-full h-[480px] border-0 grayscale contrast-125 brightness-75"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Pin Overlay */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0, y: -20 }}
              whileInView={{ scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <MapPin className="h-12 w-12 text-red-500 drop-shadow-lg" />
            </motion.div>
          </div>
        </motion.div>

        {/* Address */}
        <motion.p
          className="mt-10 max-w-2xl mx-auto text-gray-400 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Jl. Utama, Desa Batu Belah, Disamping Masjid Baiturrahman.
          <br />
          <span className="italic">(Kediaman Mempelai Pria)</span>
        </motion.p>

        {/* Button */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          viewport={{ once: true }}
        >
          <a
            href="https://goo.gl/maps/zrumkZRqZJJ8ffqR6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm text-white backdrop-blur hover:bg-white/20 transition"
          >
            Buka di Google Maps
            <ExternalLink className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
