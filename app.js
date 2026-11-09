// =====================================================================
//  MİNİK İNGİLİZCE — 3 yaş için dokun-dinle İngilizce oyunu
// =====================================================================

// ===== Ayarlar =====
// İngilizceden önce Türkçesini de söylesin mi? ("Kedi... Cat!")
const TURKCE_DE_SOYLE = true;
// Hayvan ses dosyaları en fazla kaç saniye çalsın?
const EN_UZUN_SURE = 4;
// Bul modunda her soruda kaç kart gösterilsin? (3 yaş için 4 iyi bir sayı)
const BUL_SECENEK_SAYISI = 4;

// Doğru cevapta söylenecek övgüler (her seferinde rastgele biri)
const OVGULER_EN = ["Yes!", "Great job!", "Well done!", "Super!", "Good job!"];
const OVGULER_TR = ["Aferin!", "Harikasın!", "Süpersin!", "Bravo!"];

// ===== Kategoriler (odalar) =====
// Yeni kelime eklemek için ilgili listeye bir satır eklemen yeterli.
// tr: Türkçe adı, en: İngilizce adı, soru: (isteğe bağlı) özel İngilizce soru cümlesi
// soruTr: (isteğe bağlı) özel Türkçe soru cümlesi
// emoji / boya / sayi: kartta ne görüneceği, ses: "sesler" klasöründeki dosya adı (.mp3 olmadan)
// renk: kartın arka plan rengi (yazmazsan odanın rengi kullanılır)
const KATEGORILER = [
  {
    ad: "Hayvanlar", simge: "🐶", renk: "#CDE7FF",
    ogeler: [
      { tr: "Kedi",    en: "Cat",      emoji: "🐱", ses: "kedi",    renk: "#FFD6A5" },
      { tr: "Köpek",   en: "Dog",      emoji: "🐶", ses: "kopek",   renk: "#CDE7FF" },
      { tr: "İnek",    en: "Cow",      emoji: "🐮", ses: "inek",    renk: "#D4F5D0" },
      { tr: "Ördek",   en: "Duck",     emoji: "🦆", ses: "ordek",   renk: "#FFF3B0" },
      { tr: "Aslan",   en: "Lion",     emoji: "🦁", ses: "aslan",   renk: "#FFD1DC" },
      { tr: "Koyun",   en: "Sheep",    emoji: "🐑", ses: "koyun",   renk: "#E5D9FF" },
      { tr: "At",      en: "Horse",    emoji: "🐴", ses: "at",      renk: "#FFE0B8" },
      { tr: "Domuz",   en: "Pig",      emoji: "🐷", ses: "domuz",   renk: "#FFD1DC" },
      { tr: "Tavuk",   en: "Chicken",  emoji: "🐔", ses: "tavuk",   renk: "#FFF3B0" },
      { tr: "Kurbağa", en: "Frog",     emoji: "🐸", ses: "kurbaga", renk: "#D4F5D0" },
      { tr: "Maymun",  en: "Monkey",   emoji: "🐵", ses: "maymun",  renk: "#FFE0B8" },
      { tr: "Fil",     en: "Elephant", emoji: "🐘", ses: "fil",     renk: "#E0E7EF" },
      { tr: "Kuş",     en: "Bird",     emoji: "🐦", ses: "kus",     renk: "#CDE7FF" },
      { tr: "Tavşan",  en: "Rabbit",   emoji: "🐰", renk: "#FFE3EC" },
      { tr: "Balık",   en: "Fish",     emoji: "🐟", renk: "#CDE7FF" },
      { tr: "Ayı",     en: "Bear",     emoji: "🐻", renk: "#FFE0B8" },
    ],
  },
  {
    ad: "Renkler", simge: "🎨", renk: "#FFD1DC",
    ogeler: [
      { tr: "Kırmızı",    en: "Red",    boya: "#E63946" },
      { tr: "Mavi",       en: "Blue",   boya: "#2E86DE" },
      { tr: "Sarı",       en: "Yellow", boya: "#FFD60A" },
      { tr: "Yeşil",      en: "Green",  boya: "#2DC653" },
      { tr: "Turuncu",    en: "Orange", boya: "#FF8C1A" },
      { tr: "Mor",        en: "Purple", boya: "#8E44AD" },
      { tr: "Pembe",      en: "Pink",   boya: "#FF8FB8" },
      { tr: "Kahverengi", en: "Brown",  boya: "#8B5A2B" },
      { tr: "Siyah",      en: "Black",  boya: "#222222" },
      { tr: "Beyaz",      en: "White",  boya: "#FFFFFF" },
    ],
  },
  {
    ad: "Meyveler", simge: "🍎", renk: "#D4F5D0",
    ogeler: [
      { tr: "Elma",     en: "Apple",      emoji: "🍎", renk: "#FFD6D6" },
      { tr: "Muz",      en: "Banana",     emoji: "🍌", renk: "#FFF3B0" },
      { tr: "Çilek",    en: "Strawberry", emoji: "🍓", renk: "#FFD1DC" },
      { tr: "Portakal", en: "Orange",     emoji: "🍊", renk: "#FFE0B8" },
      { tr: "Üzüm",     en: "Grapes",     emoji: "🍇", renk: "#E5D9FF", soru: "Where are the grapes?" },
      { tr: "Karpuz",   en: "Watermelon", emoji: "🍉", renk: "#D4F5D0" },
      { tr: "Armut",    en: "Pear",       emoji: "🍐", renk: "#E8F5C8" },
      { tr: "Kiraz",    en: "Cherry",     emoji: "🍒", renk: "#FFD6D6" },
      { tr: "Şeftali",  en: "Peach",      emoji: "🍑", renk: "#FFE0B8" },
      { tr: "Limon",    en: "Lemon",      emoji: "🍋", renk: "#FFF3B0" },
      { tr: "Ananas",   en: "Pineapple",  emoji: "🍍", renk: "#FFF3B0" },
      { tr: "Kivi",     en: "Kiwi",       emoji: "🥝", renk: "#D4F5D0" },
    ],
  },
  {
    ad: "Sebzeler", simge: "🥕", renk: "#FFE0B8",
    ogeler: [
      { tr: "Havuç",    en: "Carrot",   emoji: "🥕", renk: "#FFE0B8" },
      { tr: "Domates",  en: "Tomato",   emoji: "🍅", renk: "#FFD6D6" },
      { tr: "Mısır",    en: "Corn",     emoji: "🌽", renk: "#FFF3B0" },
      { tr: "Patates",  en: "Potato",   emoji: "🥔", renk: "#F3E5D0" },
      { tr: "Brokoli",  en: "Broccoli", emoji: "🥦", renk: "#D4F5D0" },
      { tr: "Salatalık", en: "Cucumber", emoji: "🥒", renk: "#D4F5D0" },
      { tr: "Soğan",    en: "Onion",    emoji: "🧅", renk: "#F3E5D0" },
      { tr: "Biber",    en: "Pepper",   emoji: "🫑", renk: "#D4F5D0" },
    ],
  },
  {
    ad: "Yiyecekler", simge: "🍪", renk: "#F3E5D0",
    ogeler: [
      { tr: "Süt",      en: "Milk",      emoji: "🥛", renk: "#E0E7EF" },
      { tr: "Su",       en: "Water",     emoji: "💧", renk: "#CDE7FF" },
      { tr: "Ekmek",    en: "Bread",     emoji: "🍞", renk: "#F3E5D0" },
      { tr: "Yumurta",  en: "Egg",       emoji: "🥚", renk: "#FFF3B0" },
      { tr: "Peynir",   en: "Cheese",    emoji: "🧀", renk: "#FFF3B0" },
      { tr: "Pasta",    en: "Cake",      emoji: "🍰", renk: "#FFD1DC" },
      { tr: "Dondurma", en: "Ice cream", emoji: "🍦", renk: "#FFE3EC" },
      { tr: "Kurabiye", en: "Cookie",    emoji: "🍪", renk: "#FFE0B8" },
    ],
  },
  {
    ad: "Sayılar", simge: "🔢", renk: "#FFF3B0",
    ogeler: [
      { tr: "Bir",  en: "One",   sayi: 1,  renk: "#FFF3B0" },
      { tr: "İki",  en: "Two",   sayi: 2,  renk: "#CDE7FF" },
      { tr: "Üç",   en: "Three", sayi: 3,  renk: "#D4F5D0" },
      { tr: "Dört", en: "Four",  sayi: 4,  renk: "#FFD1DC" },
      { tr: "Beş",  en: "Five",  sayi: 5,  renk: "#FFE0B8" },
      { tr: "Altı", en: "Six",   sayi: 6,  renk: "#E5D9FF" },
      { tr: "Yedi", en: "Seven", sayi: 7,  renk: "#FFF3B0" },
      { tr: "Sekiz", en: "Eight", sayi: 8, renk: "#CDE7FF" },
      { tr: "Dokuz", en: "Nine", sayi: 9,  renk: "#D4F5D0" },
      { tr: "On",   en: "Ten",   sayi: 10, renk: "#FFD1DC" },
    ],
  },
  {
    ad: "Şekiller", simge: "🔺", renk: "#E5D9FF",
    ogeler: [
      { tr: "Daire",   en: "Circle",   emoji: "🔵", renk: "#FFFFFF" },
      { tr: "Kare",    en: "Square",   emoji: "🟥", renk: "#FFFFFF" },
      { tr: "Üçgen",   en: "Triangle", emoji: "🔺", renk: "#FFFFFF" },
      { tr: "Yıldız",  en: "Star",     emoji: "⭐", renk: "#FFFFFF" },
      { tr: "Kalp",    en: "Heart",    emoji: "❤️", renk: "#FFFFFF" },
      { tr: "Baklava", en: "Diamond",  emoji: "🔷", renk: "#FFFFFF" },
    ],
  },
  {
    ad: "Taşıtlar", simge: "🚗", renk: "#FFE0B8",
    ogeler: [
      { tr: "Araba",      en: "Car",        emoji: "🚗", renk: "#FFD6D6" },
      { tr: "Otobüs",     en: "Bus",        emoji: "🚌", renk: "#FFF3B0" },
      { tr: "Tren",       en: "Train",      emoji: "🚂", renk: "#D4F5D0" },
      { tr: "Uçak",       en: "Airplane",   emoji: "✈️", renk: "#CDE7FF" },
      { tr: "Gemi",       en: "Ship",       emoji: "🚢", renk: "#E5D9FF" },
      { tr: "Bisiklet",   en: "Bicycle",    emoji: "🚲", renk: "#FFE0B8" },
      { tr: "Helikopter", en: "Helicopter", emoji: "🚁", renk: "#CDE7FF" },
      { tr: "Traktör",    en: "Tractor",    emoji: "🚜", renk: "#D4F5D0" },
      { tr: "İtfaiye",    en: "Fire truck", emoji: "🚒", renk: "#FFD6D6" },
      { tr: "Ambulans",   en: "Ambulance",  emoji: "🚑", renk: "#E0E7EF" },
      { tr: "Polis arabası", en: "Police car", emoji: "🚓", renk: "#CDE7FF" },
      { tr: "Roket",      en: "Rocket",     emoji: "🚀", renk: "#E5D9FF" },
    ],
  },
  {
    ad: "Oyuncaklar", simge: "🧸", renk: "#FFE3EC",
    ogeler: [
      { tr: "Top",      en: "Ball",       emoji: "⚽", renk: "#E0E7EF" },
      { tr: "Ayıcık",   en: "Teddy bear", emoji: "🧸", renk: "#FFE0B8" },
      { tr: "Balon",    en: "Balloon",    emoji: "🎈", renk: "#FFD6D6" },
      { tr: "Yapboz",   en: "Puzzle",     emoji: "🧩", renk: "#D4F5D0" },
      { tr: "Uçurtma",  en: "Kite",       emoji: "🪁", renk: "#CDE7FF" },
      { tr: "Davul",    en: "Drum",       emoji: "🥁", renk: "#FFF3B0" },
      { tr: "Kitap",    en: "Book",       emoji: "📕", renk: "#FFD1DC" },
      { tr: "Hediye",   en: "Present",    emoji: "🎁", renk: "#E5D9FF" },
    ],
  },
  {
    ad: "Giysiler", simge: "👗", renk: "#CDE7FF",
    ogeler: [
      { tr: "Tişört",   en: "T-shirt", emoji: "👕", renk: "#CDE7FF" },
      { tr: "Pantolon", en: "Pants",   emoji: "👖", renk: "#E0E7EF", soru: "Where are the pants?" },
      { tr: "Elbise",   en: "Dress",   emoji: "👗", renk: "#FFD1DC" },
      { tr: "Ayakkabı", en: "Shoes",   emoji: "👟", renk: "#FFF3B0", soru: "Where are the shoes?" },
      { tr: "Şapka",    en: "Hat",     emoji: "🧢", renk: "#CDE7FF" },
      { tr: "Çorap",    en: "Socks",   emoji: "🧦", renk: "#FFE0B8", soru: "Where are the socks?" },
      { tr: "Eldiven",  en: "Gloves",  emoji: "🧤", renk: "#D4F5D0", soru: "Where are the gloves?" },
      { tr: "Atkı",     en: "Scarf",   emoji: "🧣", renk: "#FFD6D6" },
    ],
  },
  {
    ad: "Vücudumuz", simge: "👀", renk: "#E5D9FF",
    ogeler: [
      { tr: "Göz",   en: "Eyes",   emoji: "👀", renk: "#CDE7FF", soru: "Where are the eyes?" },
      { tr: "Burun", en: "Nose",   emoji: "👃", renk: "#FFD6A5" },
      { tr: "Ağız",  en: "Mouth",  emoji: "👄", renk: "#FFD1DC" },
      { tr: "Kulak", en: "Ear",    emoji: "👂", renk: "#FFF3B0" },
      { tr: "El",    en: "Hand",   emoji: "✋", renk: "#D4F5D0" },
      { tr: "Ayak",  en: "Foot",   emoji: "🦶", renk: "#FFE0B8" },
      { tr: "Diş",   en: "Tooth",  emoji: "🦷", renk: "#E0E7EF" },
      { tr: "Dil",   en: "Tongue", emoji: "👅", renk: "#FFD1DC" },
      { tr: "Kol",   en: "Arm",    emoji: "💪", renk: "#FFE0B8" },
      { tr: "Bacak", en: "Leg",    emoji: "🦵", renk: "#FFD6A5" },
    ],
  },
  {
    ad: "Duygular", simge: "😀", renk: "#FFF3B0",
    ogeler: [
      { tr: "Mutlu",   en: "Happy",     emoji: "😀", renk: "#FFF3B0", soru: "Who is happy?",     soruTr: "Hangisi mutlu?" },
      { tr: "Üzgün",   en: "Sad",       emoji: "😢", renk: "#CDE7FF", soru: "Who is sad?",       soruTr: "Hangisi üzgün?" },
      { tr: "Kızgın",  en: "Angry",     emoji: "😠", renk: "#FFD6D6", soru: "Who is angry?",     soruTr: "Hangisi kızgın?" },
      { tr: "Uykulu",  en: "Sleepy",    emoji: "😴", renk: "#E5D9FF", soru: "Who is sleepy?",    soruTr: "Hangisi uykulu?" },
      { tr: "Şaşkın",  en: "Surprised", emoji: "😲", renk: "#FFE0B8", soru: "Who is surprised?", soruTr: "Hangisi şaşkın?" },
      { tr: "Korkmuş", en: "Scared",    emoji: "😨", renk: "#E0E7EF", soru: "Who is scared?",    soruTr: "Hangisi korkmuş?" },
    ],
  },
  {
    ad: "Gökyüzü", simge: "🌈", renk: "#CDE7FF",
    ogeler: [
      { tr: "Güneş",     en: "Sun",     emoji: "☀️", renk: "#FFF3B0" },
      { tr: "Bulut",     en: "Cloud",   emoji: "☁️", renk: "#CDE7FF" },
      { tr: "Yağmur",    en: "Rain",    emoji: "🌧️", renk: "#E0E7EF", soru: "Where is the rain?" },
      { tr: "Kar",       en: "Snow",    emoji: "❄️", renk: "#E0F4FF", soru: "Where is the snow?" },
      { tr: "Gökkuşağı", en: "Rainbow", emoji: "🌈", renk: "#FFE3EC" },
      { tr: "Ay",        en: "Moon",    emoji: "🌙", renk: "#E5D9FF" },
      { tr: "Yıldız",    en: "Star",    emoji: "⭐", renk: "#E5D9FF" },
      { tr: "Şimşek",    en: "Lightning", emoji: "⚡", renk: "#FFF3B0", soru: "Where is the lightning?" },
    ],
  },
];

