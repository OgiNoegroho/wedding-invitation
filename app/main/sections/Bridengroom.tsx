'use client'

import { motion } from 'framer-motion'

export default function Bridengroom() {
  return (
    <motion.section
      className="relative min-h-screen w-full overflow-hidden bg-white py-32 px-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        {/* Bride */}
        <motion.div
          className="relative text-center md:text-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          {/* Label */}
          <motion.span
            className="inline-block mb-4 px-4 py-1 text-xs tracking-widest text-gray-400 border border-gray-300 rounded-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            THE BRIDE
          </motion.span>

          {/* Image */}
          <motion.div
            className="relative mx-auto md:mx-0 w-64 h-64 rounded-full border-2 border-gray-300 p-2 shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <img
              src="/bride.jpg"
              alt="Bride"
              className="w-full h-full object-cover rounded-full"
            />
          </motion.div>

          {/* Name */}
          <motion.h2
            className="mt-8 font-script text-4xl md:text-5xl"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            viewport={{ once: true }}
          >
            Mega Ayu Adila, S.Pd
          </motion.h2>

          {/* Parents */}
          <motion.p
            className="mt-6 text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
            viewport={{ once: true }}
          >
            Putri dari
            <br />
            Bapak Bambang Sugiarto &amp; Ibu Suryani Ilyas, S.H
          </motion.p>
        </motion.div>

        {/* Groom */}
        <motion.div
          className="relative text-center md:text-right"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          {/* Label */}
          <motion.span
            className="inline-block mb-4 px-4 py-1 text-xs tracking-widest text-gray-400 border border-gray-300 rounded-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            THE GROOM
          </motion.span>

          {/* Image */}
          <motion.div
            className="relative mx-auto md:ml-auto w-64 h-64 rounded-full border-2 border-gray-300 p-2 shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <img
              src="/groom.jpg"
              alt="Groom"
              className="w-full h-full object-cover rounded-full"
            />
          </motion.div>

          {/* Name */}
          <motion.h2
            className="mt-8 font-script text-4xl md:text-5xl"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            viewport={{ once: true }}
          >
            Ilham Saputra, S.Pd
          </motion.h2>

          {/* Parents */}
          <motion.p
            className="mt-6 text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
            viewport={{ once: true }}
          >
            Putra dari
            <br />
            Bapak Islami &amp; Ibu Rina Hayati
          </motion.p>
        </motion.div>
      </div>

      {/* Center Ornament */}
      <motion.div
        className="mt-24 flex items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        viewport={{ once: true }}
      >
        <span className="h-px w-24 bg-gray-300" />
        <span className="mx-4 text-gray-400">✿</span>
        <span className="h-px w-24 bg-gray-300" />
      </motion.div>
    </motion.section>
  )
}
