'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.section
      className="relative min-h-screen flex items-center justify-center text-white text-center px-6 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/footer1.jpg')" }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 space-y-6">
        {/* Heart */}
        <motion.div
          className="text-4xl text-gray-200"
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          ♥
        </motion.div>

        {/* Title */}
        <motion.h2
          className="font-script text-4xl md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          See You On Our Big Day
        </motion.h2>

        {/* Names & Date */}
        <motion.div
          className="space-y-1 text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-lg">Mega &amp; Ilham</p>
          <p className="text-sm">28 Desember 2025</p>
        </motion.div>
      </div>
    </motion.section>
  )
}