// ===== Ekrandaki parçalar =====
const izgara      = document.getElementById("izgara");
const baslik      = document.getElementById("baslik");
const evButon     = document.getElementById("evButon");
const modSecici   = document.getElementById("modSecici");
const soruSatiri  = document.getElementById("soruSatiri");
const tekrarButon = document.getElementById("tekrarButon");
const konfetiAlan = document.getElementById("konfeti");

// ===== Oyunun anlık durumu =====
// Bir masa oyununda "kimin sırası, hangi kart açık" bilgisini tutan not kağıdı gibi.
let aktifKategori = null;   // hangi odadayız (null = ana sayfa)
let mod = "dinle";          // "dinle" ya da "bul"
let hedef = null;           // Bul modunda aranan kelime
let oncekiHedef = null;     // aynı soru üst üste gelmesin
let kilitli = false;        // kutlama sırasında dokunuşları beklet
let zamanlayicilar = [];    // sonradan çalışacak işler (iptal edebilmek için)

// =====================================================================
//  KONUŞMA (Web Speech API)
// =====================================================================
let trSes = null, enSes = null;

function sesleriBul() {
  if (!window.speechSynthesis) return;
  const sesler = speechSynthesis.getVoices();
  const bul = on => sesler.find(s => (s.lang || "").toLowerCase().replace("_", "-").startsWith(on));
  trSes = bul("tr") || null;
  enSes = bul("en-us") || bul("en-gb") || bul("en") || null;
}

