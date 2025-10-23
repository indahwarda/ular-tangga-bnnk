import React, { useState } from "react";

function Material({ onBack }) {
  const [currentView, setCurrentView] = useState("list");
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  const materiList = [
    {
      id: 1,
      title: "Pengenalan Narkoba",
      description:
        "Pelajari apa itu narkoba, jenis-jenisnya, dan bahayanya bagi kesehatan dan kehidupan.",
    },
    {
      id: 2,
      title: "Dampak Narkoba",
      description:
        "Memahami dampak fisik, psikologis, dan sosial dari penggunaan narkoba.",
    },
    {
      id: 3,
      title: "Cara Pencegahan",
      description:
        "Langkah-langkah untuk mencegah dan melindungi diri dari bahaya narkoba.",
    },
  ];

  const materiDetail = {
    1: { title: "Pengenalan Narkoba", content: "Detail materi pengenalan narkoba..." },
    2: { title: "Dampak Narkoba", content: "Detail materi dampak narkoba..." },
    3: { title: "Cara Pencegahan", content: "Detail materi pencegahan..." },
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
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-400 to-green-700 p-6">
        <h1 className="text-4xl font-bold text-white mb-6">{detail.title}</h1>
        <div className="bg-white rounded-2xl shadow-lg p-6 max-w-2xl text-center">
          <p className="text-gray-700 text-lg">{detail.content}</p>
        </div>
        <button
          onClick={handleBackToList}
          className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-full"
        >
          Kembali
        </button>
      </div>
    );
  }

    return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-400 to-green-700 relative p-6">
      {/* Tombol Kembali */}
      <div className="absolute top-6 left-6">
        <button
          onClick={onBack}
          className="w-12 h-12 bg-blue-400 hover:bg-blue-500 rounded-full shadow-lg flex items-center justify-center"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      {/* Judul */}
      <h1
        className="text-4xl font-extrabold text-center mb-12"
        style={{
          color: "#FF6B35",
          WebkitTextStroke: "2px white",
          textShadow: "3px 3px 0px #000",
          fontFamily: "'Comic Sans MS', cursive",
        }}
      >
        MATERI EDUKASI ANTI NARKOBA
      </h1>

      {/* Kotak Materi */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
  {materiList.map((item) => (
    <div
      key={item.id}
      className="bg-white rounded-3xl shadow-lg p-6 flex flex-col justify-between text-center border-4 border-orange-400"
    >
      <h2 className="text-2xl font-extrabold mb-4 text-green-600">{item.title}</h2>
      <p className="text-gray-700 mb-6">{item.description}</p>
      <button
        onClick={() => handlePelajariSelanjutnya(item.id)}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-md transition transform hover:scale-105"
      >
        Pelajari Selanjutnya
      </button>
    </div>
  ))}
</div>



      {/* Tombol Keluar */}
<button
  onClick={onBack}
  className="mt-12 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition transform hover:scale-110"
>
  Keluar
</button>
    </div>
  );
}

export default Material;
