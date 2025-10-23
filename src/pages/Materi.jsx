import React, { useState } from "react";
import { BookOpen, AlertTriangle, ShieldCheck, ArrowLeft, CheckCircle, Heart, Brain, Users } from "lucide-react";

function Material({ onBack }) {
  const [currentView, setCurrentView] = useState("list");
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  const materiList = [
    {
      id: 1,
      title: "Pengenalan Narkoba",
      description: "Pelajari apa itu narkoba, jenis-jenisnya, dan bahayanya bagi kesehatan dan kehidupan.",
      icon: <BookOpen className="w-12 h-12" />,
      color: "from-blue-400 to-blue-600",
      borderColor: "border-blue-400",
    },
    {
      id: 2,
      title: "Dampak Narkoba",
      description: "Memahami dampak fisik, psikologis, dan sosial dari penggunaan narkoba.",
      icon: <AlertTriangle className="w-12 h-12" />,
      color: "from-red-400 to-red-600",
      borderColor: "border-red-400",
    },
    {
      id: 3,
      title: "Cara Pencegahan",
      description: "Langkah-langkah untuk mencegah dan melindungi diri dari bahaya narkoba.",
      icon: <ShieldCheck className="w-12 h-12" />,
      color: "from-green-400 to-green-600",
      borderColor: "border-green-400",
    },
  ];

  const materiDetail = {
    1: {
      title: "Pengenalan Narkoba",
      sections: [
        {
          subtitle: "Apa itu Narkoba?",
          icon: <BookOpen className="w-8 h-8 text-blue-500" />,
          content: "Narkoba adalah singkatan dari Narkotika, Psikotropika, dan Bahan Adiktif berbahaya lainnya. Zat-zat ini dapat mengubah fungsi otak dan tubuh, menyebabkan ketergantungan yang sangat berbahaya."
        },
        {
          subtitle: "Jenis-Jenis Narkoba",
          icon: <AlertTriangle className="w-8 h-8 text-orange-500" />,
          content: "Terdapat berbagai jenis narkoba seperti ganja, sabu-sabu, ekstasi, heroin, kokain, dan obat-obatan terlarang lainnya. Semuanya memiliki efek berbahaya bagi tubuh dan mental."
        },
        {
          subtitle: "Kenapa Berbahaya?",
          icon: <Heart className="w-8 h-8 text-red-500" />,
          content: "Narkoba merusak sistem saraf, organ vital, dan dapat menyebabkan kematian. Selain itu, narkoba juga menghancurkan masa depan, pendidikan, dan hubungan sosial."
        }
      ]
    },
    2: {
      title: "Dampak Narkoba",
      sections: [
        {
          subtitle: "Dampak Fisik",
          icon: <Heart className="w-8 h-8 text-red-500" />,
          content: "Kerusakan organ tubuh, penurunan sistem kekebalan, gangguan pernapasan, kerusakan hati dan ginjal, serta risiko penyakit menular seperti HIV/AIDS dan Hepatitis."
        },
        {
          subtitle: "Dampak Psikologis",
          icon: <Brain className="w-8 h-8 text-purple-500" />,
          content: "Gangguan mental, depresi, kecemasan berlebihan, halusinasi, paranoia, dan perubahan kepribadian yang drastis. Pengguna juga kehilangan kemampuan berpikir jernih."
        },
        {
          subtitle: "Dampak Sosial",
          icon: <Users className="w-8 h-8 text-blue-500" />,
          content: "Putusnya hubungan keluarga, kehilangan pekerjaan dan pendidikan, masalah hukum, kemiskinan, dan pengucilan dari masyarakat. Masa depan menjadi hancur."
        }
      ]
    },
    3: {
      title: "Cara Pencegahan",
      sections: [
        {
          subtitle: "Kuatkan Diri",
          icon: <ShieldCheck className="w-8 h-8 text-green-500" />,
          content: "Tingkatkan kepercayaan diri, perkuat iman dan spiritual, fokus pada prestasi, dan kembangkan hobi positif. Jangan mudah terpengaruh ajakan teman."
        },
        {
          subtitle: "Pilih Pergaulan yang Baik",
          icon: <Users className="w-8 h-8 text-blue-500" />,
          content: "Bergaul dengan teman-teman yang positif, hindari lingkungan yang rawan narkoba, dan berani menolak ajakan menggunakan narkoba dengan tegas."
        },
        {
          subtitle: "Peran Keluarga & Sekolah",
          icon: <Heart className="w-8 h-8 text-pink-500" />,
          content: "Komunikasi terbuka dengan orang tua, ikuti program anti narkoba di sekolah, dan jangan ragu meminta bantuan jika ada masalah atau tekanan."
        }
      ]
    }
  };

  const handlePelajariSelanjutnya = (materialId) => {
    setSelectedMaterial(materialId);
    setCurrentView("detail");
  };

  const handleBackToList = () => {
    setCurrentView("list");
    setSelectedMaterial(null);
  };

  if (currentView === "detail" && selectedMaterial) {
    const detail = materiDetail[selectedMaterial];
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-400 p-6 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Back Button */}
          <button
            onClick={handleBackToList}
            className="mb-6 flex items-center gap-2 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-full transition transform hover:scale-105 shadow-lg"
          >
            <ArrowLeft className="w-5 h-5" />
            Kembali
          </button>

          {/* Title */}
          <h1 className="text-5xl font-extrabold text-white mb-8 text-center drop-shadow-lg">
            {detail.title}
          </h1>

          {/* Content Cards */}
          <div className="space-y-6">
            {detail.sections.map((section, index) => (
              <div
                key={index}
                className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 transform transition hover:scale-102 hover:shadow-3xl"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-2xl">
                    {section.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      {section.subtitle}
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Action */}
          <div className="mt-10 text-center">
            <div className="bg-white/20 backdrop-blur-md rounded-3xl p-6 inline-block">
              <p className="text-white text-lg font-semibold flex items-center gap-2 justify-center">
                <CheckCircle className="w-6 h-6" />
                Katakan TIDAK pada Narkoba!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-teal-400 to-blue-500 relative p-6 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-300 opacity-20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-300 opacity-20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-300 opacity-10 rounded-full blur-3xl"></div>
      </div>

      {/* Back Button */}
      <div className="absolute top-6 left-6 z-20">
        <button
          onClick={onBack}
          className="w-14 h-14 bg-white/90 backdrop-blur-sm hover:bg-white shadow-xl rounded-full flex items-center justify-center transition transform hover:scale-110"
        >
          <ArrowLeft className="w-7 h-7 text-gray-700" />
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto relative z-10 pt-20">
        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-4 text-white drop-shadow-2xl">
          MATERI EDUKASI
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-300 drop-shadow-lg">
          ANTI NARKOBA
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {materiList.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-3xl shadow-2xl overflow-hidden transform transition hover:scale-105 hover:rotate-1"
            >
              {/* Gradient Header */}
              <div className={`bg-gradient-to-br ${item.color} p-6 flex items-center justify-center`}>
                <div className="text-white transform transition group-hover:scale-110">
                  {item.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-extrabold mb-3 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>
                <button
                  onClick={() => handlePelajariSelanjutnya(item.id)}
                  className={`w-full bg-gradient-to-r ${item.color} hover:shadow-xl text-white font-bold py-3 px-6 rounded-full transition transform hover:scale-105 shadow-md`}
                >
                  Pelajari Selanjutnya →
                </button>
              </div>

              {/* Decorative corner */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${item.color} opacity-20 rounded-bl-full`}></div>
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white/20 backdrop-blur-md rounded-3xl px-8 py-6 shadow-2xl">
            <p className="text-white text-2xl font-bold mb-2">
              "Masa Depan Cerah Tanpa Narkoba"
            </p>
            <p className="text-white/90 text-lg">
              Mari bersama-sama cegah bahaya narkoba!
            </p>
          </div>
        </div>

        {/* Exit Button */}
        <div className="mt-10 text-center">
          <button
            onClick={onBack}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-10 rounded-full shadow-2xl transition transform hover:scale-110"
          >
            Keluar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Material;