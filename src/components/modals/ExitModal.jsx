export default function ExitModal({ onClose, onConfirm }) {
  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 99999,
        padding: '20px'
      }}
    >
      <div 
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '20px',
          padding: '40px',
          maxWidth: '450px',
          width: '100%',
          textAlign: 'center',
          boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
          border: '4px solid #EF4444',
          animation: 'popIn 0.3s ease-out'
        }}
      >
        {/* Icon Warning */}
        <div style={{
          backgroundColor: '#FEE2E2',
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '20px',
          border: '4px solid #EF4444'
        }}>
          <span style={{ fontSize: '40px' }}>⚠️</span>
        </div>

        {/* Judul */}
        <h2 style={{
          fontSize: '1.8rem',
          fontWeight: 'bold',
          color: '#1F2937',
          marginBottom: '15px'
        }}>
          Konfirmasi Keluar
        </h2>

        {/* Pesan */}
        <p style={{
          fontSize: '1.1rem',
          color: '#6B7280',
          marginBottom: '30px',
          lineHeight: '1.6'
        }}>
          Apakah kamu yakin ingin keluar dari game <strong style={{ color: '#EF4444' }}>Ular Tangga Anti Narkoba</strong>?
        </p>

        {/* Tombol */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '15px'
        }}>
          {/* Tombol Batal */}
          <button
            onClick={onClose}
            style={{
              padding: '12px 30px',
              backgroundColor: '#E5E7EB',
              color: '#1F2937',
              fontSize: '1rem',
              fontWeight: 'bold',
              borderRadius: '12px',
              border: '2px solid #9CA3AF',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#D1D5DB';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#E5E7EB';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            ❌ Batal
          </button>

          {/* Tombol Keluar */}
          <button
            onClick={onConfirm}
            style={{
              padding: '12px 30px',
              backgroundColor: '#EF4444',
              color: '#FFFFFF',
              fontSize: '1rem',
              fontWeight: 'bold',
              borderRadius: '12px',
              border: '2px solid #DC2626',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 10px rgba(239, 68, 68, 0.4)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#DC2626';
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 6px 15px rgba(239, 68, 68, 0.6)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#EF4444';
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 10px rgba(239, 68, 68, 0.4)';
            }}
          >
            🚪 Keluar
          </button>
        </div>
      </div>

      {/* CSS Animation */}
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
      `}</style>
    </div>
  );
}