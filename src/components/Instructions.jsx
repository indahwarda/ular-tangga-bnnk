export default function Instructions({ onBack }) {
  return (
    <div className="min-h-screen p-4">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">📋 Petunjuk Permainan</h2>

        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">🎯 Tujuan Permainan</h3>
            <p className="text-gray-700">Menjadi pemain pertama yang mencapai kotak ke-30 sambil mempelajari materi anti narkoba.</p>
          </div>

          <div className="bg-green-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-green-700 mb-3">🎲 Cara Bermain</h3>
            <ol className="text-gray-700 space-y-2 list-decimal list-inside">
              <li>Klik tombol "Lempar Dadu" untuk memulai giliran</li>
              <li>Jawab pertanyaan yang muncul dengan benar</li>
              <li>Jika benar: maju sesuai angka dadu</li>
              <li>Jika salah: tetap di tempat</li>
              <li>Perhatikan ular dan tangga di papan</li>
            </ol>
          </div>

          <div className="bg-yellow-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-yellow-700 mb-3">🐍🪜 Ular & Tangga</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-red-600">🐍 Ular (Turun):</p>
                <p className="text-gray-700 text-sm">Jika mendarat di kepala ular, turun ke ekor ular</p>
              </div>
              <div>
                <p className="font-semibold text-green-600">🪜 Tangga (Naik):</p>
                <p className="text-gray-700 text-sm">Jika mendarat di bawah tangga, naik ke atas tangga</p>
              </div>
            </div>
          </div>
        </div>

        <button onClick={onBack} className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition duration-300">
          ← Kembali ke Beranda
        </button>
      </div>
    </div>
  );
}
