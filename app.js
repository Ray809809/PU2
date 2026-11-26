/**
 * Logger Studio - Dashboard Kearsipan BBWS Cimanuk Cisanggarung
 * Implementasi lengkap alur kerja Petugas Gedung -> Database Sheets -> Looker Studio Dashboard
 */

// ==================== DEFAULT DATABASE INITIAL DATA ====================
const defaultData = {
  MASTER_GEDUNG: [
    { kode: "GD-PST", nama: "Gedung Arsip Pusat", petugas: "Ahmad Subagyo", email: "arsip.pusat@pu.go.id", kapasitas: 8000 },
    { kode: "GD-BRT", nama: "Gedung Arsip Barat", petugas: "Budi Santoso", email: "arsip.barat@pu.go.id", kapasitas: 4000 },
    { kode: "GD-TMR", nama: "Gedung Arsip Timur", petugas: "Citra Dewi", email: "arsip.timur@pu.go.id", kapasitas: 4500 },
    { kode: "GD-SLT", nama: "Gedung Arsip Selatan", petugas: "Dedi Prasetyo", email: "arsip.selatan@pu.go.id", kapasitas: 3500 },
    { kode: "GD-UTR", nama: "Gedung Arsip Utara", petugas: "Eka Wahyuni", email: "arsip.utara@pu.go.id", kapasitas: 4000 }
  ],
  MASTER_KPI: [
    { id: 1, indikator: "Arsip Aktif", target: 95, bobot: 15, deskripsi: "Pengelolaan dan kelengkapan arsip aktif" },
    { id: 2, indikator: "Arsip Inaktif", target: 95, bobot: 15, deskripsi: "Penataan daftar dan boks arsip inaktif" },
    { id: 3, indikator: "Layanan Peminjaman", target: 95, bobot: 10, deskripsi: "Ketepatan waktu dan kepuasan peminjaman arsip" },
    { id: 4, indikator: "Pengembalian Arsip", target: 98, bobot: 10, deskripsi: "Kepatuhan pengembalian arsip sesuai batas waktu" },
    { id: 5, indikator: "Pemindahan Arsip", target: 95, bobot: 10, deskripsi: "Pemindahan arsip inaktif dari unit pengolah" },
    { id: 6, indikator: "Pemberkasan Arsip", target: 95, bobot: 10, deskripsi: "Pemberkasan sesuai klasifikasi pola kearsipan" },
    { id: 7, indikator: "Usul Serah", target: 100, bobot: 10, deskripsi: "Ketepatan usul serah arsip statis ke ANRI / Pusat" },
    { id: 8, indikator: "Usul Musnah", target: 100, bobot: 10, deskripsi: "Penyusunan daftar dan persetujuan pemusnahan" },
    { id: 9, indikator: "Monitoring Pelaporan", target: 100, bobot: 5, deskripsi: "Kepatuhan pengiriman laporan bulanan tepat waktu" },
    { id: 10, indikator: "Pemeliharaan Arsip", target: 95, bobot: 5, deskripsi: "Fumigasi, suhu, kelembaban dan kebersihan rak arsip" }
  ],
  REKAP_GEDUNG: [
    { gedung: "Gedung Arsip Pusat", aktif: 95, inaktif: 92, pinjam: 97, kelola: 93, status: "Sangat Baik" },
    { gedung: "Gedung Arsip Barat", aktif: 90, inaktif: 87, pinjam: 93, kelola: 88, status: "Baik" },
    { gedung: "Gedung Arsip Timur", aktif: 93, inaktif: 90, pinjam: 95, kelola: 91, status: "Sangat Baik" },
    { gedung: "Gedung Arsip Selatan", aktif: 88, inaktif: 84, pinjam: 90, kelola: 86, status: "Cukup" },
    { gedung: "Gedung Arsip Utara", aktif: 92, inaktif: 89, pinjam: 94, kelola: 90, status: "Baik" }
  ],
  STOK_ARSIP: [
    { id: 1, gedung: "Gedung Arsip Pusat", bulan: "2026-10", kategori: "Arsip Aktif", jumlah: 2850, satuan: "Box", lokasi: "Ruang A - Rak 01 s/d 12", kondisi: "Baik" },
    { id: 2, gedung: "Gedung Arsip Pusat", bulan: "2026-10", kategori: "Arsip Inaktif", jumlah: 2400, satuan: "Box", lokasi: "Ruang B - Rak Inaktif", kondisi: "Baik" },
    { id: 3, gedung: "Gedung Arsip Pusat", bulan: "2026-10", kategori: "Arsip Vital", jumlah: 550, satuan: "Folder", lokasi: "Lemari Tahan Api Brankas 1", kondisi: "Baik" },
    { id: 4, gedung: "Gedung Arsip Barat", bulan: "2026-10", kategori: "Arsip Aktif", jumlah: 1100, satuan: "Box", lokasi: "Lantai 1 - Rak 1 s/d 5", kondisi: "Baik" },
    { id: 5, gedung: "Gedung Arsip Barat", bulan: "2026-10", kategori: "Arsip Inaktif", jumlah: 920, satuan: "Box", lokasi: "Lantai 1 - Rak 6 s/d 9", kondisi: "Perlu Pembersihan" },
    { id: 6, gedung: "Gedung Arsip Timur", bulan: "2026-10", kategori: "Arsip Aktif", jumlah: 1200, satuan: "Box", lokasi: "Depo Timur - Zona 1", kondisi: "Baik" },
    { id: 7, gedung: "Gedung Arsip Timur", bulan: "2026-10", kategori: "Arsip Inaktif", jumlah: 980, satuan: "Box", lokasi: "Depo Timur - Zona 2", kondisi: "Baik" },
    { id: 8, gedung: "Gedung Arsip Selatan", bulan: "2026-10", kategori: "Arsip Aktif", jumlah: 980, satuan: "Box", lokasi: "Ruang Arsip Lt. 2", kondisi: "Baik" },
    { id: 9, gedung: "Gedung Arsip Utara", bulan: "2026-10", kategori: "Arsip Aktif", jumlah: 1100, satuan: "Box", lokasi: "Gudang Arsip Utara", kondisi: "Baik" }
  ],
  RENCANA_MUSNAH: [
    { id: 1, gedung: "Gedung Arsip Pusat", jenis: "Arsip Dinamis Keuangan (SP2D Lama)", kurun: "2010 - 2015", jra: "JRA Keuangan > 10 Tahun", target: 1200, bulan: "Oktober", status: "Selesai", realisasi: 1200 },
    { id: 2, gedung: "Gedung Arsip Pusat", jenis: "Arsip Kepegawaian (SK Pensiun Salinan)", kurun: "2008 - 2014", jra: "JRA Kepegawaian Non-Hakiki", target: 850, bulan: "Oktober", status: "Dalam Proses", realisasi: 650 },
    { id: 3, gedung: "Gedung Arsip Barat", jenis: "Arsip Fasilitatif / Surat Tugas", kurun: "2018 - 2021", jra: "JRA Umum Retensi 3 Tahun", target: 300, bulan: "Oktober", status: "Selesai", realisasi: 300 },
    { id: 4, gedung: "Gedung Arsip Timur", jenis: "Surat Masuk & Nota Dinas Rutin", kurun: "2019 - 2022", jra: "JRA Fasilitatif Retensi 2 Tahun", target: 500, bulan: "November", status: "Rencana", realisasi: 0 },
    { id: 5, gedung: "Gedung Arsip Selatan", jenis: "Draft Dokumen Lelang Gugur", kurun: "2017 - 2020", jra: "JRA Pengadaan Habis Masa", target: 450, bulan: "Desember", status: "Rencana", realisasi: 0 }
  ],
  TREND_MONTHLY: {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"],
    aktif: [88, 89, 90, 92, 93, 94, 95, 94, 96, 95, 96, 97],
    inaktif: [84, 85, 85, 87, 88, 89, 90, 89, 91, 90, 92, 93],
    pinjam: [91, 92, 93, 94, 95, 96, 96, 95, 97, 98, 97, 98],
    kelola: [86, 87, 88, 89, 90, 91, 92, 90, 92, 93, 93, 94]
  },
  REALISASI_MUSNAH_PER_BULAN: {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"],
    target: [1000, 1200, 1500, 1800, 2000, 2200, 2100, 2300, 2000, 2350, 2200, 2400],
    realisasi: [950, 1100, 1450, 1750, 1980, 2150, 2050, 2280, 1950, 2350, 0, 0]
  }
};

