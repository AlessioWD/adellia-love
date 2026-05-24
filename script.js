// DAFTAR FOTO
const daftarFoto = [
    'images/foto1.jpeg',
    'images/foto2.jpeg',
    'images/foto3.jpeg',
    'images/foto4.jpeg'
];

// KATA-KATA UNTUK SETIAP FOTO (ELEGANT & TIDAK NORAK)
const kataKata = [
    {
        text: "Kenangan pertama kita adalah yang paling spesial. Terima kasih sudah masuk dalam hidupku.",
        author: "Rizwan"
    },
    {
        text: "Setiap momen bersamamu terasa seperti keajaiban. Aku sangat berterima kasih atas kehadiranmu.",
        author: "Rizwan"
    },
    {
        text: "Waktu berlalu begitu cepat, tapi kenangan ini akan selalu terukir di hatiku selamanya.",
        author: "Rizwan"
    },
    {
        text: "Kau adalah alasan di balik setiap senyumku. Aku sayang kamu lebih dari kata-kata apapun.",
        author: "Rizwan"
    }
];

const modalGaleri = document.getElementById('modalGaleri');
const sectionPacar = document.getElementById('sectionPacar');
const modalPesan = document.getElementById('modalPesan');
const galleryGrid = document.getElementById('galleryGrid');
const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');

// LOAD FOTO
function loadGaleri() {
    galleryGrid.innerHTML = '';
    
    daftarFoto.forEach((foto, index) => {
        const div = document.createElement('div');
        div.className = 'gallery-item';
        div.innerHTML = `<img src="${foto}" alt="Kenangan ${index + 1}">`;
        
        // KLIK FOTO = MUNCUL KATA-KATA
        div.onclick = () => tampilkanKata(index);
        
        galleryGrid.appendChild(div);
    });
}

// BUKA GALERI
function bukaGaleri() {
    loadGaleri();
    modalGaleri.classList.add('active');
}

// TUTUP GALERI
function tutupGaleri() {
    modalGaleri.classList.remove('active');
}

// TAMPILKAN KATA-KATA SESUAI FOTO
function tampilkanKata(index) {
    // Ambil kata-kata sesuai index foto
    quoteText.textContent = `"${kataKata[index].text}"`;
    quoteAuthor.textContent = `- ${kataKata[index].author}`;
    
    modalGaleri.classList.remove('active');
    setTimeout(() => {
        modalPesan.classList.add('active');
    }, 300);
}

// TUTUP PESAN
function tutupPesan() {
    modalPesan.classList.remove('active');
}

// LIHAT PACAR (FOOTER)
function lihatPacar() {
    modalGaleri.classList.remove('active');
    
    setTimeout(() => {
        sectionPacar.classList.add('active');
    }, 300);
}

// KEMBALI KE UTAMA
function kembaliKeUtama() {
    sectionPacar.classList.remove('active');
}

// KEYBOARD (ESCAPE)
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        if (sectionPacar.classList.contains('active')) {
            kembaliKeUtama();
        } else if (modalPesan.classList.contains('active')) {
            tutupPesan();
        } else if (modalGaleri.classList.contains('active')) {
            tutupGaleri();
        }
    }
});