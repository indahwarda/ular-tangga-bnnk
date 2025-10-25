import { Target, Dice6, HelpCircle, Trophy, ArrowRight, CheckCircle, XCircle, MoveRight } from "lucide-react";

export default function Petunjuk({ onBack }) {
  return (
    <div 
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "40px 20px",
        fontFamily: "sans-serif"
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h1 style={{
            fontSize: "3rem",
            fontWeight: "900",
            color: "#fff",
            textShadow: "3px 3px 6px rgba(0,0,0,0.3)",
            marginBottom: "10px"
          }}>
            📋 PETUNJUK PERMAINAN
          </h1>
          <p style={{
            fontSize: "1.2rem",
            color: "#E0E7FF",
            maxWidth: "700px",
            margin: "0 auto"
          }}>
            Panduan lengkap bermain Ular Tangga Edukasi Anti Narkoba
          </p>
        </div>

        {/* A. TUJUAN PERMAINAN */}
        <div style={{
          backgroundColor: "#fff",
          borderRadius: "20px",
          padding: "30px",
          marginBottom: "25px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          border: "4px solid #FFD700"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "20px" }}>
            <div style={{
              backgroundColor: "#FFD700",
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
            }}>
              <Target style={{ width: "32px", height: "32px", color: "#fff" }} />
            </div>
            <h2 style={{
              fontSize: "1.8rem",
              fontWeight: "bold",
              color: "#1F2937",
              margin: 0
            }}>
              A. TUJUAN PERMAINAN
            </h2>
          </div>
          <div style={{
            backgroundColor: "#FEF3C7",
            padding: "20px",
            borderRadius: "15px",
            border: "3px solid #F59E0B"
          }}>
            <ul style={{
              fontSize: "1.1rem",
              lineHeight: "1.8",
              color: "#92400E",
              margin: 0,
              paddingLeft: "25px"
            }}>
              <li><strong>Mencapai kotak ke-50</strong> sebagai pemenang pertama</li>
              <li>Belajar tentang <strong>bahaya narkoba</strong> melalui kuis edukatif</li>
              <li>Meningkatkan <strong>pengetahuan</strong> tentang pencegahan narkoba</li>
              <li>Bermain sambil belajar dengan cara yang <strong>menyenangkan</strong></li>
            </ul>
          </div>
        </div>

        {/* B. CARA MENGGERAKKAN PION */}
        <div style={{
          backgroundColor: "#fff",
          borderRadius: "20px",
          padding: "30px",
          marginBottom: "25px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          border: "4px solid #3B82F6"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "20px" }}>
            <div style={{
              backgroundColor: "#3B82F6",
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
            }}>
              <Dice6 style={{ width: "32px", height: "32px", color: "#fff" }} />
            </div>
            <h2 style={{
              fontSize: "1.8rem",
              fontWeight: "bold",
              color: "#1F2937",
              margin: 0
            }}>
              B. CARA MENGGERAKKAN PION
            </h2>
          </div>
          <div style={{
            backgroundColor: "#DBEAFE",
            padding: "20px",
            borderRadius: "15px",
            border: "3px solid #3B82F6"
          }}>
            <ol style={{
              fontSize: "1.1rem",
              lineHeight: "1.8",
              color: "#1E40AF",
              margin: 0,
              paddingLeft: "25px"
            }}>
              <li>Klik tombol <strong>"🎲 Lempar Dadu"</strong> saat giliran Anda</li>
              <li>Dadu akan mengocok dan menampilkan <strong>angka 1-6</strong></li>
              <li>Pion Anda akan <strong>bergerak otomatis</strong> sesuai angka dadu</li>
              <li>Jika mendarat di <strong>🪜 Tangga</strong>, Anda naik ke kotak yang lebih tinggi</li>
              <li>Jika mendarat di <strong>🐍 Ular</strong>, Anda turun ke kotak yang lebih rendah</li>
              <li>Setelah bergerak, Anda harus <strong>menjawab kuis</strong></li>
            </ol>
          </div>
        </div>

        {/* C. SISTEM KUIS DAN SCORING */}
        <div style={{
          backgroundColor: "#fff",
          borderRadius: "20px",
          padding: "30px",
          marginBottom: "25px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          border: "4px solid #10B981"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "20px" }}>
            <div style={{
              backgroundColor: "#10B981",
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
            }}>
              <HelpCircle style={{ width: "32px", height: "32px", color: "#fff" }} />
            </div>
            <h2 style={{
              fontSize: "1.8rem",
              fontWeight: "bold",
              color: "#1F2937",
              margin: 0
            }}>
              C. SISTEM KUIS DAN SCORING
            </h2>
          </div>
          <div style={{
            backgroundColor: "#D1FAE5",
            padding: "20px",
            borderRadius: "15px",
            border: "3px solid #10B981",
            marginBottom: "20px"
          }}>
            <h3 style={{ color: "#065F46", fontSize: "1.2rem", marginBottom: "15px", fontWeight: "bold" }}>
              📝 Tentang Kuis:
            </h3>
            <ul style={{
              fontSize: "1.1rem",
              lineHeight: "1.8",
              color: "#065F46",
              margin: 0,
              paddingLeft: "25px"
            }}>
              <li>Setiap pemain akan mendapat <strong>pertanyaan random</strong> setelah bergerak</li>
              <li>Pertanyaan seputar <strong>bahaya narkoba, pencegahan, dan P4GN</strong></li>
              <li>Ada <strong>4 pilihan jawaban (A, B, C, D)</strong></li>
              <li>Pilih jawaban dengan <strong>klik pada pilihan</strong></li>
              <li>Pertanyaan <strong>tidak akan berulang</strong> sampai semua soal selesai</li>
            </ul>
          </div>

          {/* Reward & Punishment */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
            {/* Jawaban Benar */}
            <div style={{
              backgroundColor: "#C6F6D5",
              padding: "20px",
              borderRadius: "15px",
              border: "3px solid #48BB78"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                <CheckCircle style={{ width: "28px", height: "28px", color: "#22543D" }} />
                <h4 style={{ margin: 0, color: "#22543D", fontSize: "1.1rem" }}>
                  ✅ JAWABAN BENAR
                </h4>
              </div>
              <p style={{ color: "#22543D", fontSize: "1rem", margin: 0, lineHeight: "1.6" }}>
                <strong>🎁 Bonus:</strong> Maju <strong>1 langkah</strong> tambahan!
              </p>
            </div>

            {/* Jawaban Salah */}
            <div style={{
              backgroundColor: "#FED7D7",
              padding: "20px",
              borderRadius: "15px",
              border: "3px solid #FC8181"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                <XCircle style={{ width: "28px", height: "28px", color: "#742A2A" }} />
                <h4 style={{ margin: 0, color: "#742A2A", fontSize: "1.1rem" }}>
                  ❌ JAWABAN SALAH
                </h4>
              </div>
              <p style={{ color: "#742A2A", fontSize: "1rem", margin: 0, lineHeight: "1.6" }}>
                <strong>⚠️ Hukuman:</strong> Mundur <strong>2 langkah</strong>!
              </p>
            </div>
          </div>
        </div>

        {/* D. ATURAN MENANG/KALAH */}
        <div style={{
          backgroundColor: "#fff",
          borderRadius: "20px",
          padding: "30px",
          marginBottom: "30px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          border: "4px solid #F59E0B"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "20px" }}>
            <div style={{
              backgroundColor: "#F59E0B",
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
            }}>
              <Trophy style={{ width: "32px", height: "32px", color: "#fff" }} />
            </div>
            <h2 style={{
              fontSize: "1.8rem",
              fontWeight: "bold",
              color: "#1F2937",
              margin: 0
            }}>
              D. ATURAN MENANG/KALAH
            </h2>
          </div>
          <div style={{
            backgroundColor: "#FEF3C7",
            padding: "20px",
            borderRadius: "15px",
            border: "3px solid #F59E0B"
          }}>
            <div style={{ marginBottom: "20px" }}>
              <h3 style={{ color: "#92400E", fontSize: "1.3rem", marginBottom: "10px", display: "flex", alignItems: "center", gap: "10px" }}>
                🏆 CARA MENANG:
              </h3>
              <ul style={{
                fontSize: "1.1rem",
                lineHeight: "1.8",
                color: "#92400E",
                margin: 0,
                paddingLeft: "25px"
              }}>
                <li>Pemain <strong>PERTAMA</strong> yang mencapai atau melewati <strong>kotak ke-50</strong></li>
                <li>Bonus dari jawaban benar bisa membuat Anda <strong>menang lebih cepat</strong></li>
                <li>Pemenang akan mendapat <strong>modal ucapan selamat</strong> 🎉</li>
              </ul>
            </div>

            <div>
              <h3 style={{ color: "#92400E", fontSize: "1.3rem", marginBottom: "10px", display: "flex", alignItems: "center", gap: "10px" }}>
                ⏱️ TIPS BERMAIN:
              </h3>
              <ul style={{
                fontSize: "1.1rem",
                lineHeight: "1.8",
                color: "#92400E",
                margin: 0,
                paddingLeft: "25px"
              }}>
                <li>Baca setiap pertanyaan dengan <strong>teliti</strong></li>
                <li>Manfaatkan bonus maju 1 langkah untuk <strong>keuntungan</strong></li>
                <li>Hindari jawaban salah agar tidak <strong>mundur 2 langkah</strong></li>
                <li><strong>Bergiliran</strong> dengan sportif dan sabar menunggu giliran</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quote Motivasi */}
        <div style={{
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)",
          borderRadius: "20px",
          padding: "25px",
          marginBottom: "30px",
          border: "3px solid rgba(255, 255, 255, 0.3)",
          textAlign: "center"
        }}>
          <p style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#fff",
            margin: "0 0 10px 0",
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
          }}>
            "Masa Depan Cerah Tanpa Narkoba"
          </p>
          <p style={{
            fontSize: "1.1rem",
            color: "#E0E7FF",
            margin: 0
          }}>
            Mari bersama-sama katakan TIDAK pada narkoba! 🚫💪
          </p>
        </div>

        {/* Tombol Kembali */}
        <div style={{ textAlign: "center" }}>
          <button
            onClick={onBack}
            style={{
              backgroundColor: "#FFD700",
              color: "#1F2937",
              fontSize: "1.2rem",
              fontWeight: "bold",
              padding: "15px 40px",
              borderRadius: "50px",
              border: "none",
              boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
              cursor: "pointer",
              transition: "all 0.3s ease",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.4)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)";
            }}
          >
            ⬅️ Kembali ke Menu Utama
          </button>
        </div>
      </div>
    </div>
  );
}