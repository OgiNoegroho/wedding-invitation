'use client'

import { motion } from 'framer-motion'
import { Gift } from 'lucide-react'

export default function WeddingGift() {
  return (
    <motion.section
      className="flex min-h-screen flex-col items-center justify-center bg-white px-6 py-24 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <Gift className="mb-6 h-10 w-10 text-gray-700" />
      </motion.div>

      {/* Title */}
      <motion.h2
        className="mb-6 font-serif text-4xl text-gray-900"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Wedding Gift
      </motion.h2>

      {/* Description */}
      <motion.p
        className="mb-14 max-w-xl text-sm leading-relaxed text-gray-600"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Namun
        jika Anda ingin memberi hadiah, kami sangat berterima kasih atas
        perhatian dan kebaikan Anda.
      </motion.p>

      {/* Bank Card */}
      <motion.div
        className="w-full max-w-md rounded-xl border border-gray-800 px-6 py-10 shadow-sm"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <p className="mb-6 text-sm text-gray-700">Bank Jago</p>
        <p className="mb-6 font-mono text-lg tracking-wide">100790142839</p>
        <p className="text-sm text-gray-700">a.n. Mega Ayu Adila</p>
      </motion.div>
    </motion.section>
  )
}