if (window.speechSynthesis) {
  sesleriBul();
  speechSynthesis.onvoiceschanged = sesleriBul;
}

// parcalar: [{ metin: "Kedi", dil: "tr" }, { metin: "Cat!", dil: "en" }]
// Cümleler sırayla, bir kuyruğa dizilmiş gibi okunur.
function konus(parcalar) {
  if (!window.speechSynthesis) return;
  parcalar.forEach(p => {
    const c = new SpeechSynthesisUtterance(p.metin);
    if (p.dil === "en") {
      c.lang = "en-US";
      if (enSes) c.voice = enSes;
      c.rate = 0.8;     // İngilizce daha yavaş ve net
    } else {
      c.lang = "tr-TR";
      if (trSes) c.voice = trSes;
      c.rate = 0.9;
    }
    c.pitch = 1.2;      // biraz neşeli
    speechSynthesis.speak(c);
  });
}

// Bir kelimenin adı: "Kedi... Cat!" (ayara göre sadece "Cat!")
function adiniSoyle(oge) {
  const parcalar = [];
  if (TURKCE_DE_SOYLE) parcalar.push({ metin: oge.tr, dil: "tr" });
  parcalar.push({ metin: oge.en + "!", dil: "en" });
  konus(parcalar);
}

// =====================================================================
//  HAYVAN SESLERİ (mp3 dosyaları)
// =====================================================================
// CD rafı gibi: CD'ler rafta hazır, dokununca sadece "play"e basıyoruz.
const sesDosyalari = {};
let calanSes = null;

