import React from "react";
import backgroundImage from "/src/assets/backgrond.jpg"; // Pastikan path file benar

export default function Home({ onMaterial, onSetup, onInstructions, onExit }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        margin: 0,
        padding: 0,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // biar tetap saat scroll
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
        overflow: "hidden"
      }}
    >
      {/* Judul */}
      <h1
        style={{
          color: "#FFEB3B",
          textAlign: "center",
          fontSize: "3rem",
          fontWeight: "900",
          marginBottom: "30px",
          lineHeight: "1.3",
          textShadow: "2px 2px 6px #000",
          WebkitTextStrokeWidth: "1px",
          WebkitTextStrokeColor: "#000"
        }}
      >
        Edukasi Game Ular Tangga dan Kuis <br />
        BNNK Sleman Anti Narkoba
      </h1>

      {/* Daftar Tombol */}
      {[
        { text: "Materi", color: "#ff9933", onClick: onMaterial },
        { text: "Mulai Permainan", color: "#39c6fd", onClick: onSetup },
        { text: "Petunjuk", color: "#65df4c", onClick: onInstructions },
        { text: "Keluar", color: "#ff3366", onClick: onExit }
      ].map((btn, i) => (
        <button
          key={i}
          onClick={btn.onClick}
          style={{
            width: "240px",
            padding: "14px",
            margin: "12px 0",
            fontSize: "1.3rem",
            borderRadius: "32px",
            border: "none",
            background: btn.color,
            color: "#fff",
            fontWeight: "bold",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.3)",
            cursor: "pointer",
            transition: "all 0.2s ease-in-out"
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0px 6px 16px rgba(0,0,0,0.5)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0px 4px 12px rgba(0,0,0,0.3)";
          }}
        >
          {btn.text}
        </button>
      ))}

      {/* CSS tambahan untuk responsif */}
      <style>
        {`
          @media (max-width: 768px) {
            h1 {
              font-size: 2rem !important;
            }
            button {
              width: 180px !important;
              font-size: 1rem !important;
              padding: 12px !important;
            }
          }
        `}
      </style>
    </div>
  );
}
