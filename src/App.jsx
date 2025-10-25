import React, { useState } from "react";
import backgroundImage from "./assets/backgrond.jpg";
import Material from "./pages/Materi.jsx"; // Import komponen Materi
import PlayerSetup from "./components/PlayerSetup.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Petunjuk from "./pages/Petunjuk.jsx";



// Data warna pemain - pindahkan ke sini atau import dari gameData
const PLAYER_COLORS = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'];

// Komponen Home
function Home({ onMaterial, onSetup, onInstructions, onExit }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
      }}
    >
      <h1
        style={{
          color: "#FFEB3B",
          textAlign: "center",
          fontSize: "4rem",
          fontWeight: "900",
          marginBottom: "16px",
          textShadow: "1px 1px 3px #fff",
          WebkitTextStrokeWidth: "2px",
          WebkitTextStrokeColor: "#000000",
        }}
      >
        Game Simulasi P4GN
      </h1>

      <button onClick={onMaterial} style={btnStyle("#ff9933")}>Materi</button>
      <button onClick={onSetup} style={btnStyle("#39c6fd")}>Mulai Permainan</button>
      <button onClick={onInstructions} style={btnStyle("#65df4c")}>Petunjuk</button>
      <button onClick={onExit} style={btnStyle("#ff3366")}>Keluar</button>
    </div>
  );
}

// Style tombol
const btnStyle = (bg) => ({
  width: "240px",
  padding: "16px",
  margin: "12px 0",
  fontSize: "1.4rem",
  borderRadius: "32px",
  border: "none",
  background: bg,
  color: "#fff",
  fontWeight: "bold",
  boxShadow: "2px 4px 22px #ccc",
  cursor: "pointer",
  transition: "all 0.3s ease",
});

// Komponen Instructions
function Instructions({ onBack }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500 to-teal-600 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Petunjuk Permainan</h2>
        <p className="mb-4">
          Ikuti instruksi berikut untuk bermain dengan benar.
        </p>
        <button
          onClick={onBack}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg"
        >
          Kembali ke Menu Utama
        </button>
      </div>
    </div>
  );
}

// App Utama
export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [players, setPlayers] = useState([]); // ✅ tambahkan state untuk simpan pemain

  const handleExit = () => {
    if (confirm("Apakah Anda yakin ingin keluar dari aplikasi?")) {
      window.close();
    }
  };

  return (
    <div>
      {currentPage === "home" && (
        <Home
          onMaterial={() => setCurrentPage("material")}
          onSetup={() => setCurrentPage("setup")}
          onInstructions={() => setCurrentPage("instructions")}
          onExit={handleExit}
        />
      )}

      {currentPage === "material" && (
        <Material onBack={() => setCurrentPage("home")} />
      )}

      {currentPage === "setup" && (
        <PlayerSetup 
          onBack={() => setCurrentPage("home")} 
          onStart={(playersList) => {
            setPlayers(playersList);        // ✅ simpan pemain
            setCurrentPage("board");        // ✅ langsung ke papan game
          }} 
        />
      )}

      {currentPage === "board" && (
        <GameBoard
          playersInit={players}              // ✅ kirim data pemain ke papan
          onHome={() => setCurrentPage("home")}
          onRestartSetup={() => setCurrentPage("setup")}
        />
      )}

      {currentPage === "instructions" && (
        <Petunjuk onBack={() => setCurrentPage("home")} />
      )}
    </div>
  );
}