function sesDosyasi(ad) {
  let s = sesDosyalari[ad];
  if (!s || s.bulunamadi) {
    // İlk kez ya da önceki deneme başarısızsa yeniden yükle
    s = new Audio(`sesler/${ad}.mp3${s ? "?t=" + Date.now() : ""}`);
    s.preload = "auto";
    s.bulunamadi = false;
    s.addEventListener("error", () => { s.bulunamadi = true; });
    sesDosyalari[ad] = s;
  }
  return s;
}

// Hayvanların seslerini baştan yükle ki dokununca beklemeden çalsın
KATEGORILER.forEach(k => k.ogeler.forEach(o => { if (o.ses) sesDosyasi(o.ses); }));

// Ses dosyası varsa çalar, bitince "sonra" işini yapar. Yoksa hemen "sonra"ya geçer.
function sesCalSonra(oge, sonra) {
  if (!oge.ses) { sonra(); return; }

  const ses = sesDosyasi(oge.ses);
  calanSes = ses;
  ses.currentTime = 0;

  let bitti = false;
  const bitince = () => {
    if (bitti || calanSes !== ses) return;   // bu arada başka karta dokunulduysa karışma
    bitti = true;
    ses.pause();
    calanSes = null;
    sonra();
  };
  ses.onended = bitince;
  bekle(bitince, EN_UZUN_SURE * 1000);

  ses.play().catch(() => {
    // Çalınamadıysa sesi atla, sadece adını söyle
    ses.bulunamadi = true;
    bitince();
  });
}

