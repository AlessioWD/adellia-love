// DATA FOTO
var foto = ['images/foto1.jpeg', 'images/foto2.jpeg', 'images/foto3.jpeg', 'images/foto4.jpeg'];

// DATA PERTANYAAN
var soal = [
    {q: "Apa yang kamu rasakan saat pertama kali kita bertemu?", a: "Happy & Deg-degan", salah: ["Gak Happy", "Biasa aja"]},
    {q: "Tanggal jadian kita?", a: "20 Juni 2024", salah: ["1 Januari 2024", "15 Agustus 2024"]},
    {q: "Makanan yang aku GAK SUKA?", a: "Kentang", salah: ["Nasi Padang", "Mie Ayam"]},
    {q: "Dimana kita pertama kali bertemu?", a: "TW Cafe & Eatery", salah: ["Mall", "Kampus"]},
    {q: "Di mana kamu menembak aku?", a: "Di jalan mau antar ke kampus", salah: ["Di chat WA", "Di mall"]}
];

// KALIMAT SALAH
var kalimatSalah = [
    {judul: "Ihh Ayang", pesan: "Sekarang salah coba lagi dong"},
    {judul: "Jangan Bohong", pesan: "Boongan ya? Coba pikir lagi"},
    {judul: "Salah Lagi", pesan: "Wkwk salah lagi nih"},
    {judul: "Ayang", pesan: "alah salah mulu"},
    {judul: "Hmmm", pesan: "Salah terus nih"},
    {judul: "Walah", pesan: "Wkwk coba lagi dong"},
    {judul: "Ih Gaya", pesan: "Gaya mulu tapi salah"},
    {judul: "Salah", pesan: "Salah mulu ya"},
    {judul: "Wkwk", pesan: "Wkwk cobaa yang bener"},
    {judul: "Ga Benar", pesan: "Gaada yang bener"}
];

// KATA-KATA FOTO
var kataFoto = [
    {judul: "Kenangan #1", pesan: "Kenangan pertama kita yang paling spesial."},
    {judul: "Kenangan #2", pesan: "Setiap momen bersamamu seperti keajaiban."},
    {judul: "Kenangan #3", pesan: "Waktu cepat berlalu, tapi kenangan ini terukir selamanya."},
    {judul: "Kenangan #4", pesan: "Kau alasan di balik setiap senyumku."}
];

var no = 0;

// FUNGSI ACAK
function acak(arr) {
    for(var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
    return arr;
}

// BUKA QUIZ
function bukaQuiz() {
    no = 0;
    tampilSoal();
    document.getElementById('modalQuiz').style.display = 'flex';
}

// TAMPILKAN SOAL
function tampilSoal() {
    var s = soal[no];
    document.getElementById('noSoal').innerText = no + 1;
    document.getElementById('soal').innerText = s.q;
    document.getElementById('progress').innerText = (no + 1) + "/5";
    
    var ops = acak([s.salah[0], s.salah[1], s.a]);
    var div = document.getElementById('pilihan');
    div.innerHTML = "";
    
    for(var i = 0; i < ops.length; i++) {
        var btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = ops[i];
        btn.onclick = (function(jwb, benar) {
            return function() {
                if(jwb === benar) {
                    no++;
                    if(no >= soal.length) {
                        document.getElementById('modalQuiz').style.display = 'none';
                        document.getElementById('footer').style.display = 'flex';
                    } else {
                        tampilSoal();
                    }
                } else {
                    var rnd = Math.floor(Math.random() * kalimat