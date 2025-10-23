import { useEffect, useMemo, useState } from "react";
import QuestionModal from "./modals/QuestionModal";
import ResultModal from "./modals/ResultModal";
import WinnerModal from "./modals/WinnerModal";
import { QUESTIONS } from "../data/gameData";
import bgImage from "/src/assets/backgrond.jpg";

// Ular & tangga (50 kotak versi Anda)
const SNAKES_AND_LADDERS = {
  9: 29,   // Tangga
  18: 24,  // Tangga
  21: 39,  // Tangga
  30: 44,  // Tangga
  20: 2,   // Ular
  26: 16,  // Ular
  36: 14,  // Ular
  48: 28,  // Ular
};

export default function GameBoard({ playersInit, onHome, onRestartSetup }) {
  const [players, setPlayers] = useState(playersInit);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [dice, setDice] = useState(null);
  const [winner, setWinner] = useState(null);
  const [diceAnimating, setDiceAnimating] = useState(false);
  const [isMoving, setIsMoving] = useState(false);

  // Quiz - dengan tracking pertanyaan yang sudah muncul
  const [ask, setAsk] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [usedQuestions, setUsedQuestions] = useState([]);

  // Hasil jawaban
  const [result, setResult] = useState({
    open: false,
    icon: "",
    title: "",
    explanation: "",
  });

  const playerIcons = [
    { icon: "👨", color: "#FF6B6B", name: "Pemain 1" },
    { icon: "👩", color: "#4ECDC4", name: "Pemain 2" },
    { icon: "👦", color: "#45B7D1", name: "Pemain 3" },
    { icon: "👧", color: "#96CEB4", name: "Pemain 4" },
  ];

  // Generate papan 50 kotak (5 baris x 10 kolom)
  const boardCells = useMemo(() => {
    const cells = [];
    for (let row = 0; row < 5; row++) {
      let rowCells = [];
      for (let col = 0; col < 10; col++) {
        let num = row * 10 + col + 1;
        rowCells.push(num);
      }
      if (row % 2 === 1) rowCells.reverse();
      cells.unshift(...rowCells);
    }
    return cells;
  }, []);

  useEffect(() => {
    if (playersInit?.length) setPlayers(playersInit);
  }, [playersInit]);

  // Effect untuk mengunci scroll ketika modal terbuka
  useEffect(() => {
    if (ask || result.open || winner) {
      document.body.classList.add('modal-open');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('modal-open');
      document.body.style.overflow = '';
    }

    return () => {
      document.body.classList.remove('modal-open');
      document.body.style.overflow = '';
    };
  }, [ask, result.open, winner]);

  // Fungsi untuk mendapatkan pertanyaan random yang belum pernah muncul
  const getRandomQuestion = () => {
    let availableQuestions = QUESTIONS.filter(
      (_, idx) => !usedQuestions.includes(idx)
    );

    // Reset jika semua pertanyaan sudah dipakai
    if (availableQuestions.length === 0) {
      setUsedQuestions([]);
      availableQuestions = QUESTIONS;
    }

    const randomIdx = Math.floor(Math.random() * availableQuestions.length);
    const selectedQuestion = availableQuestions[randomIdx];
    const originalIdx = QUESTIONS.indexOf(selectedQuestion);
    
    setUsedQuestions([...usedQuestions, originalIdx]);
    return selectedQuestion;
  };

  // Lempar dadu
  const handleRoll = () => {
    if (winner || isMoving || ask) return;

    setDiceAnimating(true);

    let rollCount = 0;
    const rollInterval = setInterval(() => {
      const randomNum = Math.floor(Math.random() * 6) + 1;
      setDice(randomNum);
      rollCount++;

      if (rollCount >= 15) {
        clearInterval(rollInterval);
        const finalResult = Math.floor(Math.random() * 6) + 1;
        setDice(finalResult);
        setDiceAnimating(false);

        setTimeout(() => {
          movePlayerWithAnimation(finalResult);
        }, 500);
      }
    }, 100);
  };

  // Animasi pergerakan pemain
  const movePlayerWithAnimation = (steps) => {
    setIsMoving(true);
    const p = [...players];
    const me = { ...p[currentIdx] };
    const targetPosition = Math.min(50, me.position + steps);

    let currentPos = me.position;
    const moveInterval = setInterval(() => {
      if (currentPos < targetPosition) {
        currentPos++;
        me.position = currentPos;
        p[currentIdx] = me;
        setPlayers([...p]);
      } else {
        clearInterval(moveInterval);

        if (SNAKES_AND_LADDERS[me.position]) {
          setTimeout(() => {
            me.position = SNAKES_AND_LADDERS[me.position];
            p[currentIdx] = me;
            setPlayers([...p]);

            setTimeout(() => {
              setIsMoving(false);
              checkWinnerOrShowQuiz(me);
            }, 800);
          }, 500);
        } else {
          setIsMoving(false);
          checkWinnerOrShowQuiz(me);
        }
      }
    }, 300);
  };

  // Cek apakah sudah menang atau tampilkan kuis
  const checkWinnerOrShowQuiz = (player) => {
    if (player.position >= 50) {
      setWinner(player.name);
    } else {
      const q = getRandomQuestion();
      setCurrentQuestion(q);
      setAsk(true);
    }
  };

  // Saat pemain jawab kuis - DENGAN SISTEM REWARD/PUNISHMENT
  const handleAnswer = (selected) => {
    setAsk(false);
    const q = currentQuestion;
    const correct = selected === q.correct;

    const p = [...players];
    const me = { ...p[currentIdx] };

    if (correct) {
      // BENAR: Maju 1 langkah
      me.position = Math.min(50, me.position + 1);
      p[currentIdx] = me;
      setPlayers(p);

      setResult({
        open: true,
        icon: "✅",
        title: "Jawaban Benar! 🎉",
        explanation: `${q.explanation}\n\n🎁 Bonus: Maju 1 langkah!`,
      });

      // Cek apakah menang setelah bonus
      if (me.position >= 50) {
        setTimeout(() => {
          setResult({ open: false, icon: "", title: "", explanation: "" });
          setWinner(me.name);
        }, 2000);
        return;
      }
    } else {
      // SALAH: Mundur 2 langkah
      me.position = Math.max(0, me.position - 2);
      p[currentIdx] = me;
      setPlayers(p);

      setResult({
        open: true,
        icon: "❌",
        title: "Jawaban Salah! 😔",
        explanation: `Jawaban yang benar adalah: ${q.options[q.correct]}.\n\n${q.explanation}\n\n⚠️ Hukuman: Mundur 2 langkah!`,
      });
    }

    setTimeout(() => {
      setCurrentIdx((currentIdx + 1) % players.length);
    }, 0);
  };

  const closeResult = () => setResult((prev) => ({ ...prev, open: false }));

  // Fungsi untuk menampilkan titik dadu
  const getDots = (num) => {
    const positions = {
      1: [[50, 50]],
      2: [[25, 25], [75, 75]],
      3: [[25, 25], [50, 50], [75, 75]],
      4: [[25, 25], [75, 25], [25, 75], [75, 75]],
      5: [[25, 25], [75, 25], [50, 50], [25, 75], [75, 75]],
      6: [[25, 25], [75, 25], [25, 50], [75, 50], [25, 75], [75, 75]],
    };
    return positions[num] || [];
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        margin: 0,
        padding: 0,
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
        overflow: "hidden"
      }}
    >
      {/* Header dengan Tombol Kembali */}
      <div style={{ position: "absolute", top: "20px", left: "20px", zIndex: 50 }}>
        <button
          onClick={onHome}
          style={{
            backgroundColor: "#ff9933",
            color: "#fff",
            fontWeight: "bold",
            padding: "12px 24px",
            borderRadius: "30px",
            border: "none",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.3)",
            cursor: "pointer",
            fontSize: "1rem",
            transition: "all 0.2s ease-in-out"
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.backgroundColor = "#ff7700";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.backgroundColor = "#ff9933";
          }}
        >
          ⬅️ Kembali
        </button>
      </div>

      {/* Judul */}
      <h1
        style={{
          color: "#FFEB3B",
          textAlign: "center",
          fontSize: "3rem",
          fontWeight: "900",
          marginBottom: "20px",
          lineHeight: "1.3",
          textShadow: "2px 2px 6px #000",
          WebkitTextStrokeWidth: "1px",
          WebkitTextStrokeColor: "#000"
        }}
      >
        ULAR TANGGA EDUKASI
      </h1>

      {/* Container Utama: Info Pemain + Papan + Dadu */}
      <div style={{ display: "flex", gap: "20px", alignItems: "flex-start", maxWidth: "1400px" }}>
        
        {/* Info Pemain - Kiri */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", minWidth: "180px" }}>
          {players.map((pl, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: currentIdx === idx ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.85)",
                padding: "12px",
                borderRadius: "16px",
                border: currentIdx === idx ? "3px solid #FFC107" : "2px solid #ccc",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                transition: "all 0.3s"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ fontSize: "2rem" }}>{playerIcons[idx]?.icon}</div>
                <div>
                  <div style={{ fontWeight: "bold", color: "#333", fontSize: "0.9rem" }}>{pl.name}</div>
                  <div style={{ fontSize: "0.8rem", color: "#666" }}>
                    Posisi: <strong>{pl.position}</strong>
                  </div>
                  {currentIdx === idx && !isMoving && (
                    <div style={{ fontSize: "0.75rem", color: "#FFC107", fontWeight: "bold" }}>🎯 Giliran!</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Papan Ular Tangga - Tengah */}
        <div style={{
          backgroundColor: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(10px)",
          borderRadius: "24px",
          padding: "16px",
          border: "4px solid #4CAF50",
          boxShadow: "0 8px 32px rgba(0,0,0,0.3)"
        }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(10, 1fr)",
            gap: "4px",
            padding: "12px",
            borderRadius: "16px",
            background: "linear-gradient(135deg, #a8e6cf 0%, #dcedc1 50%, #ffd3b6 100%)"
          }}>
            {boardCells.map((num) => {
              const isSnake = SNAKES_AND_LADDERS[num] && num > SNAKES_AND_LADDERS[num];
              const isLadder = SNAKES_AND_LADDERS[num] && num < SNAKES_AND_LADDERS[num];
              
              return (
                <div
                  key={num}
                  style={{
                    position: "relative",
                    width: "50px",
                    height: "50px",
                    background: num % 2 === 0
                      ? "linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%)"
                      : "linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)",
                    border: "2px solid #8B4513",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.2)"
                  }}
                >
                  {/* Nomor */}
                  <div style={{
                    position: "absolute",
                    top: "2px",
                    left: "2px",
                    width: "16px",
                    height: "16px",
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    borderRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.65rem",
                    fontWeight: "bold",
                    color: "#333",
                    zIndex: 10
                  }}>
                    {num}
                  </div>

                  {/* Trophy */}
                  {num === 50 && <div style={{ fontSize: "1.8rem", zIndex: 10 }}>🏆</div>}

                  {/* Ular dan Tangga */}
                  {isSnake && (
                    <div style={{ position: "absolute", fontSize: "2.5rem", zIndex: 20 }}>🐍</div>
                  )}
                  {isLadder && (
                    <div style={{ position: "absolute", fontSize: "2.5rem", zIndex: 20 }}>🪜</div>
                  )}

                  {/* Pion */}
                  <div style={{ position: "absolute", bottom: "2px", right: "2px", display: "flex", gap: "2px", zIndex: 30 }}>
                    {players.map((pl, idx) =>
                      pl.position === num ? (
                        <div
                          key={idx}
                          style={{
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                            border: "2px solid white",
                            backgroundColor: pl.color,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "0.7rem",
                            boxShadow: "0 2px 4px rgba(0,0,0,0.3)"
                          }}
                        >
                          {playerIcons[idx]?.icon}
                        </div>
                      ) : null
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dadu & Tombol - Kanan */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", minWidth: "180px" }}>
          {/* Dadu */}
          <div style={{
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(10px)",
            borderRadius: "20px",
            padding: "20px",
            boxShadow: "0 8px 16px rgba(0,0,0,0.3)"
          }}>
            <div
              style={{
                position: "relative",
                width: "120px",
                height: "120px",
                backgroundColor: "#fff",
                borderRadius: "20px",
                border: "4px solid #333",
                boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
                animation: diceAnimating ? "spin 0.5s linear infinite" : "none"
              }}
            >
              {dice && getDots(dice).map((pos, idx) => (
                <div
                  key={idx}
                  style={{
                    position: "absolute",
                    width: "20px",
                    height: "20px",
                    backgroundColor: "#DC2626",
                    borderRadius: "50%",
                    left: `${pos[0]}%`,
                    top: `${pos[1]}%`,
                    transform: "translate(-50%, -50%)",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.3)"
                  }}
                />
              ))}
            </div>
            {dice && !diceAnimating && (
              <div style={{
                marginTop: "12px",
                textAlign: "center",
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: "#fff",
                backgroundColor: "#3B82F6",
                padding: "8px 16px",
                borderRadius: "20px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
              }}>
                Dadu: {dice}
              </div>
            )}
          </div>

          {/* Tombol Lempar Dadu */}
          <button
            onClick={handleRoll}
            disabled={isMoving || ask || diceAnimating || winner}
            style={{
              width: "100%",
              padding: "16px 20px",
              fontSize: "1.1rem",
              fontWeight: "bold",
              color: "#fff",
              background: "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)",
              border: "none",
              borderRadius: "30px",
              boxShadow: "0 6px 16px rgba(0,0,0,0.3)",
              cursor: isMoving || ask || diceAnimating || winner ? "not-allowed" : "pointer",
              opacity: isMoving || ask || diceAnimating || winner ? 0.5 : 1,
              transition: "all 0.3s"
            }}
            onMouseOver={(e) => {
              if (!isMoving && !ask && !diceAnimating && !winner) {
                e.currentTarget.style.transform = "scale(1.05)";
              }
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            {diceAnimating ? "🎲 Mengocok..." : isMoving ? "🏃 Bergerak..." : ask ? "❓ Jawab..." : "🎲 Lempar Dadu"}
          </button>

          {winner && (
            <div style={{
              textAlign: "center",
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "#10B981",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              padding: "12px 20px",
              borderRadius: "20px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
            }}>
              🎉 Selesai! 🎉
            </div>
          )}
        </div>
      </div>

      {/* MODALS */}
      {ask && (
        <QuestionModal
          open={ask}
          question={currentQuestion}
          onAnswer={handleAnswer}
        />
      )}

      {result.open && (
        <ResultModal
          open={result.open}
          correct={result.icon === "✅"}
          explanation={result.explanation}
          image="/src/assets/stop-drugs.png"
          onClose={closeResult}
        />
      )}

      {winner && (
        <WinnerModal
          open={!!winner}
          name={winner}
          onHome={onHome}
          onRestart={onRestartSetup}
        />
      )}

      {/* CSS for animation */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}