// =====================================================================
//  YARDIMCILAR
// =====================================================================
// setTimeout'un iptal edilebilir hali: odadan çıkınca bekleyen işler iptal olur
function bekle(is, ms) {
  zamanlayicilar.push(setTimeout(is, ms));
}

// Çalan sesi, konuşmayı ve bekleyen işleri durdur
function hepsiniDurdur() {
  if (calanSes) {
    calanSes.onended = null;
    calanSes.pause();
    calanSes = null;
  }
  zamanlayicilar.forEach(clearTimeout);
  zamanlayicilar = [];
  if (window.speechSynthesis) speechSynthesis.cancel();
}

// Bir animasyonu baştan başlat (sınıfı kaldır, tarayıcıya "yeniden çiz" de, tekrar ekle)
function animasyon(el, sinif) {
  el.classList.remove(sinif);
  void el.offsetWidth;
  el.classList.add(sinif);
}

// Listeden rastgele bir eleman
function rastgele(liste) {
  return liste[Math.floor(Math.random() * liste.length)];
}

// Listeyi karıştır (iskambil destesi karıştırır gibi)
function karistir(liste) {
  const kopya = [...liste];
  for (let i = kopya.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [kopya[i], kopya[j]] = [kopya[j], kopya[i]];
  }
  return kopya;
}