// State Storage
let appData = {};

function initStorage() {
  const saved = localStorage.getItem("pu_kearsipan_db");
  if (saved) {
    try {
      appData = JSON.parse(saved);
    } catch (e) {
      appData = JSON.parse(JSON.stringify(defaultData));
    }
  } else {
    appData = JSON.parse(JSON.stringify(defaultData));
    saveStorage();
  }
}

function saveStorage() {
  localStorage.setItem("pu_kearsipan_db", JSON.stringify(appData));
}

function resetDataDefault() {
  if (confirm("Reset seluruh data ke kondisi awal template?")) {
    appData = JSON.parse(JSON.stringify(defaultData));
    saveStorage();
    location.reload();
  }
}

// Chart Instances
let chartInstances = {};

// ==================== INITIALIZATION ====================
document.addEventListener("DOMContentLoaded", () => {
  initStorage();
  renderRekapGedungTable();
  render10KPICards();
  renderStokTable();
  renderMusnahTable();
  renderDbTable("MASTER_GEDUNG");
  renderSDMTargetTable();
  renderRencana5Tahun();
  initCharts();
});

// ==================== NAVIGATION / TABS ====================
function switchTab(tabId) {
  // Hide all sections
  document.querySelectorAll(".tab-content").forEach(el => el.classList.add("hidden"));
  // Remove active from nav items
  document.querySelectorAll(".nav-item").forEach(btn => btn.classList.remove("active"));

  // Show selected tab
  const targetSection = document.getElementById(`tab-${tabId}`);
  if (targetSection) {
    targetSection.classList.remove("hidden");
  }

  // Set active nav
  const activeNav = document.getElementById(`nav-${tabId}`);
  if (activeNav) {
    activeNav.classList.add("active");
  }

  // Update Top Bar Title & Rail Vertical Label
  const titles = {
    beranda: "Logger Studio - Capaian KPI Kearsipan",
    kpi: "Menu 02 — KPI Kearsipan (10 Indikator Standar)",
    stok: "Menu 03 — Stok Pengelolaan Arsip di Seluruh Gedung",
    musnah: "Menu 04 — Rencana & Realisasi Pemusnahan Arsip",
    "input-data": "Menu Input Data — Petugas Gedung Arsip",
    laporan: "Menu 05 — Laporan Eksekutif & Tindak Lanjut Pimpinan",
    database: "Struktur Database Pusat — Google Sheets Format",
    "sdm-target": "Penentuan SDM Gedung & Konversi Target Kerja Berjenjang",
    "anri-rekap": "Rekap Semesteran (6 Bulan), Laporan ANRI & Rencana 5 Tahun"
  };
  if (titles[tabId]) {
    document.getElementById("topBarTitle").textContent = titles[tabId];
  }

  const railLabels = {
    beranda: "BERANDA",
    kpi: "KPI ARSIP",
    stok: "STOK ARSIP",
    musnah: "PEMUSNAHAN",
    "input-data": "INPUT DATA",
    laporan: "LAPORAN",
    database: "DATABASE",
    "sdm-target": "SDM & TARGET",
    "anri-rekap": "REKAP ANRI"
  };
  const railEl = document.getElementById("railActiveLabel");
  if (railEl && railLabels[tabId]) {
    railEl.textContent = railLabels[tabId];
  }
}

