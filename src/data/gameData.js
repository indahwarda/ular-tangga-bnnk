// src/data/gameData.js

// 🐍🪜 mapping ular & tangga
// key = posisi awal, value = posisi tujuan
export const SNAKES_AND_LADDERS = {
  14: 5,   // ular: dari 14 turun ke 5
  27: 19,  // ular: dari 27 turun ke 19
  3: 11,   // tangga: dari 3 naik ke 11
  8: 17,   // tangga: dari 8 naik ke 17
  20: 29,  // tangga: dari 20 naik ke 29
};

// src/data/gameData.js

// 🎓 daftar pertanyaan
// src/data/gameData.js

export const QUESTIONS = [
  {
    question: "Apa kepanjangan dari P4GN?",
    options: [
      "Program Pencegahan, Pemberantasan, Penyalahgunaan, dan Peredaran Gelap Narkoba",
      "Pusat Pendidikan Generasi Nasional",
      "Program Perlindungan Generasi Nusantara",
      "Pengendalian Pencegahan Gizi Nasional",
    ],
    correct: 0,
    explanation:
      "P4GN adalah singkatan dari Pencegahan, Pemberantasan, Penyalahgunaan, dan Peredaran Gelap Narkoba.",
  },
  {
    question: "Apa bahaya utama dari penyalahgunaan narkoba?",
    options: [
      "Meningkatkan kesehatan",
      "Merusak otak dan organ tubuh",
      "Meningkatkan semangat belajar",
      "Membuat lebih pintar",
    ],
    correct: 1,
    explanation:
      "Narkoba bisa merusak fungsi otak, hati, paru-paru, dan organ vital lain, bahkan menyebabkan kematian.",
  },
  {
    question: "Siapa lembaga resmi yang menangani masalah narkoba di Indonesia?",
    options: [
      "BNN (Badan Narkotika Nasional)",
      "KPU (Komisi Pemilihan Umum)",
      "KPK (Komisi Pemberantasan Korupsi)",
      "BPOM (Badan Pengawas Obat dan Makanan)",
    ],
    correct: 0,
    explanation:
      "BNN adalah lembaga resmi yang bertugas mencegah dan memberantas penyalahgunaan serta peredaran gelap narkoba.",
  },
  {
    question: "Apa yang sebaiknya dilakukan jika ditawari narkoba?",
    options: [
      "Menerima untuk coba-coba",
      "Menolak dengan tegas",
      "Diam saja",
      "Mencoba sedikit agar tidak penasaran",
    ],
    correct: 1,
    explanation:
      "Menolak dengan tegas adalah cara terbaik untuk melindungi diri dari bahaya narkoba.",
  },
  {
    question: "Apa dampak sosial dari penyalahgunaan narkoba?",
    options: [
      "Meningkatkan persahabatan",
      "Menurunkan produktivitas, kriminalitas meningkat",
      "Membuat lebih populer",
      "Menambah pengalaman positif",
    ],
    correct: 1,
    explanation:
      "Narkoba menurunkan produktivitas, menyebabkan masalah keluarga, dan meningkatkan angka kriminalitas.",
  },
  {
    question: "Apa arti dari singkatan NAPZA?",
    options: [
      "Narkotika, Psikotropika, dan Zat Adiktif",
      "Nutrisi, Air, Protein, Zat Aktif",
      "Narkotika, Alkohol, Protein, Zat Asam",
      "Natrium, Asam, Protein, Zat Aktif",
    ],
    correct: 0,
    explanation: "NAPZA adalah Narkotika, Psikotropika, dan Zat Adiktif lain.",
  },
  {
    question: "Contoh zat adiktif yang sering disalahgunakan adalah?",
    options: ["Kopi", "Alkohol", "Air mineral", "Vitamin C"],
    correct: 1,
    explanation: "Alkohol termasuk zat adiktif yang dapat menimbulkan ketergantungan.",
  },
  {
    question: "Apa ciri-ciri seseorang yang mulai kecanduan narkoba?",
    options: [
      "Lebih rajin belajar",
      "Perubahan perilaku drastis, sulit berkonsentrasi",
      "Makan lebih teratur",
      "Tidur lebih nyenyak",
    ],
    correct: 1,
    explanation: "Ciri-ciri kecanduan narkoba antara lain perubahan perilaku, sulit fokus, dan kesehatan menurun.",
  },
  {
    question: "Mengapa remaja rentan terhadap penyalahgunaan narkoba?",
    options: [
      "Karena rasa ingin tahu dan mudah terpengaruh lingkungan",
      "Karena daya tahan tubuh lemah",
      "Karena tidak punya aktivitas",
      "Karena semua remaja suka narkoba",
    ],
    correct: 0,
    explanation: "Rasa ingin tahu, tekanan teman sebaya, dan kurangnya pengetahuan membuat remaja lebih rentan.",
  },
  {
    question: "Apa dampak narkoba bagi pendidikan seseorang?",
    options: [
      "Prestasi meningkat",
      "Sulit belajar, sering absen, nilai turun",
      "Makin semangat kuliah",
      "Mudah memahami pelajaran",
    ],
    correct: 1,
    explanation: "Penyalahgunaan narkoba membuat prestasi menurun dan sering bolos sekolah.",
  },
  {
    question: "Apa yang dimaksud rehabilitasi narkoba?",
    options: [
      "Pengobatan dan pemulihan pecandu",
      "Tempat hiburan malam",
      "Tempat penjualan narkoba legal",
      "Pelatihan olahraga",
    ],
    correct: 0,
    explanation: "Rehabilitasi narkoba adalah proses pengobatan dan pemulihan bagi pengguna.",
  },
  {
    question: "Jenis narkotika yang berasal dari tanaman ganja adalah?",
    options: ["Heroin", "Sabu-sabu", "Ganja", "Ekstasi"],
    correct: 2,
    explanation: "Ganja adalah narkotika golongan I yang berasal dari tanaman Cannabis.",
  },
  {
    question: "Apa hukuman bagi pengedar narkoba di Indonesia?",
    options: [
      "Tidak ada hukuman",
      "Hukuman penjara dan bisa hukuman mati",
      "Denda ringan",
      "Cukup diperingatkan",
    ],
    correct: 1,
    explanation: "Pengedar narkoba dapat dijatuhi hukuman berat hingga hukuman mati.",
  },
  {
    question: "Mengapa narkoba disebut zat adiktif?",
    options: [
      "Karena menambah energi",
      "Karena menyebabkan ketergantungan",
      "Karena membuat sehat",
      "Karena membuat kenyang",
    ],
    correct: 1,
    explanation: "Narkoba disebut zat adiktif karena menyebabkan kecanduan.",
  },
  {
    question: "Apa yang harus dilakukan sekolah untuk mencegah narkoba?",
    options: [
      "Mengedukasi siswa tentang bahaya narkoba",
      "Membebaskan siswa menggunakan narkoba",
      "Tidak peduli",
      "Mengajarkan cara memakai narkoba",
    ],
    correct: 0,
    explanation: "Sekolah wajib mengedukasi siswa mengenai bahaya narkoba.",
  },
  {
    question: "Salah satu cara menghindari narkoba adalah?",
    options: [
      "Bergaul dengan teman yang positif",
      "Mencoba sedikit saja",
      "Membeli untuk tahu rasanya",
      "Ikut-ikutan",
    ],
    correct: 0,
    explanation: "Lingkungan positif membantu menghindarkan diri dari narkoba.",
  },
  {
    question: "Apa dampak narkoba terhadap kesehatan mental?",
    options: [
      "Meningkatkan kebahagiaan",
      "Menimbulkan depresi, kecemasan, dan halusinasi",
      "Meningkatkan konsentrasi",
      "Membuat tidur lebih nyenyak",
    ],
    correct: 1,
    explanation: "Narkoba bisa menyebabkan gangguan mental seperti depresi, kecemasan, dan psikosis.",
  },
  {
    question: "Apa yang dimaksud pecandu narkoba?",
    options: [
      "Orang yang sekali mencoba narkoba",
      "Orang yang ketergantungan dan sulit berhenti",
      "Orang yang menolak narkoba",
      "Orang yang mengedukasi bahaya narkoba",
    ],
    correct: 1,
    explanation: "Pecandu adalah orang yang sudah ketergantungan dan sulit lepas dari narkoba.",
  },
  {
    question: "Kenapa narkoba ilegal?",
    options: [
      "Karena harganya mahal",
      "Karena membahayakan kesehatan dan merusak masa depan",
      "Karena tidak enak",
      "Karena tidak populer",
    ],
    correct: 1,
    explanation: "Narkoba ilegal karena berbahaya bagi individu dan masyarakat.",
  },
  {
    question: "Apa peran keluarga dalam pencegahan narkoba?",
    options: [
      "Memberikan dukungan, kasih sayang, dan pengawasan",
      "Membiarkan anak bebas",
      "Menyuruh anak mencoba narkoba",
      "Tidak peduli dengan anak",
    ],
    correct: 0,
    explanation: "Keluarga berperan penting dalam pengawasan dan dukungan agar anak terhindar dari narkoba.",
  },
  {
    question: "Apa efek narkoba terhadap sistem saraf?",
    options: [
      "Meningkatkan daya ingat",
      "Merusak sel-sel saraf dan otak",
      "Membuat lebih cerdas",
      "Meningkatkan IQ",
    ],
    correct: 1,
    explanation: "Narkoba dapat merusak sistem saraf pusat sehingga fungsi otak terganggu.",
  },
  {
    question: "Salah satu contoh psikotropika adalah?",
    options: ["Paracetamol", "Diazepam", "Vitamin B", "Aspirin"],
    correct: 1,
    explanation: "Diazepam termasuk psikotropika yang bisa disalahgunakan.",
  },
  {
    question: "Apa slogan BNN terkait narkoba?",
    options: [
      "Say No To Drugs",
      "Ayo Pakai Narkoba",
      "Narkoba Itu Keren",
      "Coba Sekali Boleh",
    ],
    correct: 0,
    explanation: "BNN menggunakan slogan 'Say No To Drugs' untuk kampanye anti narkoba.",
  },
  {
    question: "Apa tujuan dari tes urine narkoba?",
    options: [
      "Mendeteksi penggunaan narkoba",
      "Mengukur kesehatan ginjal",
      "Mendeteksi gula darah",
      "Mengetahui berat badan",
    ],
    correct: 0,
    explanation: "Tes urine digunakan untuk mendeteksi ada tidaknya narkoba dalam tubuh.",
  },
  {
    question: "Apa dampak narkoba terhadap hubungan sosial?",
    options: [
      "Meningkatkan pertemanan",
      "Menimbulkan konflik, isolasi, dan perpecahan",
      "Membuat lebih populer",
      "Meningkatkan kerja sama",
    ],
    correct: 1,
    explanation: "Narkoba bisa merusak hubungan sosial karena menimbulkan masalah dan konflik.",
  },
  {
    question: "Apa yang sebaiknya dilakukan jika teman terjerat narkoba?",
    options: [
      "Membiarkan saja",
      "Mendukung agar direhabilitasi",
      "Ikut memakai bersama",
      "Mengejek dia",
    ],
    correct: 1,
    explanation: "Dukungan dan dorongan untuk rehabilitasi adalah cara terbaik membantu teman.",
  },
  {
    question: "Apa arti dari zero tolerance terhadap narkoba?",
    options: [
      "Sedikit boleh, banyak dilarang",
      "Tidak ada toleransi terhadap segala bentuk penyalahgunaan narkoba",
      "Toleransi hanya untuk remaja",
      "Hanya narkoba tertentu yang dilarang",
    ],
    correct: 1,
    explanation: "Zero tolerance berarti sama sekali tidak ada toleransi terhadap narkoba.",
  },
  {
    question: "Apa program pemerintah untuk memberantas narkoba?",
    options: [
      "P4GN",
      "Program Makan Bergizi",
      "Gerakan Cinta Tanah Air",
      "Program Literasi Digital",
    ],
    correct: 0,
    explanation: "Program P4GN dibuat pemerintah untuk mencegah dan memberantas narkoba.",
  },
  {
    question: "Apa dampak narkoba terhadap ekonomi keluarga?",
    options: [
      "Membuat kaya",
      "Menguras keuangan, menimbulkan beban ekonomi",
      "Membuat hemat",
      "Meningkatkan penghasilan",
    ],
    correct: 1,
    explanation: "Biaya narkoba membuat ekonomi keluarga terpuruk.",
  },
];


