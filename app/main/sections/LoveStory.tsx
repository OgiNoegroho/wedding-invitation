'use client'

import { motion } from 'framer-motion'

export default function LoveStory() {
  return (
    <motion.section
      className="relative min-h-screen w-full overflow-hidden py-24 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Title */}
      <motion.h2
        className="text-center text-3xl md:text-4xl font-serif mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Love Story
      </motion.h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-0 top-0 h-full w-px bg-gray-300 z-0" />

        {/* Timeline Items */}
        <TimelineItem
          date="2023"
          title="First Meet"
          content="Kami pertama bertemu pada tahun 2023, saat ia baru bergabung di sekolah tempat kami mengajar. Awalnya kami hanya saling sapa sebagai rekan kerja, hingga akhirnya ditempatkan sebagai partner care teacher di tahun ajaran baru. Dari situlah kebersamaan kami mulai tumbuh."
        />

        <TimelineItem
          date="Februari 2024"
          title="The Beginning"
          content="Berawal dari rekan kerja, kami semakin
        mengenal satu sama lain. Rasa suka perlahan muncul, meski sempat
        terhalang banyak pertimbangan. Namun pada akhirnya, hati kami membawa
        pada keputusan untuk memulai hubungan ini di Februari 2024."
        />

        <TimelineItem
          date="7 November 2025"
          title="The Proposal"
          content="Langkah demi langkah kami jalani bersama, dengan doa dan harapan yang sama. Keyakinan itu menguat, hingga pada 7 November 2025, acara lamaran terlaksana sebagai awal manis menuju masa depan yang kami impikan."
        />

        <TimelineItem
          date="28 Desember 2025"
          title="Our Wedding Day"
          content="Berawal dari partner
        kerja yang akan menjadi partner hidup selamanya. Dengan penuh rasa
        syukur, insyaAllah kami akan mengikat janji suci pernikahan pada 28
        Desember 2025."
          highlight
        />
      </div>
    </motion.section>
  )
}

function TimelineItem({
  date,
  title,
  content,
  highlight = false,
}: {
  date: string
  title: string
  content: string
  highlight?: boolean
}) {
  return (
    <motion.div
      className="relative flex gap-10 mb-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Dot */}
      <motion.div
        className="relative z-20 -ml-1"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring' }}
        viewport={{ once: true }}
      >
        <div className="w-3 h-3 rounded-full bg-black mt-2" />
      </motion.div>

      {/* Card */}
      <motion.div
        className={`w-full rounded-xl px-8 py-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] ${
          highlight
            ? 'bg-black text-white border-transparent'
            : 'border border-gray-800'
        }`}
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p
          className={`text-sm mb-1 ${
            highlight ? 'text-gray-300' : 'text-gray-500'
          }`}
        >
          {date}
        </p>

        <h3
          className={`text-xl font-serif mb-3 ${
            highlight ? 'text-white' : ''
          }`}
        >
          {title}
        </h3>

        <p
          className={`leading-relaxed ${
            highlight ? 'text-gray-200' : 'text-gray-600'
          }`}
        >
          {content}
        </p>
      </motion.div>
    </motion.div>
  )
}
