import { useState, useEffect } from "react";

// Definisikan PLAYER_COLORS langsung di sini
const PLAYER_COLORS = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'];

export default function PlayerSetup({ onBack, onStart }) {
  const [count, setCount] = useState(2);
  const [names, setNames] = useState(["", ""]);

  useEffect(() => {
    // Update array nama agar sesuai dengan jumlah pemain
    setNames((prevNames) =>
      Array.from({ length: count }, (_, i) => prevNames[i] || "")
    );
  }, [count]);

  const handleStart = () => {
    // Validasi: semua nama harus diisi (trimmed)
    if (names.some((name) => name.trim() === "")) {
      alert("Silakan isi semua nama pemain!");
      return;
    }

    const players = names.map((name, i) => ({
      name: name.trim(),
      position: 0,
      color: PLAYER_COLORS[i],
    }));

    onStart(players);
  };

  // Inline styles untuk menghindari dependency pada Tailwind
  const containerStyle = {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    fontFamily: "Arial, sans-serif"
  };

  const cardStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(10px)",
    borderRadius: "24px",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    padding: "2rem",
    maxWidth: "28rem",
    width: "100%"
  };

  const titleStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "1.5rem",
    textAlign: "center",
    color: "#166534"
  };

  const labelStyle = {
    display: "block",
    marginBottom: "1.5rem",
    fontWeight: "600",
    color: "#374151"
  };

  const selectStyle = {
    width: "100%",
    padding: "0.75rem",
    border: "2px solid #d1d5db",
    borderRadius: "0.75rem",
    outline: "none",
    fontSize: "1rem",
    marginTop: "0.5rem",
    backgroundColor: "white"
  };

  const inputStyle = {
    width: "100%",
    padding: "0.75rem",
    border: "2px solid #d1d5db",
    borderRadius: "0.75rem",
    outline: "none",
    fontSize: "1rem",
    backgroundColor: "white",
    boxSizing: "border-box"
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "2rem",
    gap: "1rem"
  };

  const backButtonStyle = {
    flex: 1,
    padding: "0.75rem",
    backgroundColor: "#9ca3af",
    color: "white",
    fontWeight: "bold",
    borderRadius: "0.75rem",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.2s"
  };

  const startButtonStyle = {
    flex: 1,
    padding: "0.75rem",
    backgroundColor: "#16a34a",
    color: "white",
    fontWeight: "bold",
    borderRadius: "0.75rem",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.2s"
  };

  const playerLabelStyle = {
    display: "block",
    marginBottom: "1rem",
    fontWeight: "600",
    color: "#374151"
  };

  const playerHeaderStyle = {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    marginBottom: "0.5rem"
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={titleStyle}>
          👥 Setup Pemain
        </h2>
        
        <label style={labelStyle}>
          Jumlah Pemain:
          <select
            value={count}
            onChange={(e) => setCount(parseInt(e.target.value))}
            style={selectStyle}
          >
            <option value={2}>2 Pemain</option>
            <option value={3}>3 Pemain</option>
            <option value={4}>4 Pemain</option>
          </select>
        </label>

        {Array.from({ length: count }, (_, i) => (
          <label key={i} style={playerLabelStyle}>
            <div style={playerHeaderStyle}>
              <div 
                style={{
                  width: "1rem",
                  height: "1rem",
                  borderRadius: "50%",
                  border: "2px solid white",
                  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                  backgroundColor: PLAYER_COLORS[i]
                }}
              ></div>
              Nama Pemain {i + 1}:
            </div>
            <input
              type="text"
              value={names[i] || ""}
              onChange={(e) => {
                const newNames = [...names];
                newNames[i] = e.target.value;
                setNames(newNames);
              }}
              placeholder="Masukkan nama..."
              style={inputStyle}
            />
          </label>
        ))}

        <div style={buttonContainerStyle}>
          <button
            onClick={onBack}
            style={backButtonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#6b7280")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#9ca3af")}
          >
            ← Kembali
          </button>
          <button
            onClick={handleStart}
            style={startButtonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#15803d")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#16a34a")}
          >
            Mulai Game 🎮
          </button>
        </div>
      </div>
    </div>
  );
}