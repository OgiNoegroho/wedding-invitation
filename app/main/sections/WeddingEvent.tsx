'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function WeddingEvent() {
  const target = new Date(2025, 11, 28, 8, 0, 0)

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    finished: false,
  })

  useEffect(() => {
    function update() {
      const now = new Date()
      const diff = target.getTime() - now.getTime()
      if (diff <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          finished: true,
        })
        return
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)
      setTimeLeft({ days, hours, minutes, seconds, finished: false })
    }

    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  function pad(n: number) {
    return String(n).padStart(2, '0')
  }

  return (
    <motion.section
      className="relative min-h-screen w-full overflow-hidden bg-white py-32 px-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          className="text-4xl font-serif mb-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Wedding Event
        </motion.h2>

        {/* Divider */}
        <motion.div
          className="flex items-center justify-center mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="h-px w-20 bg-gray-300" />
          <span className="mx-4 text-gray-400">✦</span>
          <div className="h-px w-20 bg-gray-300" />
        </motion.div>

        {/* Events */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {/* Akad */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-black">
              <span className="text-xl">📅</span>
            </div>
            <h3 className="text-3xl font-serif mb-4">Akad Nikah</h3>
            <p className="text-gray-700 mb-2">28 Desember 2025</p>
            <p className="text-gray-700 mb-6">08.00 s/d Selesai</p>
            <p className="max-w-sm mx-auto text-gray-600 leading-relaxed">
              Jl. Kesuma Komplek Peputra Indah I Blok C No 37, Simpang Tiga,
              Bukit Raya, Pekanbaru (Kediaman Mempelai Wanita)
            </p>
          </motion.div>

          {/* Resepsi */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-black">
              <span className="text-xl">✔</span>
            </div>
            <h3 className="text-3xl font-serif mb-4">Resepsi</h3>
            <p className="text-gray-700 mb-2">28 Desember 2025</p>
            <p className="text-gray-700 mb-6">11.00 s/d Selesai</p>
            <p className="max-w-sm mx-auto text-gray-600 leading-relaxed">
              Jl. Kesuma Komplek Peputra Indah I Blok C No 37, Simpang Tiga,
              Bukit Raya, Pekanbaru (Kediaman Mempelai Wanita)
            </p>
          </motion.div>
        </div>

        {/* Countdown */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="mb-8 text-gray-600">Menghitung mundur menuju acara</p>

          <div className="flex justify-center gap-4 flex-wrap">
            {timeLeft.finished ? (
              <p className="text-2xl font-semibold">
                Acara Dimulai / Selesai
              </p>
            ) : (
              <>
                <div className="w-24 rounded-lg bg-black py-4 text-white">
                  <p className="text-2xl font-semibold">{timeLeft.days}</p>
                  <p className="text-xs mt-1">Hari</p>
                </div>
                <div className="w-20 rounded-lg bg-black py-4 text-white">
                  <p className="text-2xl font-semibold">
                    {pad(timeLeft.hours)}
                  </p>
                  <p className="text-xs mt-1">Jam</p>
                </div>
                <div className="w-20 rounded-lg bg-black py-4 text-white">
                  <p className="text-2xl font-semibold">
                    {pad(timeLeft.minutes)}
                  </p>
                  <p className="text-xs mt-1">Menit</p>
                </div>
                <div className="w-20 rounded-lg bg-black py-4 text-white">
                  <p className="text-2xl font-semibold">
                    {pad(timeLeft.seconds)}
                  </p>
                  <p className="text-xs mt-1">Detik</p>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