function toggleSidebar() {
  const sidebar = document.getElementById("appSidebar");
  if (sidebar) {
    sidebar.classList.toggle("collapsed");
  }
}

function filterSidebarMenu(query) {
  const q = query.trim().toLowerCase();
  document.querySelectorAll("#appSidebar .nav-item[data-label]").forEach(btn => {
    const label = (btn.getAttribute("data-label") || btn.textContent).toLowerCase();
    btn.classList.toggle("hidden", q !== "" && !label.includes(q));
  });
}

document.addEventListener("keydown", e => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
    const searchInput = document.getElementById("sidebarSearchInput");
    if (searchInput) {
      e.preventDefault();
      const sidebar = document.getElementById("appSidebar");
      if (sidebar && sidebar.classList.contains("collapsed")) {
        sidebar.classList.remove("collapsed");
      }
      searchInput.focus();
    }
  }
});

// ==================== MODAL CONTROLS ====================
function openModal(id) {
  document.getElementById(id).classList.remove("hidden");
}

function closeModal(id) {
  document.getElementById(id).classList.add("hidden");
}

// ==================== CHARTS INITIALIZATION & ANIMATION ====================
function initCharts() {
  // Animasi progressive drawing untuk diagram garis tren (seperti digambar dari titik awal ke akhir)
  const totalDuration = 2200;
  const delayBetweenPoints = totalDuration / 12;
  const previousY = (ctx) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(70) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;
  
  const progressiveLineAnimation = {
    x: {
      type: 'number',
      easing: 'easeInOutQuart',
      duration: delayBetweenPoints,
      from: NaN, // skip initial
      delay(ctx) {
        if (ctx.type !== 'data' || ctx.xStarted) {
          return 0;
        }
        ctx.xStarted = true;
        return ctx.index * delayBetweenPoints;
      }
    },
    y: {
      type: 'number',
      easing: 'easeInOutQuart',
      duration: delayBetweenPoints,
      from: previousY,
      delay(ctx) {
        if (ctx.type !== 'data' || ctx.yStarted) {
          return 0;
        }
        ctx.yStarted = true;
        return ctx.index * delayBetweenPoints;
      }
    }
  };

  // 1. Chart Tren Capaian KPI (Line Chart)
  const ctxTrend = document.getElementById("trendKPIChart");
  if (ctxTrend) {
    if (chartInstances.trend) chartInstances.trend.destroy();
    chartInstances.trend = new Chart(ctxTrend, {
      type: "line",
      data: {
        labels: appData.TREND_MONTHLY.labels,
        datasets: [
          {
            label: "Arsip Aktif",
            data: appData.TREND_MONTHLY.aktif,
            borderColor: "#2563eb",
            backgroundColor: "rgba(37, 99, 235, 0.12)",
            tension: 0.35,
            borderWidth: 2.5,
            pointRadius: 4,
            pointHoverRadius: 6,
            fill: true
          },
          {
            label: "Arsip Inaktif",
            data: appData.TREND_MONTHLY.inaktif,
            borderColor: "#10b981",
            backgroundColor: "rgba(16, 185, 129, 0.1)",
            tension: 0.35,
            borderWidth: 2.5,
            pointRadius: 4,
            pointHoverRadius: 6,
            fill: false
          },
          {
            label: "Layanan Peminjaman",
            data: appData.TREND_MONTHLY.pinjam,
            borderColor: "#f59e0b",
            backgroundColor: "rgba(245, 158, 11, 0.1)",
            tension: 0.35,
            borderWidth: 2.5,
            pointRadius: 4,
            pointHoverRadius: 6,
            fill: false
          },
          {
            label: "Pengelolaan Arsip",
            data: appData.TREND_MONTHLY.kelola,
            borderColor: "#8b5cf6",
            backgroundColor: "rgba(139, 92, 246, 0.1)",
            tension: 0.35,
            borderWidth: 2.5,
            pointRadius: 4,
            pointHoverRadius: 6,
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: progressiveLineAnimation,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (context) => ` ${context.dataset.label}: ${context.raw}%`
            }
          }
        },
        scales: {
          y: {
            min: 70,
            max: 100,
            ticks: {
              callback: (val) => val + "%",
              stepSize: 5,
              font: { size: 10 }
            },
            grid: { color: "#f1f5f9" }
          },
          x: {
            grid: { display: false },
            ticks: { font: { size: 10 } }
          }
        }
      }
    });
  }

  // 2. Chart Komposisi Stok Arsip (Donut) - Efek berputar melingkar & membesar
  const ctxStok = document.getElementById("komposisiStokChart");
  if (ctxStok) {
    if (chartInstances.stok) chartInstances.stok.destroy();
    chartInstances.stok = new Chart(ctxStok, {
      type: "doughnut",
      data: {
        labels: ["Arsip Aktif (50%)", "Arsip Inaktif (41%)", "Arsip Vital (9%)"],
        datasets: [{
          data: [6230, 5120, 1100],
          backgroundColor: ["#3b82f6", "#10b981", "#f59e0b"],
          borderWidth: 2,
          borderColor: "#ffffff"
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "70%",
        animation: {
          animateRotate: true,
          animateScale: true,
          duration: 2000,
          easing: "easeOutCirc"
        },
        plugins: {
          legend: {
            position: "bottom",
            labels: { boxWidth: 10, font: { size: 9 } }
          }
        }
      }
    });
  }

  // 3. Status Pemusnahan YTD (Donut)
  const ctxStatusMusnah = document.getElementById("statusMusnahChart");
  if (ctxStatusMusnah) {
    if (chartInstances.statusMusnah) chartInstances.statusMusnah.destroy();
    chartInstances.statusMusnah = new Chart(ctxStatusMusnah, {
      type: "doughnut",
      data: {
        labels: ["Telah Dimusnahkan (1.850)", "Dalam Proses (500)", "Rencana (2.350)"],
        datasets: [{
          data: [1850, 500, 2350],
          backgroundColor: ["#2563eb", "#38bdf8", "#f97316"],
          borderWidth: 2,
          borderColor: "#ffffff"
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "65%",
        animation: {
          animateRotate: true,
          animateScale: true,
          duration: 2200,
          easing: "easeOutCubic"
        },
        plugins: {
          legend: {
            position: "bottom",
            labels: { boxWidth: 10, font: { size: 9 } }
          }
        }
      }
    });
  }

  // 4. Realisasi Pemusnahan per Bulan (Bar Chart) - Efek batang tumbuh satu per satu dari bawah
  const ctxRealisasiBar = document.getElementById("realisasiMusnahBarChart");
  if (ctxRealisasiBar) {
    if (chartInstances.realisasiBar) chartInstances.realisasiBar.destroy();
    chartInstances.realisasiBar = new Chart(ctxRealisasiBar, {
      type: "bar",
      data: {
        labels: appData.REALISASI_MUSNAH_PER_BULAN.labels,
        datasets: [
          {
            label: "Realisasi (Box)",
            data: appData.REALISASI_MUSNAH_PER_BULAN.realisasi,
            backgroundColor: "#2563eb",
            borderRadius: 4
          },
          {
            type: "line",
            label: "Target Rencana (Box)",
            data: appData.REALISASI_MUSNAH_PER_BULAN.target,
            borderColor: "#f59e0b",
            borderWidth: 2,
            borderDash: [5, 5],
            pointRadius: 3,
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animations: {
          y: {
            easing: 'easeInOutCubic',
            duration: 1800,
            from: (ctx) => {
              if (ctx.type === 'data') {
                return ctx.chart.scales.y.getPixelForValue(0);
              }
            },
            delay(ctx) {
              if (ctx.type !== 'data') return 0;
              return ctx.index * 100;
            }
          }
        },
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: { font: { size: 10 } },
            grid: { color: "#f1f5f9" }
          },
          x: {
            grid: { display: false },
            ticks: { font: { size: 10 } }
          }
        }
      }
    });
  }
}

// Fungsi untuk memainkan ulang animasi diagram kapan saja
function replayChartAnimations() {
  initCharts();
}

// ==================== RENDERING TABLES & VIEWS ====================

// Rekap Tabel Gedung pada Beranda
function renderRekapGedungTable() {
  const tbody = document.getElementById("rekapGedungTableBody");
  if (!tbody) return;

  tbody.innerHTML = appData.REKAP_GEDUNG.map(row => {
    let badgeColor = "bg-emerald-50 text-emerald-700 border-emerald-200";
    if (row.status === "Baik") badgeColor = "bg-blue-50 text-blue-700 border-blue-200";
    if (row.status === "Cukup") badgeColor = "bg-amber-50 text-amber-700 border-amber-200";

    return `
      <tr class="hover:bg-slate-50 transition">
        <td class="py-2.5 px-3 font-semibold text-slate-800">${row.gedung}</td>
        <td class="py-2.5 px-3 text-center text-slate-700">${row.aktif}%</td>
        <td class="py-2.5 px-3 text-center text-slate-700">${row.inaktif}%</td>
        <td class="py-2.5 px-3 text-center text-slate-700">${row.pinjam}%</td>
        <td class="py-2.5 px-3 text-center text-slate-700">${row.kelola}%</td>
        <td class="py-2.5 px-3 text-center">
          <span class="px-2 py-0.5 rounded-full text-[10px] font-bold border ${badgeColor}">
            ${row.status}
          </span>
        </td>
      </tr>
    `;
  }).join("");
}

// 10 Indikator KPI Cards & Detail Table
function render10KPICards() {
  const container = document.getElementById("kpi10CardsContainer");
  const detailTable = document.getElementById("tableDetail10KPI");
  if (!container || !detailTable) return;

  // Render Cards
  container.innerHTML = appData.MASTER_KPI.map(kpi => {
    return `
      <div class="bg-slate-50 border border-slate-200 rounded-lg p-3 hover:border-blue-400 transition">
        <div class="text-[10px] font-semibold text-slate-400 uppercase">Indikator ${kpi.id}</div>
        <div class="text-xs font-bold text-slate-800 mt-1 truncate" title="${kpi.indikator}">${kpi.indikator}</div>
        <div class="flex items-baseline justify-between mt-2 pt-2 border-t border-slate-200">
          <span class="text-xs text-slate-500">Target</span>
          <span class="text-sm font-extrabold text-blue-600">&ge; ${kpi.target}%</span>
        </div>
      </div>
    `;
  }).join("");

  // Sample static detail values for 10 KPI per gedung
  const sampleValues = [
    { p: 95, b: 90, t: 93, s: 88, u: 92 },
    { p: 92, b: 87, t: 90, s: 84, u: 89 },
    { p: 97, b: 93, t: 95, s: 90, u: 94 },
    { p: 98, b: 97, t: 98, s: 95, u: 98 },
    { p: 96, b: 94, t: 95, s: 92, u: 95 },
    { p: 95, b: 92, t: 94, s: 91, u: 93 },
    { p: 100, b: 100, t: 100, s: 100, u: 100 },
    { p: 100, b: 100, t: 100, s: 100, u: 100 },
    { p: 100, b: 100, t: 100, s: 80, u: 100 },
    { p: 96, b: 95, t: 95, s: 94, u: 95 }
  ];

  detailTable.innerHTML = appData.MASTER_KPI.map((kpi, idx) => {
    const val = sampleValues[idx] || { p: 95, b: 92, t: 94, s: 90, u: 93 };
    const avg = ((val.p + val.b + val.t + val.s + val.u) / 5).toFixed(1);
    const pass = avg >= kpi.target;

    return `
      <tr class="hover:bg-slate-50">
        <td class="py-2.5 px-3 font-medium text-slate-800">
          ${kpi.id}. ${kpi.indikator}
        </td>
        <td class="py-2.5 px-3 text-center font-bold text-slate-600">&ge; ${kpi.target}%</td>
        <td class="py-2.5 px-3 text-center text-slate-700">${val.p}%</td>
        <td class="py-2.5 px-3 text-center text-slate-700">${val.b}%</td>
        <td class="py-2.5 px-3 text-center text-slate-700">${val.t}%</td>
        <td class="py-2.5 px-3 text-center text-slate-700">${val.s}%</td>
        <td class="py-2.5 px-3 text-center text-slate-700">${val.u}%</td>
        <td class="py-2.5 px-3 text-center font-bold text-blue-700">${avg}%</td>
        <td class="py-2.5 px-3 text-center">
          <span class="px-2 py-0.5 rounded text-[10px] font-bold ${pass ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}">
            ${pass ? 'Tercapai' : 'Belum'}
          </span>
        </td>
      </tr>
    `;
  }).join("");
}

// Tabel Stok Arsip
function renderStokTable() {
  const tbody = document.getElementById("tableStokArsipBody");
  if (!tbody) return;

  tbody.innerHTML = appData.STOK_ARSIP.map(item => {
    return `
      <tr class="hover:bg-slate-50">
        <td class="py-2.5 px-3 font-semibold text-slate-800">${item.gedung}</td>
        <td class="py-2.5 px-3 text-slate-600 font-mono text-[11px]">${item.bulan}</td>
        <td class="py-2.5 px-3 font-medium text-slate-700">${item.kategori}</td>
        <td class="py-2.5 px-3 text-right font-bold text-slate-800">${item.jumlah.toLocaleString('id-ID')}</td>
        <td class="py-2.5 px-3 text-slate-600">${item.satuan}</td>
        <td class="py-2.5 px-3 text-slate-600">${item.lokasi}</td>
        <td class="py-2.5 px-3">
          <span class="px-2 py-0.5 rounded text-[10px] font-medium ${item.kondisi === 'Baik' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-amber-50 text-amber-700 border border-amber-200'}">
            ${item.kondisi}
          </span>
        </td>
        <td class="py-2.5 px-3 text-center">
          <button onclick="deleteStokItem(${item.id})" class="text-rose-500 hover:text-rose-700">
            <i class="fa-regular fa-trash-can"></i>
          </button>
        </td>
      </tr>
    `;
  }).join("");
}

// Tabel Rencana Pemusnahan
function renderMusnahTable() {
  const tbody = document.getElementById("tableRencanaMusnahBody");
  if (!tbody) return;

  tbody.innerHTML = appData.RENCANA_MUSNAH.map(item => {
    let statusBadge = "bg-slate-100 text-slate-700";
    if (item.status === "Selesai") statusBadge = "bg-emerald-100 text-emerald-800";
    if (item.status === "Dalam Proses") statusBadge = "bg-sky-100 text-sky-800";
    if (item.status === "Rencana") statusBadge = "bg-amber-100 text-amber-800";

    return `
      <tr class="hover:bg-slate-50">
        <td class="py-2.5 px-3 font-semibold text-slate-800">${item.gedung}</td>
        <td class="py-2.5 px-3 font-medium text-slate-700">${item.jenis}</td>
        <td class="py-2.5 px-3 text-slate-600">${item.kurun}</td>
        <td class="py-2.5 px-3 text-slate-600 italic">${item.jra}</td>
        <td class="py-2.5 px-3 text-right font-bold text-slate-800">${item.target.toLocaleString('id-ID')} Box</td>
        <td class="py-2.5 px-3 text-slate-700 font-semibold">${item.bulan}</td>
        <td class="py-2.5 px-3 text-center">
          <span class="px-2 py-0.5 rounded text-[10px] font-bold ${statusBadge}">
            ${item.status}
          </span>
        </td>
        <td class="py-2.5 px-3 text-right font-bold text-blue-700">${item.realisasi.toLocaleString('id-ID')} Box</td>
        <td class="py-2.5 px-3 text-center">
          <button onclick="deleteMusnahItem(${item.id})" class="text-rose-500 hover:text-rose-700">
            <i class="fa-regular fa-trash-can"></i>
          </button>
        </td>
      </tr>
    `;
  }).join("");
}

// ==================== DATABASE SHEETS VIEWER ====================
function switchDbTable(tableName) {
  // Update button active
  document.querySelectorAll(".db-tab-btn").forEach(btn => {
    btn.classList.remove("bg-white", "text-slate-800", "shadow-sm");
    btn.classList.add("text-slate-600");
  });
  const activeBtn = document.getElementById(`btn-db-${tableName}`);
  if (activeBtn) {
    activeBtn.classList.add("bg-white", "text-slate-800", "shadow-sm");
    activeBtn.classList.remove("text-slate-600");
  }

  renderDbTable(tableName);
}

function renderDbTable(tableName) {
  const table = document.getElementById("tableDatabaseView");
  if (!table) return;

  const data = appData[tableName] || [];
  if (data.length === 0) {
    table.innerHTML = `<tr><td class="p-4 text-center text-slate-400">Tidak ada data di tabel ${tableName}</td></tr>`;
    return;
  }

  const headers = Object.keys(data[0]);
  
  let headerHtml = `<thead class="bg-slate-100 text-slate-700 uppercase font-semibold border-b border-slate-200"><tr>`;
  headers.forEach(h => {
    headerHtml += `<th class="py-2.5 px-3">${h}</th>`;
  });
  headerHtml += `</tr></thead>`;

  let bodyHtml = `<tbody class="divide-y divide-slate-100">`;
  data.forEach(row => {
    bodyHtml += `<tr class="hover:bg-slate-50">`;
    headers.forEach(h => {
      bodyHtml += `<td class="py-2 px-3 text-slate-700 font-mono text-[11px]">${row[h] !== undefined ? row[h] : ''}</td>`;
    });
    bodyHtml += `</tr>`;
  });
  bodyHtml += `</tbody>`;

  table.innerHTML = headerHtml + bodyHtml;
}

// ==================== FORM INPUT PETUGAS ====================
function handleFormInput(e) {
  e.preventDefault();

  const gedung = document.getElementById("inputGedungSelect").value;
  const bulan = document.getElementById("inputBulanTahun").value;
  const petugas = document.getElementById("inputNamaPetugas").value;
  const linkBukti = document.getElementById("inputLinkBukti").value;

  const kpiAktif = parseInt(document.getElementById("inputKpiAktif").value) || 0;
  const kpiInaktif = parseInt(document.getElementById("inputKpiInaktif").value) || 0;
  const kpiPinjam = parseInt(document.getElementById("inputKpiPinjam").value) || 0;
  const kpiKelola = 92; // Rata-rata komposit

  // Masukkan ke log input DB
  if (!appData.INPUT_KPI) appData.INPUT_KPI = [];
  appData.INPUT_KPI.unshift({
    id: Date.now(),
    tanggal: new Date().toISOString().split("T")[0],
    gedung: `Gedung Arsip ${gedung}`,
    indikator: "Lengkap (10 Indikator)",
    realisasi: `${kpiAktif}%`,
    target: "95%",
    petugas: petugas,
    bukti: linkBukti
  });

  // Update rekap gedung terkait
  const targetGedung = appData.REKAP_GEDUNG.find(g => g.gedung.includes(gedung));
  if (targetGedung) {
    targetGedung.aktif = kpiAktif;
    targetGedung.inaktif = kpiInaktif;
    targetGedung.pinjam = kpiPinjam;
    targetGedung.kelola = kpiKelola;
    targetGedung.status = kpiAktif >= 95 ? "Sangat Baik" : (kpiAktif >= 90 ? "Baik" : "Cukup");
  }

  saveStorage();
  renderRekapGedungTable();
  alert(`Data berhasil disimpan ke Database Pusat!\n\nPetugas: ${petugas}\nGedung: ${gedung}\nBulan: ${bulan}\nBukti Dukung: ${linkBukti}\n\nDashboard otomatis diperbarui.`);
  switchTab("beranda");
}

// ==================== CRUD & ACTIONS ====================
function deleteStokItem(id) {
  if (confirm("Hapus baris stok ini?")) {
    appData.STOK_ARSIP = appData.STOK_ARSIP.filter(item => item.id !== id);
    saveStorage();
    renderStokTable();
  }
}

function deleteMusnahItem(id) {
  if (confirm("Hapus usul rencana pemusnahan ini?")) {
    appData.RENCANA_MUSNAH = appData.RENCANA_MUSNAH.filter(item => item.id !== id);
    saveStorage();
    renderMusnahTable();
  }
}

function openModalTambahStok() {
  const gedung = prompt("Pilih Gedung Arsip (Pusat / Barat / Timur / Selatan / Utara):", "Pusat");
  if (!gedung) return;
  const kategori = prompt("Kategori Arsip (Arsip Aktif / Arsip Inaktif / Arsip Vital):", "Arsip Inaktif");
  const jumlah = parseInt(prompt("Jumlah Box / Folder:", "500")) || 500;
  const lokasi = prompt("Lokasi Penyimpanan / Nomor Rak:", "Ruang C - Rak 05");

  appData.STOK_ARSIP.push({
    id: Date.now(),
    gedung: `Gedung Arsip ${gedung}`,
    bulan: "2026-11",
    kategori: kategori,
    jumlah: jumlah,
    satuan: "Box",
    lokasi: lokasi,
    kondisi: "Baik"
  });
  saveStorage();
  renderStokTable();
}

function openModalTambahMusnah() {
  const gedung = prompt("Gedung Arsip:", "Pusat");
  if (!gedung) return;
  const jenis = prompt("Jenis Arsip yang Direncanakan Musnah:", "Arsip Laporan Harian Proyek");
  const target = parseInt(prompt("Volume Target (Box):", "400")) || 400;
  const bulan = prompt("Bulan Rencana (misal: November):", "November");

  appData.RENCANA_MUSNAH.push({
    id: Date.now(),
    gedung: `Gedung Arsip ${gedung}`,
    jenis: jenis,
    kurun: "2015 - 2018",
    jra: "JRA Teknis Pekerjaan Umum",
    target: target,
    bulan: bulan,
    status: "Rencana",
    realisasi: 0
  });
  saveStorage();
  renderMusnahTable();
}

// ==================== FILTERING & QUICK ACTIONS ====================
function applyFilters() {
  const periode = document.getElementById("filterPeriode").value;
  const gedung = document.getElementById("filterGedung").value;
  document.getElementById("currentPeriodLabel").textContent = `Tahun ${periode}`;

  if (gedung !== "SEMUA") {
    const item = appData.REKAP_GEDUNG.find(g => g.gedung.includes(gedung));
    if (item) {
      document.getElementById("kpiAktifVal").textContent = `${item.aktif}%`;
      document.getElementById("kpiInaktifVal").textContent = `${item.inaktif}%`;
      document.getElementById("kpiPinjamVal").textContent = `${item.pinjam}%`;
      document.getElementById("kpiKelolaVal").textContent = `${item.kelola}%`;
    }
  } else {
    document.getElementById("kpiAktifVal").textContent = "92%";
    document.getElementById("kpiInaktifVal").textContent = "88%";
    document.getElementById("kpiPinjamVal").textContent = "96%";
    document.getElementById("kpiKelolaVal").textContent = "90%";
  }
}

function updateQuickMusnah() {
  const bulan = document.getElementById("selectBulanMusnahQuick").value;
  const volEl = document.getElementById("quickMusnahVolume");
  if (bulan === "Oktober") {
    volEl.innerHTML = `2.350 <span class="text-xs font-normal text-slate-500">Box/Folder</span>`;
  } else if (bulan === "November") {
    volEl.innerHTML = `500 <span class="text-xs font-normal text-slate-500">Box/Folder</span>`;
  } else {
    volEl.innerHTML = `450 <span class="text-xs font-normal text-slate-500">Box/Folder</span>`;
  }
}

// ==================== EXPORT DATA ====================
function exportKPIToCSV() {
  let csvContent = "data:text/csv;charset=utf-8,ID,Indikator,Target,Bobot\n";
  appData.MASTER_KPI.forEach(row => {
    csvContent += `${row.id},"${row.indikator}",${row.target}%,${row.bobot}%\n`;
  });
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "master_kpi_bbws_cc.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function exportFullReportExcel() {
  let csvContent = "data:text/csv;charset=utf-8,Gedung Arsip,KPI Aktif (%),KPI Inaktif (%),KPI Peminjaman (%),KPI Pengelolaan (%),Status\n";
  appData.REKAP_GEDUNG.forEach(row => {
    csvContent += `"${row.gedung}",${row.aktif},${row.inaktif},${row.pinjam},${row.kelola},"${row.status}"\n`;
  });
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "rekap_kpi_kearsipan_2026.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}



// ==================== SDM & KONVERSI TARGET BERJENJANG ====================
const sdmGedungData = [
  { kode: "GD-PST", gedung: "Gedung Arsip Pusat", wilayah: "Pusat", sdm: 6, targetPerOrang: 20 },
  { kode: "GD-WLA", gedung: "Gedung Arsip Barat", wilayah: "Wilayah A", sdm: 4, targetPerOrang: 25 },
  { kode: "GD-WLB", gedung: "Gedung Arsip Timur", wilayah: "Wilayah B", sdm: 2, targetPerOrang: 25 },
  { kode: "GD-WLC", gedung: "Gedung Arsip Selatan", wilayah: "Wilayah C", sdm: 4, targetPerOrang: 50 },
  { kode: "GD-UTR", gedung: "Gedung Arsip Utara", wilayah: "Pusat Utara", sdm: 2, targetPerOrang: 20 }
];

function renderSDMTargetTable() {
  const tbody = document.getElementById("tableSDMTargetBody");
  if (!tbody) return;

  let totalSDM = 0;
  let totalTargetGedung = 0;

  tbody.innerHTML = sdmGedungData.map((row, idx) => {
    const targetGedung = row.sdm * row.targetPerOrang;
    const konversiPusat = targetGedung * 10; // 10 Indikator
    totalSDM += row.sdm;
    totalTargetGedung += targetGedung;

    return `
      <tr class="hover:bg-slate-50">
        <td class="py-2.5 px-3 font-semibold text-slate-800"><span class="font-mono text-indigo-600 mr-1">${row.kode}</span> ${row.gedung}</td>
        <td class="py-2.5 px-3 text-slate-600">${row.wilayah}</td>
        <td class="py-2.5 px-3 text-center">
          <input type="number" min="1" value="${row.sdm}" onchange="updateSDMRow(${idx}, 'sdm', this.value)" class="w-16 p-1 text-center border border-slate-300 rounded font-bold text-slate-800">
        </td>
        <td class="py-2.5 px-3 text-center">
          <input type="number" min="1" value="${row.targetPerOrang}" onchange="updateSDMRow(${idx}, 'targetPerOrang', this.value)" class="w-16 p-1 text-center border border-slate-300 rounded font-bold text-blue-700">
        </td>
        <td class="py-2.5 px-3 text-right font-bold text-emerald-700">${targetGedung.toLocaleString('id-ID')} Box/Bln</td>
        <td class="py-2.5 px-3 text-right font-bold text-indigo-700">${konversiPusat.toLocaleString('id-ID')} Unit (10 Indikator)</td>
      </tr>
    `;
  }).join("");

  const avgTarget = totalSDM > 0 ? Math.round(totalTargetGedung / totalSDM) : 0;
  const elGedung = document.getElementById("cardJumlahGedung");
  const elSDM = document.getElementById("cardTotalSDM");
  const elTargetOrg = document.getElementById("cardTargetPerOrang");
  const elTargetPusat = document.getElementById("cardTargetPusatTotal");
  const elCountG = document.getElementById("sdmTotalGedungCount");
  const elCountO = document.getElementById("sdmTotalOrangCount");

  if (elGedung) elGedung.textContent = `${sdmGedungData.length} Gedung`;
  if (elSDM) elSDM.textContent = `${totalSDM} Orang`;
  if (elTargetOrg) elTargetOrg.textContent = `${avgTarget} Box/Bln`;
  if (elTargetPusat) elTargetPusat.textContent = `${totalTargetGedung.toLocaleString('id-ID')} Box/Bln`;
  if (elCountG) elCountG.textContent = sdmGedungData.length;
  if (elCountO) elCountO.textContent = totalSDM;
}

function updateSDMRow(idx, field, val) {
  const num = parseInt(val, 10);
  if (!isNaN(num) && num >= 1) {
    sdmGedungData[idx][field] = num;
    renderSDMTargetTable();
  }
}

// ==================== RENCANA PENYUSUTAN / PEMUSNAHAN 5 TAHUN ====================
const rencana5TahunData = [
  { tahun: "2026", program: "Penyusutan Arsip Keuangan & UPB I 2026", cakupan: "Wilayah A, B, C & Pusat", volume: 2350, status: "Berjalan" },
  { tahun: "2027", program: "Pemindahan Arsip Inaktif Proyek 2018-2022", cakupan: "Gedung Barat & Timur", volume: 2800, status: "Direncanakan" },
  { tahun: "2028", program: "Pemusnahan Arsip Fasilitatif & Kepegawaian", cakupan: "Seluruh Gedung (5 Gedung)", volume: 3100, status: "Direncanakan" },
  { tahun: "2029", program: "Usul Serah Arsip Statis ke ANRI Pusat", cakupan: "Pusat & Wilayah A", volume: 1500, status: "Direncanakan" },
  { tahun: "2030", program: "Evaluasi & Pemusnahan Siklus 5 Tahunan", cakupan: "Seluruh Gedung (5 Gedung)", volume: 3500, status: "Direncanakan" }
];

function renderRencana5Tahun() {
  const tbody = document.getElementById("tableRencana5TahunBody");
  if (!tbody) return;

  tbody.innerHTML = rencana5TahunData.map(item => `
    <tr class="hover:bg-slate-50">
      <td class="py-2.5 px-3 font-mono font-bold text-indigo-700">${item.tahun}</td>
      <td class="py-2.5 px-3 font-semibold text-slate-800">${item.program}</td>
      <td class="py-2.5 px-3 text-slate-600">${item.cakupan}</td>
      <td class="py-2.5 px-3 text-right font-bold text-slate-800">${item.volume.toLocaleString('id-ID')} Box</td>
      <td class="py-2.5 px-3 text-center">
        <span class="px-2 py-0.5 rounded text-[10px] font-bold ${item.status === 'Berjalan' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-700'}">
          ${item.status}
        </span>
      </td>
    </tr>
  `).join("");
}


// ==================== HAK AKSES: ADMIN PUSAT VS ADMIN 9 GEDUNG ====================
let currentAdminRole = "PUSAT";

function switchAdminRole(role) {
  currentAdminRole = role;
  const isPusat = role === "PUSAT";

  // Sembunyikan/tampilkan menu pengelolaan sesuai hak akses
  const adminOnlyNavs = ["nav-beranda", "nav-kpi", "nav-stok", "nav-musnah", "nav-laporan", "nav-sdm-target", "nav-anri-rekap", "nav-database"];
  adminOnlyNavs.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      if (isPusat) {
        el.classList.remove("hidden");
      } else {
        el.classList.add("hidden");
      }
    }
  });

  // Update label user di sidebar
  const userLabel = document.getElementById("userRoleName");
  if (userLabel) {
    userLabel.textContent = isPusat ? "Admin Pusat (Kelola)" : `Admin ${role} (Input)`;
  }

  // Jika Admin Gedung, paksa ke halaman Input Data & kunci pilihan gedungnya
  const inputGedungSelect = document.getElementById("inputGedungSelect");
  if (!isPusat) {
    switchTab("input-data");
    if (inputGedungSelect) {
      inputGedungSelect.value = role;
      inputGedungSelect.disabled = true;
    }
  } else {
    if (inputGedungSelect) {
      inputGedungSelect.disabled = false;
    }
    switchTab("beranda");
  }
}

// Perbarui data SDM agar mencakup 9 Gedung Arsip
if (typeof sdmGedungData !== "undefined") {
  sdmGedungData.length = 0;
  sdmGedungData.push(
    { kode: "GD-01", gedung: "Gedung Arsip Pusat", wilayah: "Pusat", sdm: 6, targetPerOrang: 20 },
    { kode: "GD-02", gedung: "Gedung Arsip 2 (Barat)", wilayah: "Wilayah A", sdm: 4, targetPerOrang: 25 },
    { kode: "GD-03", gedung: "Gedung Arsip 3 (Timur)", wilayah: "Wilayah B", sdm: 2, targetPerOrang: 25 },
    { kode: "GD-04", gedung: "Gedung Arsip 4 (Selatan)", wilayah: "Wilayah C", sdm: 4, targetPerOrang: 50 },
    { kode: "GD-05", gedung: "Gedung Arsip 5 (Utara)", wilayah: "Wilayah Utara", sdm: 2, targetPerOrang: 20 },
    { kode: "GD-06", gedung: "Gedung Arsip 6 (Cirebon)", wilayah: "Wilayah Cirebon", sdm: 3, targetPerOrang: 25 },
    { kode: "GD-07", gedung: "Gedung Arsip 7 (Indramayu)", wilayah: "Wilayah Indramayu", sdm: 3, targetPerOrang: 25 },
    { kode: "GD-08", gedung: "Gedung Arsip 8 (Kuningan)", wilayah: "Wilayah Kuningan", sdm: 2, targetPerOrang: 20 },
    { kode: "GD-09", gedung: "Gedung Arsip 9 (Majalengka)", wilayah: "Wilayah Majalengka", sdm: 2, targetPerOrang: 20 }
  );
  if (typeof renderSDMTargetTable === "function") {
    renderSDMTargetTable();
  }
}


// ==================== LOGIN & LOGOUT ADMIN ====================
function handleLogin(e) {
  e.preventDefault();
  const role = document.getElementById("loginRoleSelect").value;
  const pass = document.getElementById("loginPassword").value;

  if (pass !== "pu2026") {
    alert("Password salah! Gunakan password default: pu2026");
    return;
  }

  const overlay = document.getElementById("loginOverlay");
  if (overlay) overlay.classList.add("hidden");

  const roleSwitcher = document.getElementById("roleSwitcher");
  if (roleSwitcher) {
    roleSwitcher.value = role;
    // Kunci roleSwitcher jika bukan Admin Pusat
    roleSwitcher.disabled = (role !== "PUSAT");
  }

  switchAdminRole(role);
}

function logoutAdmin() {
  const overlay = document.getElementById("loginOverlay");
  if (overlay) overlay.classList.remove("hidden");
}