function konfetiYagdir() {
  const sekiller = ["🎉", "⭐", "🎈", "✨", "💖", "🌟"];
  for (let i = 0; i < 18; i++) {
    const p = document.createElement("span");
    p.className = "parca";
    p.textContent = rastgele(sekiller);
    p.style.left = Math.random() * 100 + "vw";
    p.style.animationDelay = Math.random() * 0.4 + "s";
    konfetiAlan.appendChild(p);
    setTimeout(() => p.remove(), 2500);
  }
}

// =====================================================================
//  EKRANLAR
// =====================================================================

// Yıldızları 5'erli sıralar halinde diz (8 → ⭐⭐⭐⭐⭐ / ⭐⭐⭐), parmakla saymak kolay olsun
function yildizlar(n) {
  const ilk = "⭐".repeat(Math.min(n, 5));
  return n > 5 ? ilk + "<br>" + "⭐".repeat(n - 5) : ilk;
}

// Kartın resim kısmı: renk dairesi, rakam ya da emoji
function resimHTML(oge) {
  if (oge.boya) return `<span class="resim"><span class="boya" style="background:${oge.boya}"></span></span>`;
  if (oge.sayi) return `<span class="resim"><span class="rakam">${oge.sayi}</span><span class="yildizlar">${yildizlar(oge.sayi)}</span></span>`;
  return `<span class="resim">${oge.emoji}</span>`;
}

// --- Ana sayfa: kategori kartları ---
function anaSayfa() {
  hepsiniDurdur();
  aktifKategori = null;
  baslik.textContent = "Minik İngilizce";
  evButon.classList.add("gizli");
  modSecici.classList.add("gizli");
  soruSatiri.classList.add("gizli");
  izgara.innerHTML = "";

  KATEGORILER.forEach(k => {
    const kart = document.createElement("button");
    kart.className = "kart";
    kart.style.setProperty("--renk", k.renk);
    kart.innerHTML = `<span class="resim">${k.simge}</span><span class="ad">${k.ad}</span>`;
    kart.addEventListener("click", () => odayaGir(k));
    izgara.appendChild(kart);
  });
  window.scrollTo(0, 0);
}

// --- Verilen kelimelerin kartlarını ızgaraya diz ---
function kartlariCiz(ogeler) {
  izgara.innerHTML = "";
  ogeler.forEach(oge => {
    const kart = document.createElement("button");
    kart.className = "kart";
    // Renk kartları beyaz zeminde dursun ki renk net görünsün (beyaz renk ise gri zeminde)
    const zemin = oge.boya ? (oge.boya === "#FFFFFF" ? "#E0E7EF" : "#FFFFFF") : (oge.renk || aktifKategori.renk);
    kart.style.setProperty("--renk", zemin);
    kart.innerHTML = `${resimHTML(oge)}<span class="ad">${oge.tr}</span><span class="en">${oge.en}</span>`;
    kart.oge = oge;   // karta hangi kelime olduğunu not ediyoruz
    kart.addEventListener("click", () => kartaDokunuldu(kart));
    izgara.appendChild(kart);
  });
}

