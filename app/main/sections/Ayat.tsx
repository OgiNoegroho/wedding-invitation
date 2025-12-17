'use client'

import { motion } from 'framer-motion'

export default function Ayat() {
  return (
    <motion.section
      className="relative min-h-screen w-full overflow-hidden py-24 px-4 flex flex-col items-center justify-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      {/* Decorative lines top */}
      <motion.div
        className="flex items-center justify-center mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="h-px w-24 bg-gray-300" />
        <span className="mx-4 text-gray-400">✦</span>
        <div className="h-px w-24 bg-gray-300" />
      </motion.div>

      {/* Ayat Card */}
      <motion.div
        className="relative max-w-3xl mx-auto rounded-xl border border-gray-800 px-10 py-12 text-center shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
        viewport={{ once: true }}
      >
        {/* Arabic text */}
        <motion.p
          className="text-xl md:text-2xl leading-loose font-arabic mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا
          لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً
        </motion.p>

        {/* Divider */}
        <motion.div
          className="flex items-center justify-center my-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="h-px w-10 bg-gray-300" />
          <span className="mx-3 text-gray-400">•</span>
          <span className="h-px w-10 bg-gray-300" />
        </motion.div>

        {/* Source */}
        <motion.p
          className="text-sm font-medium text-gray-700 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          viewport={{ once: true }}
        >
          QS. Ar-Rum : 21
        </motion.p>

        {/* Translation */}
        <motion.p
          className="text-gray-600 italic leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
          pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
          dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
          kasih dan sayang."
        </motion.p>
      </motion.div>

      {/* Decorative lines bottom */}
      <motion.div
        className="flex items-center justify-center mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        viewport={{ once: true }}
      >
        <div className="h-px w-16 bg-gray-300" />
        <span className="mx-3 text-gray-400">❖</span>
        <div className="h-px w-16 bg-gray-300" />
      </motion.div>
    </motion.section>
  )
}
