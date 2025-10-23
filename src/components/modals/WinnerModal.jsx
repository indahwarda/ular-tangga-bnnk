export default function WinnerModal({ open, winner, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-2xl shadow-xl max-w-sm w-full text-center">
        <h2 className="text-2xl font-bold text-green-600">🎉 Selamat! 🎉</h2>
        <p className="mt-3 text-lg text-gray-800">
          {winner ? `Pemenangnya adalah ${winner}!` : "Kita punya pemenang!"}
        </p>

        <button
          onClick={onClose}
          className="mt-6 px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        >
          Tutup
        </button>
      </div>
    </div>
  );
}