// --- Bir kategorinin odası ---
function odayaGir(kategori) {
  hepsiniDurdur();
  aktifKategori = kategori;
  baslik.textContent = kategori.ad;
  evButon.classList.remove("gizli");
  modSecici.classList.remove("gizli");
  modSec(mod);
  window.scrollTo(0, 0);
}

// --- Mod değiştir: 👂 Dinle / 🔍 Bul ---
function modSec(yeniMod) {
  if (!aktifKategori) return;   // ana sayfadayken mod yok
  hepsiniDurdur();
  kilitli = false;
  mod = yeniMod;
  modSecici.querySelectorAll(".mod").forEach(b => b.classList.toggle("aktif", b.dataset.mod === mod));

  if (mod === "bul") {
    soruSatiri.classList.remove("gizli");
    oncekiHedef = null;
    yeniSoru();
  } else {
    // Dinle modunda odadaki bütün kelimeler görünür
    soruSatiri.classList.add("gizli");
    hedef = null;
    kartlariCiz(aktifKategori.ogeler);
  }
}

// =====================================================================
//  DOKUNUNCA NE OLACAK?
// =====================================================================
function kartaDokunuldu(kart) {
  const oge = kart.oge;

  // 👂 Dinle modu: zıpla, (varsa) hayvan sesi, sonra "Kedi... Cat!"
  if (mod === "dinle") {
    hepsiniDurdur();
    animasyon(kart, "zipla");
    sesCalSonra(oge, () => adiniSoyle(oge));
    return;
  }

  // 🔍 Bul modu
  if (kilitli) return;   // kutlama bitmeden yeni dokunuşları sayma

  if (oge === hedef) {
    // Doğru! Kutlama
    kilitli = true;
    hepsiniDurdur();
    kart.classList.add("dogru");
    animasyon(kart, "zipla");
    konfetiYagdir();
    sesCalSonra(oge, () => {
      konus([
        { metin: `${rastgele(OVGULER_EN)} ${oge.en}!`, dil: "en" },
        { metin: rastgele(OVGULER_TR), dil: "tr" },
      ]);
    });
    // Biraz sonra yeni soru (hayvan sesi varsa biraz daha bekle)
    bekle(() => {
      kilitli = false;
      yeniSoru();
    }, oge.ses ? 6000 : 4500);
  } else {
    // Yanlış: ceza yok. Dokunduğu şeyin adını öğret, tekrar denemeye çağır
    hepsiniDurdur();
    animasyon(kart, "salla");
    konus([
      { metin: `${oge.en}.`, dil: "en" },
      { metin: "Try again!", dil: "en" },
    ]);
  }
}

// --- Bul modu: yeni soru seç, 4 seçenek diz ve sor ---
function yeniSoru() {
  const ogeler = aktifKategori.ogeler;
  hedef = rastgele(ogeler.filter(o => o !== oncekiHedef));
  oncekiHedef = hedef;

  // Hedef + rastgele diğerleri, karışık sırayla
  const digerleri = karistir(ogeler.filter(o => o !== hedef)).slice(0, BUL_SECENEK_SAYISI - 1);
  kartlariCiz(karistir([hedef, ...digerleri]));
  soruyuSor();
}

function soruyuSor() {
  if (!hedef) return;
  if (window.speechSynthesis) speechSynthesis.cancel();
  const parcalar = [];
  if (TURKCE_DE_SOYLE) parcalar.push({ metin: hedef.soruTr || `${hedef.tr} nerede?`, dil: "tr" });
  parcalar.push({ metin: hedef.soru || varsayilanSoru(hedef), dil: "en" });
  konus(parcalar);
}

// Özel soru yazılmamışsa: sayılar için "Where is number three?", diğerleri "Where is the cat?"
function varsayilanSoru(oge) {
  if (oge.sayi) return `Where is number ${oge.en.toLowerCase()}?`;
  if (oge.boya) return `Where is ${oge.en.toLowerCase()}?`;
  return `Where is the ${oge.en.toLowerCase()}?`;
}

// =====================================================================
//  DÜĞMELER
// =====================================================================
evButon.addEventListener("click", anaSayfa);
tekrarButon.addEventListener("click", soruyuSor);
modSecici.querySelectorAll(".mod").forEach(b => {
  b.addEventListener("click", () => modSec(b.dataset.mod));
});

// Başla!
anaSayfa();
