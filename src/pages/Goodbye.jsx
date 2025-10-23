import { motion } from "framer-motion";
import bnnLogo from "../assets/bnn_logo.jpg";

export default function Goodbye() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 to-blue-600 px-4 text-center">
      {/* Logo */}
      <motion.img
        src={bnnLogo}
        alt="Logo BNN"
        className="w-28 h-28 mb-6 drop-shadow-lg"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.7, ease: "backOut" }}
      />

      {/* Judul */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-white"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Terima Kasih 🙌
      </motion.h1>

      <motion.p
        className="mt-4 text-lg md:text-xl text-gray-200 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Kamu sudah ikut berpartisipasi dalam <br />
        <span className="font-semibold text-yellow-300">
          Game Ular Tangga Anti Narkoba
        </span> 🎲🐍 <br />
        Mari terus bersama-sama wujudkan Indonesia <span className="text-green-300">Sehat & Bebas Narkoba</span> 🚀
      </motion.p>

      {/* Tombol Kembali ke Home */}
      <motion.a
        href="/"
        className="mt-10 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow hover:bg-yellow-500 transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        ⬅️ Kembali ke Beranda
      </motion.a>
    </div>
  );
}
