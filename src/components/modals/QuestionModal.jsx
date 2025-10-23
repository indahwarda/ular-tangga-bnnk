export default function QuestionModal({ open, question, onAnswer }) {
  if (!open || !question) return null;

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
          border: '4px solid #FFD700',
          boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
          animation: 'popIn 0.3s ease-out'
        }}
      >
        
        {/* HEADER - BACKGROUND KUNING SOLID */}
        <div style={{
          backgroundColor: '#FFD54F',
          padding: '15px',
          borderRadius: '15px',
          border: '3px solid #F57C00',
          marginBottom: '20px',
          textAlign: 'center',
          boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
        }}>
          <div style={{
            backgroundColor: '#FF5722',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '10px',
            boxShadow: '0 5px 10px rgba(0,0,0,0.3)',
            animation: 'bounce 2s infinite'
          }}>
            <span style={{ fontSize: '26px' }}>❓</span>
          </div>
          <h3 style={{
            color: '#BF360C',
            fontSize: '18px',
            fontWeight: 'bold',
            margin: '0',
            textShadow: '1px 1px 2px rgba(255,255,255,0.8)'
          }}>
            🚫 KUIS ANTI NARKOBA 🚫
          </h3>
        </div>

        {/* PERTANYAAN - BACKGROUND HIJAU SOLID */}
        <div style={{
          backgroundColor: '#81C784',
          padding: '20px',
          borderRadius: '15px',
          border: '4px solid #2E7D32',
          marginBottom: '20px',
          position: 'relative',
          boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
        }}>
          <div style={{
            position: 'absolute',
            top: '-12px',
            left: '20px',
            backgroundColor: '#1B5E20',
            color: 'white',
            padding: '6px 12px',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: 'bold',
            boxShadow: '0 3px 8px rgba(0,0,0,0.3)'
          }}>
            📝 PERTANYAAN
          </div>
          <p style={{
            color: '#1B5E20',
            fontSize: '16px',
            fontWeight: 'bold',
            lineHeight: '1.5',
            margin: '15px 0 0 0',
            textAlign: 'center',
            textShadow: '1px 1px 2px rgba(255,255,255,0.5)',
            wordWrap: 'break-word'
          }}>
            {question.question}
          </p>
        </div>

        {/* PILIHAN JAWABAN - BACKGROUND PUTIH SOLID */}
        <div style={{ marginBottom: '15px' }}>
          {question?.options?.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => onAnswer(idx)}
              style={{
                width: '100%',
                padding: '12px',
                marginBottom: '8px',
                backgroundColor: '#F5F5F5',
                border: '3px solid #757575',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 3px 8px rgba(0,0,0,0.1)',
                textAlign: 'left'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#E3F2FD';
                e.currentTarget.style.borderColor = '#1976D2';
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(25, 118, 210, 0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#F5F5F5';
                e.currentTarget.style.borderColor = '#757575';
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 3px 8px rgba(0,0,0,0.1)';
              }}
            >
              <div style={{
                backgroundColor: '#4CAF50',
                color: 'white',
                minWidth: '32px',
                height: '32px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                fontWeight: 'bold',
                marginRight: '12px',
                flexShrink: 0,
                boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
              }}>
                {String.fromCharCode(65 + idx)}
              </div>
              <span style={{
                color: '#212121',
                fontSize: '14px',
                fontWeight: '600',
                lineHeight: '1.4',
                flex: 1,
                wordWrap: 'break-word',
                overflowWrap: 'break-word'
              }}>
                {opt}
              </span>
            </button>
          ))}
        </div>

        {/* FOOTER - BACKGROUND KUNING SOLID */}
        <div style={{
          backgroundColor: '#FFCC02',
          padding: '12px',
          borderRadius: '12px',
          border: '2px solid #FF8F00',
          textAlign: 'center',
          boxShadow: '0 3px 8px rgba(0,0,0,0.15)'
        }}>
          <div style={{
            color: '#E65100',
            fontSize: '14px',
            fontWeight: 'bold',
            textShadow: '1px 1px 2px rgba(255,255,255,0.5)'
          }}>
            💡 Pilih jawaban yang paling tepat
          </div>
          <div style={{
            marginTop: '8px',
            display: 'flex',
            justifyContent: 'center',
            gap: '8px'
          }}>
            <span style={{ fontSize: '18px', animation: 'bounce 2s infinite' }}>🎯</span>
            <span style={{ fontSize: '18px', animation: 'bounce 2s infinite 0.1s' }}>📚</span>
            <span style={{ fontSize: '18px', animation: 'bounce 2s infinite 0.2s' }}>💪</span>
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
      `}</style>
    </div>
  );
}