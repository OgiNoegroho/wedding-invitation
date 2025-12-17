"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Guest {
  id: string;
  name: string;
  attending: boolean;
  message: string;
  timestamp: number;
}

export default function Attendance() {
  const [guests, setGuests] = useState<Guest[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    attending: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ ok: boolean; msg: string } | null>(
    null
  );

  // Load existing RSVPs
  useEffect(() => {
    let mounted = true;
    fetch("/api/rsvps")
      .then((r) => r.json())
      .then((data) => {
        if (!mounted) return;
        if (Array.isArray(data)) {
          const mapped = data.map((row: any) => ({
            id: row.id || String(row.created_at),
            name: row.name,
            attending: String(row.attendance).toLowerCase() === "yes",
            message: row.message,
            timestamp: new Date(row.created_at).getTime(),
          }));
          setGuests(mapped);
        }
      })
      .catch(() => {});
    return () => {
      mounted = false;
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus(null);
    if (!formData.name || !formData.attending) {
      setStatus({
        ok: false,
        msg: "Mohon lengkapi nama dan konfirmasi kehadiran",
      });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/rsvps", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          attendance: formData.attending === "yes" ? "Yes" : "No",
          message: formData.message,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Gagal menyimpan RSVP");

      const newGuest: Guest = {
        id: data.id || Date.now().toString(),
        name: data.name,
        attending: String(data.attendance).toLowerCase() === "yes",
        message: data.message,
        timestamp: new Date(data.created_at).getTime(),
      };

      setGuests((s) => [newGuest, ...s]);
      setFormData({ name: "", attending: "", message: "" });
      setStatus({
        ok: true,
        msg: "Terima kasih — konfirmasi Anda telah tersimpan.",
      });
    } catch (err: any) {
      setStatus({ ok: false, msg: err?.message ?? "Kirim gagal" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      id="rsvp"
      className="relative min-h-screen w-full overflow-hidden bg-black py-24 px-4 text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Title */}
      <motion.h2
        className="text-center text-3xl md:text-4xl font-serif mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Konfirmasi Kehadiran
      </motion.h2>

      {/* Decorative divider */}
      <motion.div
        className="flex items-center justify-center mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="h-px w-20 bg-gray-600" />
        <span className="mx-4 text-gray-400">✦</span>
        <div className="h-px w-20 bg-gray-600" />
      </motion.div>

      {/* Card */}
      <motion.div
        className="max-w-xl mx-auto bg-white text-black rounded-xl px-8 py-10 shadow-[0_30px_80px_rgba(0,0,0,0.4)]"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Nama Lengkap
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full rounded-md border border-gray-400 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          {/* Attendance */}
          <div>
            <p className="block text-sm font-medium mb-3">
              Konfirmasi Kehadiran
            </p>
            <div className="flex flex-col gap-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="attendance"
                  value="yes"
                  checked={formData.attending === "yes"}
                  onChange={(e) =>
                    setFormData({ ...formData, attending: e.target.value })
                  }
                />
                <span>✓ Hadir</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="attendance"
                  value="no"
                  checked={formData.attending === "no"}
                  onChange={(e) =>
                    setFormData({ ...formData, attending: e.target.value })
                  }
                />
                <span>✕ Tidak Hadir</span>
              </label>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Ucapan & Doa
            </label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full rounded-md border border-gray-400 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black resize-none"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-3 rounded-md font-medium hover:opacity-90 transition disabled:opacity-60"
          >
            {loading ? "Mengirim…" : "Kirim Konfirmasi"}
          </button>
        </form>

        {status && (
          <p
            className={`text-sm mt-4 ${
              status.ok ? "text-green-500" : "text-red-500"
            }`}
          >
            {status.msg}
          </p>
        )}
      </motion.div>

      {/* Guest Showcase - All Messages */}
      {guests.length > 0 && (
        <motion.div
          className="max-w-3xl mx-auto mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Showcase Header */}
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-serif mb-4">
              Ucapan & Doa
            </h3>

            {/* Decorative divider */}
            <div className="flex items-center justify-center mb-6">
              <div className="h-px w-20 bg-gray-600" />
              <span className="mx-4 text-gray-400">✦</span>
              <div className="h-px w-20 bg-gray-600" />
            </div>

            <p className="text-gray-400 text-sm">
              {guests.length} {guests.length === 1 ? "Tamu" : "Tamu"} telah
              mengirimkan ucapan
            </p>
          </div>

          {/* Guest List */}
          <div className="space-y-5 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
            {guests.map((guest, index) => (
              <motion.div
                key={guest.id}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-white/40 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-lg">{guest.name}</h4>
                    <p className="text-xs text-gray-400 mt-1">
                      {new Date(guest.timestamp).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                      guest.attending
                        ? "bg-green-500/20 text-green-300"
                        : "bg-red-500/20 text-red-300"
                    }`}
                  >
                    {guest.attending ? "✓ Hadir" : "✕ Tidak Hadir"}
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {guest.message || (
                    <span className="italic text-gray-500">
                      Tidak ada ucapan
                    </span>
                  )}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Attendance Statistics */}
          <motion.div
            className="mt-12 flex justify-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* Will Attend */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 mb-3">
                <span className="text-2xl font-bold text-green-300">
                  {guests.filter((g) => g.attending).length}
                </span>
              </div>
              <p className="text-sm text-gray-400">Hadir</p>
            </div>

            {/* Won't Attend */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/20 border border-red-500/30 mb-3">
                <span className="text-2xl font-bold text-red-300">
                  {guests.filter((g) => !g.attending).length}
                </span>
              </div>
              <p className="text-sm text-gray-400">Tidak Hadir</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
}
