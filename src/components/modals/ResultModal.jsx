export default function ResultModal({ open, correct, explanation, onClose }) {
  if (!open) return null;

  return (
    <div 
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 99999,
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        overflow: 'auto'
      }}
    >
      <div 
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '20px',
          padding: '30px',
          width: '90%',
          maxWidth: '700px',
          maxHeight: '90vh',
          overflowY: 'auto',
          border: correct ? '4px solid #4CAF50' : '4px solid #F44336',
          boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
          textAlign: 'center',
          animation: 'popIn 0.3s ease-out'
        }}
      >
        
        {/* HEADER HASIL - BACKGROUND SOLID SESUAI JAWABAN */}
        <div style={{
          backgroundColor: correct ? '#C8E6C9' : '#FFCDD2',
          padding: '20px',
          borderRadius: '15px',
          border: correct ? '4px solid #2E7D32' : '4px solid #C62828',
          marginBottom: '20px',
          boxShadow: '0 8px 20px rgba(0,0,0,0.15)'
        }}>
          
          {/* ICON HASIL */}
          <div style={{
            backgroundColor: correct ? '#4CAF50' : '#F44336',
            width: '70px',
            height: '70px',
            borderRadius: '50%',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '12px',
            boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
            animation: correct ? 'bounce 2s infinite' : 'pulse 2s infinite'
          }}>
            <span style={{ fontSize: '36px' }}>
              {correct ? "✅" : "❌"}
            </span>
          </div>

          {/* JUDUL HASIL */}
          <h2 style={{
            color: correct ? '#1B5E20' : '#B71C1C',
            fontSize: '24px',
            fontWeight: 'bold',
            margin: '0',
            textShadow: '1px 1px 3px rgba(255,255,255,0.8)',
            letterSpacing: '1px'
          }}>
            JAWABAN: {correct ? "BENAR!" : "SALAH!"}
          </h2>

          {/* GARIS DEKORASI */}
          <div style={{
            width: '100px',
            height: '4px',
            backgroundColor: correct ? '#4CAF50' : '#F44336',
            margin: '12px auto 0',
            borderRadius: '3px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
          }}></div>
        </div>

        {/* GAMBAR ILUSTRASI - BACKGROUND SOLID */}
        <div style={{
          backgroundColor: '#E8F5E8',
          padding: '20px',
          borderRadius: '15px',
          border: '3px solid #81C784',
          marginBottom: '20px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
        }}>
          <div style={{
            backgroundColor: '#FFEB3B',
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '4px solid #F57F17',
            boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
            position: 'relative',
            margin: '0 auto'
          }}>
            
            {/* PATTERN BACKGROUND */}
            <div style={{
              position: 'absolute',
              top: '8px',
              left: '8px',
              width: '12px',
              height: '12px',
              backgroundColor: '#FF5722',
              borderRadius: '50%',
              opacity: 0.3
            }}></div>
            <div style={{
              position: 'absolute',
              top: '25px',
              right: '12px',
              width: '10px',
              height: '10px',
              backgroundColor: '#2196F3',
              borderRadius: '50%',
              opacity: 0.3
            }}></div>
            <div style={{
              position: 'absolute',
              bottom: '18px',
              left: '18px',
              width: '8px',
              height: '8px',
              backgroundColor: '#9C27B0',
              borderRadius: '50%',
              opacity: 0.3
            }}></div>

            {/* ICON UTAMA */}
            <div style={{
              fontSize: '45px',
              zIndex: 2,
              animation: 'pulse 3s infinite'
            }}>
              🚫
            </div>

            {/* LABEL STOP NARKOBA */}
            <div style={{
              position: 'absolute',
              bottom: '-8px',
              backgroundColor: '#D32F2F',
              color: 'white',
              padding: '4px 10px',
              borderRadius: '18px',
              fontSize: '11px',
              fontWeight: 'bold',
              boxShadow: '0 3px 8px rgba(0,0,0,0.3)',
              border: '2px solid white'
            }}>
              STOP NARKOBA
            </div>
          </div>
        </div>

        {/* PENJELASAN - BACKGROUND KUNING SOLID */}
        <div style={{
          backgroundColor: '#FFF9C4',
          padding: '20px',
          borderRadius: '15px',
          border: '4px solid #F9A825',
          marginBottom: '20px',
          position: 'relative',
          boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
        }}>
          
          {/* LABEL PENJELASAN */}
          <div style={{
            position: 'absolute',
            top: '-12px',
            right: '20px',
            backgroundColor: '#FF9800',
            color: 'white',
            padding: '6px 12px',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: 'bold',
            boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
            border: '2px solid white'
          }}>
            💡 PENJELASAN
          </div>

          <p style={{
            color: '#E65100',
            fontSize: '14px',
            fontWeight: 'bold',
            lineHeight: '1.6',
            margin: '15px 0 0 0',
            textAlign: 'left',
            textShadow: '1px 1px 2px rgba(255,255,255,0.5)',
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
            whiteSpace: 'pre-wrap'
          }}>
            {explanation}
          </p>
        </div>

        {/* TOMBOL TUTUP - BACKGROUND BIRU SOLID */}
        <button
          onClick={onClose}
          style={{
            width: '100%',
            padding: '14px 20px',
            backgroundColor: '#2196F3',
            color: 'white',
            fontSize: '16px',
            fontWeight: 'bold',
            borderRadius: '12px',
            border: '3px solid #1565C0',
            cursor: 'pointer',
            boxShadow: '0 6px 16px rgba(33, 150, 243, 0.4)',
            transition: 'all 0.3s ease',
            marginBottom: '15px'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#1976D2';
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(33, 150, 243, 0.6)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#2196F3';
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 6px 16px rgba(33, 150, 243, 0.4)';
          }}
        >
          🎮 LANJUTKAN PERMAINAN 🎯
        </button>

        {/* DEKORASI FOOTER */}
        <div style={{
          backgroundColor: '#F3E5F5',
          padding: '12px',
          borderRadius: '12px',
          border: '2px solid #BA68C8',
          boxShadow: '0 3px 8px rgba(0,0,0,0.1)'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px'
          }}>
            <span style={{ fontSize: '22px', animation: 'bounce 2s infinite' }}>🌟</span>
            <span style={{ fontSize: '22px', animation: 'bounce 2s infinite 0.2s' }}>🎊</span>
            <span style={{ fontSize: '22px', animation: 'bounce 2s infinite 0.4s' }}>🌟</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes popIn {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  );
}