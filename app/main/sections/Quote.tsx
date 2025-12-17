'use client'

import { motion } from 'framer-motion'

export default function Quote() {
  return (
    <motion.section
      className="relative min-h-screen w-full overflow-hidden bg-black py-32 px-4 text-white flex items-center justify-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      {/* Corner decorations */}
      <motion.span
        className="absolute top-10 left-10 h-6 w-6 border-t border-l border-gray-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      />
      <motion.span
        className="absolute top-10 right-10 h-6 w-6 border-t border-r border-gray-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
        viewport={{ once: true }}
      />
      <motion.span
        className="absolute bottom-10 left-10 h-6 w-6 border-b border-l border-gray-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      />
      <motion.span
        className="absolute bottom-10 right-10 h-6 w-6 border-b border-r border-gray-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
        viewport={{ once: true }}
      />

      {/* Center content */}
      <div className="flex flex-col items-center text-center">
        {/* Heart icon */}
        <motion.div
          className="mb-10 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-gray-400">
            <span className="text-2xl text-gray-300">♥</span>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="flex items-center justify-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          viewport={{ once: true }}
        >
          <div className="h-px w-20 bg-gray-500" />
          <span className="mx-4 text-gray-400">✦</span>
          <div className="h-px w-20 bg-gray-500" />
        </motion.div>

        {/* Quote text */}
        <motion.p
          className="max-w-2xl text-sm md:text-base leading-relaxed font-light text-gray-200"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          viewport={{ once: true }}
        >
          By the grace of God, we are pleased to announce our wedding to you,
          our family and friends
        </motion.p>

        {/* Bottom divider */}
        <motion.div
          className="flex items-center justify-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="h-px w-14 bg-gray-500" />
          <span className="mx-3 text-gray-400">❖</span>
          <div className="h-px w-14 bg-gray-500" />
        </motion.div>
      </div>
    </motion.section>
  )
}
