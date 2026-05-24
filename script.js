// DAFTAR FOTO
const daftarFoto = [
    'images/foto1.jpeg',
    'images/foto2.jpeg',
    'images/foto3.jpeg',
    'images/foto4.jpeg'
];

// KATA-KATA SETIAP FOTO
const kataKata = [
    { text: "Kenangan pertama kita adalah yang paling spesial.", author: "Rizwan" },
    { text: "Setiap momen bersamamu terasa seperti keajaiban.", author: "Rizwan" },
    { text: "Waktu berlalu cepat, tapi kenangan ini terukir selamanya.", author: "Rizwan" },
    { text: "Kau adalah alasan di balik setiap senyumku.", author: "Rizwan" }
];

// PERTANYAAN
const pertanyaan = {
    soal: "Apa yang kamu rasakan saat pertama kali kita bertemu?",
    jawaban: [
        { teks: "Deg-degan jantung berhenti", benar: false },
        { teks: "Merasa nyaman & bahagia", benar: true }
    ]
};

// AMBIL ELEMEN
const modalQuestion = document.getElementById('modalQuestion');
const modalPesan = document.getElementById('modalPesan');
const modalGaleri = document.getElementById('modalGaleri');
const sectionPacar = document.getElementById('sectionPacar');
const galleryGrid = document.getElementById('galleryGrid');
const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');

// BUKA PERTANYAAN
function bukaPertanyaan() {
    document.getElementById('questionText').textContent = pertanyaan.soal;
    
    const optionsDiv = document.getElement