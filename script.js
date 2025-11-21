const tips = [
  { title: "Minum Air Putih", desc: "Hidrasi penting untuk menjaga metabolisme tubuh." },
  { title: "Jaga Pola Tidur", desc: "Tidur 7-8 jam membantu sistem imun tetap kuat." },
  { title: "Konsumsi Sayur & Buah", desc: "Nutrisi alami menjaga sistem pencernaan tetap sehat." },
  { title: "Kurangi Gula", desc: "Gula berlebih meningkatkan risiko diabetes dan obesitas." },
  { title: "Olahraga Ringan", desc: "Lakukan 20-30 menit olahraga ringan setiap hari." },
  { title: "Cuci Tangan", desc: "Mencegah infeksi dan menjaga kesehatan harian." },
  { title: "Kurangi Duduk Lama", desc: "Bangun dan bergeraklah setiap 1 jam." },
  { title: "Minum Air Hangat Pagi", desc: "Membantu pencernaan dan metabolisme tubuh." }
];


const section = document.getElementById("tips-section");
if (section) {
  tips.forEach(t => {
    section.innerHTML += `
      <div class="col-md-4">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title text-green-700">${t.title}</h5>
            <p class="card-text">${t.desc}</p>
          </div>
        </div>
      </div>
    `;
  });
}

function showDailyTip() {
  const randomTipElement = document.getElementById("randomTip");
  if (!randomTipElement) return;

  const today = new Date().toDateString(); 
  const savedData = JSON.parse(localStorage.getItem("dailyTip"));

  if (savedData && savedData.date === today) {
    randomTipElement.innerHTML = `
      <h3 class="text-green-700">${savedData.title}</h3>
      <p>${savedData.desc}</p>
    `;
    return;
  }

  const randomIndex = Math.floor(Math.random() * tips.length);
  const newTip = tips[randomIndex];

  localStorage.setItem("dailyTip", JSON.stringify({
    date: today,
    title: newTip.title,
    desc: newTip.desc
  }));

  randomTipElement.innerHTML = `
    <h3 class="text-green-700">${newTip.title}</h3>
    <p>${newTip.desc}</p>
  `;
}

showDailyTip();

