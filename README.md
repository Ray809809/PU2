# Logger Studio - Sistem Kearsipan BBWS Cimanuk Cisanggarung
**Kementerian Pekerjaan Umum (Kementerian PU)**

Aplikasi Dashboard & Pengelolaan Kearsipan berbasis Web yang dibangun persis sesuai arsitektur, alur kerja, dan desain visual pada dokumen referensi.

---

## 🏛️ Fitur dan Struktur Menu

Sesuai struktur pada gambar referensi:

1. **01 — Beranda (Dashboard Utama)**
   - **4 Kartu KPI Utama**: Arsip Aktif (92%), Arsip Inaktif (88%), Layanan Peminjaman (96%), Pengelolaan Arsip (90%).
   - **Tren Capaian KPI Kearsipan (Periode 1 Tahun)**: Grafik multi-line chart (Januari – Desember) interaktif menggunakan Chart.js.
   - **Rekap Capaian KPI per Gedung Arsip**: Tabel status untuk Gedung Arsip Pusat, Barat, Timur, Selatan, dan Utara.
   - **Stok Pengelolaan Arsip di Gudang**: Total box/folder tersimpan (12.450), pembagian kategori Aktif (50%), Inaktif (41%), Vital (9%), dilengkapi grafik Donut.
   - **Rencana Pemusnahan Arsip**: Volume arsip, rincian jenis (Dinamis, Kepegawaian, Lainnya), dan donat status proses (Telah Dimusnahkan, Dalam Proses, Rencana).
   - **Realisasi Pemusnahan per Bulan**: Grafik batang (Bar & Target Line) Jan – Des.
   - **Bagan Alur Kerja Sistem Logger Studio**: Tampilan 5 langkah alur kerja terintegrasi.

2. **02 — KPI Kearsipan (10 Indikator Standar)**
   - Kartu 10 Indikator KPI:
     1. Arsip Aktif (&ge; 95%)
     2. Arsip Inaktif (&ge; 95%)
     3. Layanan Peminjaman (&ge; 95%)
     4. Pengembalian Arsip (&ge; 98%)
     5. Pemindahan Arsip (&ge; 95%)
     6. Pemberkasan Arsip (&ge; 95%)
     7. Usul Serah (100%)
     8. Usul Musnah (100%)
     9. Monitoring Pelaporan (100%)
     10. Pemeliharaan Arsip (&ge; 95%)
   - Tabel komparasi nilai per gedung dan status ketercapaian target.

3. **03 — Stok Pengelolaan Arsip**
   - Rincian stok per gedung, lokasi/rak penyimpanan, dan kondisi fisik arsip.
   - Fitur tambah stok dan hapus data.

4. **04 — Rencana Pemusnahan**
   - Kurun waktu arsip, dasar retensi JRA, target volume, bulan jadwal, dan status realisasi.
   - Fitur tambah usulan pemusnahan.

5. **Input / Update Data (Petugas Gedung)**
   - Form input khusus petugas gedung untuk mengisi realisasi bulanan dan melampirkan link bukti dukung (Google Drive / Berita Acara).
   - Data langsung tersinkron ke dashboard secara otomatis.

6. **05 — Laporan & Tindak Lanjut**
   - Ringkasan kepatuhan waktu pelaporan gedung (Gedung sudah update vs belum).
   - Catatan evaluasi pimpinan.
   - Tombol Cetak / Simpan PDF dan Unduh Format Excel (CSV).

7. **Database Pusat (Sheets Hub Viewer)**
   - Representasi 5 tabel database Google Sheets: `MASTER_GEDUNG`, `MASTER_KPI`, `INPUT_KPI`, `STOK_ARSIP`, `RENCANA_MUSNAH`.

---

## 🚀 Cara Menjalankan

Kamu bisa langsung menjalankan web ini dengan salah satu cara berikut:
1. **Klik ganda file [BUKA_WEB.bat](file:///e:/Program2/program%20PU%202/BUKA_WEB.bat)**, atau
2. Buka langsung file [index.html](file:///e:/Program2/program%20PU%202/index.html) di browser (Google Chrome, Edge, Firefox, dll).

