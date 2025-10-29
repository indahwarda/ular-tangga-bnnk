import React, { useState } from "react";
import { BookOpen, AlertTriangle, ShieldCheck, ArrowLeft, XCircle, Heart, Brain, Users, CheckCircle, Star } from "lucide-react";

function Material({ onBack }) {
  const [currentView, setCurrentView] = useState("list");
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  const materiList = [
    {
      id: 1,
      title: "Pengenalan Narkoba",
      description: "Pelajari apa itu narkoba, jenis-jenisnya, dan bahayanya bagi kesehatan dan kehidupan.",
      icon: "📚",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      shadowColor: "rgba(102, 126, 234, 0.4)"
    },
    {
      id: 2,
      title: "Dampak Narkoba",
      description: "Memahami dampak fisik, psikologis, dan sosial dari penggunaan narkoba.",
      icon: "⚠️",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      shadowColor: "rgba(245, 87, 108, 0.4)"
    },
    {
      id: 3,
      title: "Cara Pencegahan",
      description: "Langkah-langkah untuk mencegah dan melindungi diri dari bahaya narkoba.",
      icon: "🛡️",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      shadowColor: "rgba(79, 172, 254, 0.4)"
    },
  ];

  const materiDetail = {
    1: {
      title: "Pengenalan Narkoba",
      icon: "📚",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      sections: [
        {
          subtitle: "Apa itu Narkoba?",
          icon: "🔍",
          content: "Narkoba adalah singkatan dari Narkotika, Psikotropika, dan Bahan Adiktif berbahaya lainnya. Zat-zat ini dapat mengubah fungsi otak dan tubuh, menyebabkan ketergantungan yang sangat berbahaya bagi kesehatan fisik dan mental."
        },
        {
          subtitle: "Jenis-Jenis Narkoba",
          icon: "📋",
          content: "Terdapat berbagai jenis narkoba seperti ganja, sabu-sabu, ekstasi, heroin, kokain, dan obat-obatan terlarang lainnya. Setiap jenis memiliki efek berbahaya yang dapat merusak tubuh dan mental secara permanen."
        },
        {
          subtitle: "Kenapa Sangat Berbahaya?",
          icon: "💀",
          content: "Narkoba merusak sistem saraf, organ vital seperti jantung, paru-paru, hati, dan ginjal. Dapat menyebabkan kematian mendadak, menghancurkan masa depan, pendidikan, karir, dan hubungan sosial dengan keluarga dan teman."
        }
      ]
    },
    2: {
      title: "Dampak Narkoba",
      icon: "⚠️",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      sections: [
        {
          subtitle: "Dampak Fisik",
          icon: "💔",
          content: "Kerusakan organ tubuh permanen, penurunan sistem kekebalan drastis, gangguan pernapasan kronis, kerusakan hati dan ginjal, serta risiko tinggi tertular penyakit menular seperti HIV/AIDS dan Hepatitis B/C melalui jarum suntik."
        },
        {
          subtitle: "Dampak Psikologis",
          icon: "🧠",
          content: "Gangguan mental serius, depresi berat, kecemasan berlebihan, halusinasi menakutkan, paranoia, perubahan kepribadian drastis, kehilangan kemampuan berpikir jernih, dan gangguan emosi yang tidak terkontrol."
        },
        {
          subtitle: "Dampak Sosial",
          icon: "👥",
          content: "Putusnya hubungan dengan keluarga dan teman, kehilangan pekerjaan dan pendidikan, masalah hukum serius, kemiskinan, pengucilan dari masyarakat, kehilangan kepercayaan orang lain, dan masa depan yang hancur total."
        }
      ]
    },
    3: {
      title: "Cara Pencegahan",
      icon: "🛡️",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      sections: [
        {
          subtitle: "Kuatkan Mental & Spiritual",
          icon: "💪",
          content: "Tingkatkan kepercayaan diri, perkuat iman dan nilai spiritual, fokus pada prestasi akademik dan non-akademik, kembangkan hobi positif seperti olahraga, seni, atau musik. Jangan mudah terpengaruh ajakan negatif dari teman."
        },
        {
          subtitle: "Pilih Lingkungan Positif",
          icon: "🤝",
          content: "Bergaul dengan teman-teman yang positif dan mendukung, hindari lingkungan yang rawan narkoba seperti tempat hiburan malam yang mencurigakan, berani menolak ajakan menggunakan narkoba dengan tegas dan tanpa ragu."
        },
        {
          subtitle: "Peran Keluarga & Sekolah",
          icon: "🏠",
          content: "Jaga komunikasi terbuka dengan orang tua dan keluarga, ceritakan masalah yang dihadapi, ikuti program edukasi anti narkoba di sekolah, bergabung dengan komunitas positif, dan jangan ragu meminta bantuan profesional jika menghadapi tekanan atau masalah."
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

  // DETAIL VIEW
  if (currentView === "detail" && selectedMaterial) {
    const detail = materiDetail[selectedMaterial];
    return (
      <div 
        style={{
          minHeight: "100vh",
          background: detail.gradient,
          padding: "40px 20px",
          position: "relative",
          overflow: "hidden"
        }}
      >
        {/* Decorative Elements */}
        <div style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "300px",
          height: "300px",
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: "50%",
          filter: "blur(80px)",
          animation: "float 6s ease-in-out infinite"
        }}></div>
        <div style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: "400px",
          height: "400px",
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: "50%",
          filter: "blur(80px)",
          animation: "float 8s ease-in-out infinite"
        }}></div>

        <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 10 }}>
          {/* Back Button */}
          <button
            onClick={handleBackToList}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.25)",
              backdropFilter: "blur(10px)",
              border: "2px solid rgba(255, 255, 255, 0.3)",
              color: "#fff",
              padding: "12px 24px",
              borderRadius: "50px",
              fontSize: "1rem",
              fontWeight: "bold",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "30px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
              transition: "all 0.3s ease"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.35)";
              e.currentTarget.style.transform = "translateX(-5px)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.25)";
              e.currentTarget.style.transform = "translateX(0)";
            }}
          >
            <ArrowLeft style={{ width: "20px", height: "20px" }} />
            Kembali
          </button>

          {/* Header */}
          <div style={{
            textAlign: "center",
            marginBottom: "40px",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(10px)",
            padding: "30px",
            borderRadius: "25px",
            border: "2px solid rgba(255, 255, 255, 0.3)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
          }}>
            <div style={{ fontSize: "4rem", marginBottom: "15px" }}>{detail.icon}</div>
            <h1 style={{
              fontSize: "2.5rem",
              fontWeight: "900",
              color: "#fff",
              margin: 0,
              textShadow: "2px 2px 8px rgba(0,0,0,0.3)"
            }}>
              {detail.title}
            </h1>
          </div>

          {/* Content Sections */}
          {detail.sections.map((section, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#fff",
                borderRadius: "25px",
                padding: "30px",
                marginBottom: "20px",
                boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
                transition: "all 0.3s ease",
                border: "3px solid rgba(255, 255, 255, 0.8)"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 15px 50px rgba(0,0,0,0.25)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 40px rgba(0,0,0,0.15)";
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}>
                <div style={{
                  fontSize: "3rem",
                  flexShrink: 0,
                  backgroundColor: "#f0f0f0",
                  width: "80px",
                  height: "80px",
                  borderRadius: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
                }}>
                  {section.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "#1a1a1a",
                    marginBottom: "12px"
                  }}>
                    {section.subtitle}
                  </h3>
                  <p style={{
                    fontSize: "1.05rem",
                    lineHeight: "1.8",
                    color: "#444",
                    margin: 0
                  }}>
                    {section.content}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Footer Message */}
          <div style={{
            textAlign: "center",
            marginTop: "40px",
            backgroundColor: "rgba(255, 255, 255, 0.25)",
            backdropFilter: "blur(10px)",
            padding: "25px",
            borderRadius: "20px",
            border: "2px solid rgba(255, 255, 255, 0.3)"
          }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "10px" }}>🚫</div>
            <p style={{
              fontSize: "1.3rem",
              fontWeight: "bold",
              color: "#fff",
              margin: 0,
              textShadow: "1px 1px 4px rgba(0,0,0,0.3)"
            }}>
              Katakan TIDAK pada Narkoba!
            </p>
          </div>
        </div>

        {/* Animations */}
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
        `}</style>
      </div>
    );
  }

  // LIST VIEW
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "40px 20px",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Animated Background */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: "hidden",
        zIndex: 0
      }}>
        <div style={{
          position: "absolute",
          top: "20%",
          left: "10%",
          width: "300px",
          height: "300px",
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: "50%",
          filter: "blur(60px)",
          animation: "float 8s ease-in-out infinite"
        }}></div>
        <div style={{
          position: "absolute",
          top: "60%",
          right: "15%",
          width: "250px",
          height: "250px",
          background: "rgba(255, 255, 255, 0.08)",
          borderRadius: "50%",
          filter: "blur(60px)",
          animation: "float 10s ease-in-out infinite"
        }}></div>
        <div style={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          width: "200px",
          height: "200px",
          background: "rgba(255, 255, 255, 0.05)",
          borderRadius: "50%",
          filter: "blur(60px)",
          animation: "float 12s ease-in-out infinite"
        }}></div>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 10 }}>
        {/* Back Button */}
        <button
          onClick={onBack}
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.25)",
            backdropFilter: "blur(10px)",
            border: "2px solid rgba(255, 255, 255, 0.3)",
            color: "#fff",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            fontSize: "1.5rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "30px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
            transition: "all 0.3s ease"
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.35)";
            e.currentTarget.style.transform = "scale(1.1) rotate(-10deg)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.25)";
            e.currentTarget.style.transform = "scale(1) rotate(0deg)";
          }}
        >
          <ArrowLeft style={{ width: "24px", height: "24px" }} />
        </button>

        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <div style={{ fontSize: "3.5rem", marginBottom: "15px" }}>📚</div>
          <h1 style={{
            fontSize: "3rem",
            fontWeight: "900",
            color: "#fff",
            marginBottom: "10px",
            textShadow: "3px 3px 10px rgba(0,0,0,0.3)"
          }}>
            MATERI EDUKASI
          </h1>
          <h2 style={{
            fontSize: "2rem",
            fontWeight: "700",
            color: "#FFD700",
            margin: 0,
            textShadow: "2px 2px 8px rgba(0,0,0,0.3)"
          }}>
            ANTI NARKOBA
          </h2>
        </div>

        {/* Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
          marginBottom: "40px"
        }}>
          {materiList.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundColor: "#fff",
                borderRadius: "25px",
                overflow: "hidden",
                boxShadow: `0 10px 40px ${item.shadowColor}`,
                transition: "all 0.4s ease",
                cursor: "pointer"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-10px) scale(1.02)";
                e.currentTarget.style.boxShadow = `0 20px 60px ${item.shadowColor}`;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = `0 10px 40px ${item.shadowColor}`;
              }}
            >
              {/* Card Header */}
              <div style={{
                background: item.gradient,
                padding: "40px 20px",
                textAlign: "center"
              }}>
                <div style={{ fontSize: "4rem", marginBottom: "10px" }}>{item.icon}</div>
                <h3 style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "#fff",
                  margin: 0,
                  textShadow: "1px 1px 4px rgba(0,0,0,0.2)"
                }}>
                  {item.title}
                </h3>
              </div>

              {/* Card Body */}
              <div style={{ padding: "25px" }}>
                <p style={{
                  fontSize: "1rem",
                  lineHeight: "1.6",
                  color: "#555",
                  marginBottom: "20px",
                  minHeight: "60px"
                }}>
                  {item.description}
                </p>
                <button
                  onClick={() => handlePelajariSelanjutnya(item.id)}
                  style={{
                    width: "100%",
                    background: item.gradient,
                    color: "#fff",
                    border: "none",
                    padding: "15px 20px",
                    borderRadius: "15px",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    cursor: "pointer",
                    boxShadow: `0 5px 15px ${item.shadowColor}`,
                    transition: "all 0.3s ease"
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow = `0 8px 25px ${item.shadowColor}`;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = `0 5px 15px ${item.shadowColor}`;
                  }}
                >
                  Pelajari Selanjutnya →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <div style={{
          textAlign: "center",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)",
          padding: "30px",
          borderRadius: "25px",
          border: "2px solid rgba(255, 255, 255, 0.3)",
          marginBottom: "30px"
        }}>
          <p style={{
            fontSize: "1.8rem",
            fontWeight: "bold",
            color: "#fff",
            marginBottom: "10px",
            textShadow: "2px 2px 6px rgba(0,0,0,0.3)"
          }}>
            "Masa Depan Cerah Tanpa Narkoba"
          </p>
          <p style={{
            fontSize: "1.1rem",
            color: "#f0f0f0",
            margin: 0
          }}>
            Mari bersama-sama cegah bahaya narkoba! 💪
          </p>
        </div>

        {/* Exit Button */}
        <div style={{ textAlign: "center" }}>
          <button
            onClick={onBack}
            style={{
              backgroundColor: "#FF4444",
              color: "#fff",
              border: "3px solid #CC0000",
              padding: "15px 40px",
              borderRadius: "50px",
              fontSize: "1.2rem",
              fontWeight: "bold",
              cursor: "pointer",
              boxShadow: "0 8px 25px rgba(255, 68, 68, 0.4)",
              transition: "all 0.3s ease"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#CC0000";
              e.currentTarget.style.transform = "scale(1.1)";
              e.currentTarget.style.boxShadow = "0 12px 35px rgba(255, 68, 68, 0.6)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#FF4444";
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 8px 25px rgba(255, 68, 68, 0.4)";
            }}
          >
            🚪 Keluar
          </button>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
      `}</style>
    </div>
  );
}

export default Material;