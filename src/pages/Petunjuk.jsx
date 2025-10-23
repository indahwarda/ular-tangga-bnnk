import { ListChecks, Dice6, Trophy } from "lucide-react";

export default function Petunjuk({ onBack }) {
  const steps = [
    {
      icon: <Dice6 className="w-10 h-10 text-indigo-500" />,
      title: "Lempar Dadu",
      desc: "Pemain bergiliran melempar dadu untuk menentukan langkah bidak di papan ular tangga.",
    },
    {
      icon: <ListChecks className="w-10 h-10 text-green-500" />,
      title: "Jawab Pertanyaan",
      desc: "Jika mendarat di kotak tertentu, akan muncul pertanyaan seputar bahaya narkoba. Jawab dengan benar untuk tetap maju.",
    },
    {
      icon: <Trophy className="w-10 h-10 text-yellow-500" />,
      title: "Capai Garis Akhir",
      desc: "Pemain pertama yang mencapai kotak terakhir adalah pemenang. Ingat, pengetahuan adalah kunci!",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-600 to-purple-700 text-white flex flex-col items-center px-4 py-10">
      {/* Judul */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6">📑 Petunjuk Permainan</h1>
      <p className="mb-10 max-w-xl text-center text-gray-100">
        Ikuti langkah-langkah berikut untuk memainkan game ular tangga anti narkoba dengan benar dan menyenangkan.
      </p>

      {/* Step Cards */}
      <div className="grid md:grid-cols-3 gap-6 w-full max-w-5xl">
        {steps.map((step, i) => (
          <div
            key={i}
            className="bg-white text-gray-800 p-6 rounded-2xl shadow-xl flex flex-col items-center text-center hover:scale-105 transition transform"
          >
            {step.icon}
            <h2 className="mt-4 text-xl font-semibold">{step.title}</h2>
            <p className="mt-2 text-gray-600">{step.desc}</p>
          </div>
        ))}
      </div>

      {/* Tombol kembali */}
      <button
        onClick={onBack}
        className="mt-12 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow hover:bg-yellow-500 transition"
      >
        ⬅️ Kembali ke Menu
      </button>
    </div>
  );
}
