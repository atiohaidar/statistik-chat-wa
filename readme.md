# WhatsApp Chat Viewer - Progressive Web App

Aplikasi analisis chat WhatsApp yang 100% aman, privat, dan berfungsi offline.

## 🚀 Fitur Keamanan & Privacy

- **100% Client-Side Processing**: Semua data diproses di browser Anda
- **No Server Upload**: Chat tidak pernah dikirim ke server manapun
- **Offline Capable**: Berfungsi tanpa koneksi internet setelah install
- **Content Security Policy**: Perlindungan terhadap XSS dan script berbahaya
- **Auto Data Clearing**: Data otomatis terhapus saat tutup browser

## 📱 Progressive Web App (PWA)

### Keunggulan PWA:
- **Install sebagai App**: Bisa diinstall di perangkat seperti aplikasi native
- **Offline First**: Berfungsi 100% offline setelah install pertama
- **Fast Loading**: Loading lebih cepat dengan caching
- **Home Screen Access**: Akses langsung dari home screen
- **No App Store**: Tidak perlu download dari app store

### Cara Install:
1. Buka aplikasi di browser (Chrome, Edge, Safari, Firefox)
2. Klik tombol "Install" yang muncul di bawah
3. Atau gunakan menu browser: "Add to Home Screen" / "Install App"
4. Aplikasi akan tersedia di perangkat Anda secara offline

## 🔒 Fitur Keamanan

### Data Privacy:
- Chat tidak pernah meninggalkan perangkat Anda
- Tidak ada koneksi ke server untuk pemrosesan data
- Semua analisis dilakukan di browser secara lokal
- Tombol "Hapus Semua Data" untuk clear memory

### Network Security:
- Content Security Policy (CSP) untuk mencegah serangan XSS
- Blokir semua request network yang tidak perlu
- Service Worker untuk caching aman
- Hanya CDN library yang diperlukan yang diizinkan

## 📊 Fitur Analisis

- **Statistik Lengkap**: Total pesan, kata, partisipan, dll
- **Grafik Interaktif**: Distribusi user, aktivitas per jam, timeline
- **Filter Advanced**: Berdasarkan user, tanggal, jam, kata kunci
- **Analisis Kata**: Kata dan frasa yang paling sering digunakan
- **Export**: CSV dan PDF report yang profesional
- **Support ZIP**: Upload file .zip yang berisi chat .txt

## 💽 Cara Penggunaan

### Format File yang Didukung:
- **File .txt**: Export chat WhatsApp langsung
- **File .zip**: Zip yang berisi file chat txt dengan nama "WhatsApp Chat with..."

### Langkah-langkah:
1. Export chat dari WhatsApp (tanpa media untuk privasi)
2. Upload file .txt atau .zip ke aplikasi
3. Lihat analisis statistik lengkap
4. Filter dan eksplorasi data sesuai kebutuhan
5. Export hasil analisis ke CSV atau PDF

## 🛠️ Teknologi

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Charts**: Chart.js
- **PDF Export**: jsPDF + html2canvas
- **ZIP Support**: JSZip
- **PWA**: Service Worker, Web App Manifest
- **Security**: Content Security Policy, offline-first architecture

---

*Dibuat dengan GitHub Copilot Agent menggunakan Claude*
