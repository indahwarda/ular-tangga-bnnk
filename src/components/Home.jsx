import React from "react";
import backgroundImage from "/src/assets/backgrond.jpg"; // Pastikan path file benar

export default function Home({ onMaterial, onSetup, onInstructions, onExit }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover", // Menyesuaikan gambar agar menutupi seluruh area
        backgroundRepeat: "no-repeat", // Mencegah gambar berulang
        backgroundPosition: "center", // Memposisikan gambar di tengah
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif"
      }}
    >
      {/* Judul yang telah diperbesar dan ditebalkan */}
      <h1 style={{
        color: "#FFEB3B", 
        textAlign: "center",
        fontSize: "4rem", // Ukuran font diperbesar dari 3rem menjadi 4rem
        fontWeight: "900", // Bobot font diubah menjadi 900 (super tebal)
        marginBottom: "16px",
        textShadow: "1px 1px 3px #fff",
        WebkitTextStrokeWidth: "2px", 
        WebkitTextStrokeColor: "#000000" 
      }}>
        Game Simulasi P4GN
      </h1>

      {/* Tombol Materi */}
      <button
        onClick={onMaterial}
        style={{
          width: "240px",
          padding: "16px",
          margin: "12px 0",
          fontSize: "1.4rem",
          borderRadius: "32px",
          border: "none",
          background: "#ff9933",
          color: "#fff",
          fontWeight: "bold",
          boxShadow: "2px 4px 22px #ccc"
        }}
      >
        Materi
      </button>

      {/* Tombol Mulai Permainan */}
      <button
        onClick={onSetup}
        style={{
          width: "240px",
          padding: "16px",
          margin: "12px 0",
          fontSize: "1.4rem",
          borderRadius: "32px",
          border: "none",
          background: "#39c6fd",
          color: "#fff",
          fontWeight: "bold",
          boxShadow: "2px 4px 22px #ccc"
        }}
      >
        Mulai Permainan
      </button>

      {/* Tombol Petunjuk */}
      <button
        onClick={onInstructions}
        style={{
          width: "240px",
          padding: "16px",
          margin: "12px 0",
          fontSize: "1.4rem",
          borderRadius: "32px",
          border: "none",
          background: "#65df4c",
          color: "#fff",
          fontWeight: "bold",
          boxShadow: "2px 4px 22px #ccc"
        }}
      >
        Petunjuk
      </button>

      {/* Tombol Keluar */}
      <button
        onClick={onExit}
        style={{
          width: "240px",
          padding: "16px",
          margin: "12px 0",
          fontSize: "1.4rem",
          borderRadius: "32px",
          border: "none",
          background: "#ff3366",
          color: "#fff",
          fontWeight: "bold",
          boxShadow: "2px 4px 22px #ccc"
        }}
      >
        Keluar
      </button>
    </div>
  );
}