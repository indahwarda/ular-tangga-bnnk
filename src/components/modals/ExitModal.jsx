import { motion } from "framer-motion";

export default function ExitModal({ onClose, onConfirm }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Konfirmasi Keluar</h2>
        <p className="text-gray-600 mb-6">
          Apakah kamu yakin ingin keluar dari game <span className="font-semibold">Ular Tangga Anti Narkoba</span>?
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
          >
            ❌ Batal
          </button>
          <button
            onClick={onConfirm}
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            🚪 Keluar
          </button>
        </div>
      </motion.div>
    </div>
  );
}
