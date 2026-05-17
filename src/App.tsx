import React, { useState } from 'react';
import {
  BookOpen,
  User,
  GraduationCap,
  CheckCircle2,
  XCircle,
  Download,
  ChevronRight,
  ChevronLeft,
  Award,
  Send,
} from 'lucide-react';

// --- DATA SOAL (SIDANG PPKI & KNIP) ---
const questionsData = [
  {
    id: 1,
    section: 'Sidang PPKI & Pembentukan Pemerintahan',
    type: 'single',
    text: 'Sebelum Sidang PPKI I dimulai, Mohammad Hatta mengumpulkan beberapa tokoh untuk mendiskusikan keberatan dari saudara-saudara di Indonesia Timur terhadap tujuh kata dalam Piagam Jakarta. Permasalahan itu diselesaikan dalam waktu kurang dari 15 menit. Berdasarkan fakta tersebut, manakah penilaian yang PALING TEPAT tentang keputusan menghapus tujuh kata tersebut?',
    options: [
      'Keputusan itu melemahkan posisi umat Islam dalam negara Indonesia yang baru merdeka',
      'Keputusan itu melemahkan posisi umat Islam dalam negara Indonesia',
      'Keputusan itu diambil secara tergesa-gesa tanpa mempertimbangkan aspirasi mayoritas',
      'Keputusan itu menandakan bahwa Indonesia bukan negara yang berlandaskan nilai ketuhanan',
      'Keputusan itu semata-mata merupakan tekanan dari pihak Sekutu dan Belanda',
    ],
    answer: 1,
  },
  {
    id: 2,
    section: 'Sidang PPKI & Pembentukan Pemerintahan',
    type: 'single',
    text: 'Dalam sidang PPKI I, Otto Iskandardinata mengusulkan agar Sukarno dan Mohammad Hatta dipilih sebagai Presiden dan Wakil Presiden secara aklamasi. Semua peserta sidang menyetujui usulan tersebut sambil menyanyikan lagu Indonesia Raya. Makna paling mendalam dari proses pemilihan secara aklamasi tersebut dalam konteks awal kemerdekaan Indonesia adalah...',
    options: [
      'Menunjukkan bahwa sistem demokrasi langsung belum dapat diterapkan di Indonesia',
      'Membuktikan bahwa Sukarno dan Hatta adalah satu-satunya kandidat yang memenuhi syarat',
      'Mencerminkan persatuan dan kepercayaan penuh para pendiri bangsa terhadap kepemimpinan Sukarno-Hatta di tengah kondisi darurat',
      'Mengindikasikan bahwa PPKI tidak menganut prinsip demokrasi dalam pengambilan keputusan',
      'Menunjukkan dominasi kelompok Jawa dalam menentukan pemimpin Indonesia',
    ],
    answer: 2,
  },
  {
    id: 3,
    section: 'Sidang PPKI & Pembentukan Pemerintahan',
    type: 'single',
    text: 'Kolonel Nishimura menyampaikan kepada Sukarno bahwa Jepang tidak lagi memiliki kekuasaan setelah kalah dari Sekutu dan hanya bertugas sebagai petugas polisi Sekutu. Gunseikan pun mengeluarkan perintah yang melarang bangsa Indonesia mengadakan perubahan apapun dalam pemerintahan. Berdasarkan situasi tersebut, mengapa para pendiri bangsa tetap melanjutkan Sidang PPKI I pada 18 Agustus 1945?',
    options: [
      'Karena PPKI mendapat izin khusus dari Jepang untuk mengadakan sidang',
      'Karena Sekutu memberikan waktu tenggang kepada Indonesia untuk membentuk pemerintahan',
      'Karena para pendiri bangsa menyadari bahwa proklamasi telah menjadikan Indonesia negara merdeka yang tidak lagi tunduk pada perintah Jepang',
      'Karena Jepang secara diam-diam mendukung pembentukan pemerintahan Indonesia',
      'Karena sidang PPKI bersifat budaya, bukan politik, sehingga tidak melanggar larangan Jepang',
    ],
    answer: 2,
  },
  {
    id: 4,
    section: 'Sidang PPKI & Pembentukan Pemerintahan',
    type: 'single',
    text: 'Salah satu perubahan penting dalam Sidang PPKI I adalah perubahan Pasal 6 Ayat 1 dari "Presiden ialah orang Indonesia asli yang beragama Islam" menjadi "Presiden ialah orang Indonesia asli". Evaluasi dampak jangka panjang dari perubahan pasal tersebut bagi kehidupan kebangsaan Indonesia masa kini adalah...',
    options: [
      'Perubahan ini melemahkan peran agama Islam dalam kehidupan bernegara Indonesia',
      'Perubahan ini membuka peluang bagi warga negara non-Muslim untuk mencapai posisi tertinggi dalam pemerintahan, memperkuat inklusivitas dan persatuan',
      'Perubahan ini menyebabkan Indonesia tidak memiliki identitas keagamaan yang jelas dalam konstitusi',
      'Perubahan ini merupakan bentuk konsesi terhadap tekanan dari negara-negara asing',
      'Perubahan ini tidak berdampak signifikan karena mayoritas penduduk Indonesia beragama Islam',
    ],
    answer: 1,
  },
  {
    id: 5,
    section: 'Sidang PPKI & Pembentukan Pemerintahan',
    type: 'single',
    text: 'Sidang PPKI II tanggal 19 Agustus 1945 memutuskan pembagian wilayah Indonesia menjadi 8 provinsi dengan masing-masing dipimpin seorang gubernur. Keputusan ini diambil di tengah kondisi masih adanya tentara Jepang dan ancaman kedatangan Sekutu. Mengapa pembagian wilayah menjadi 8 provinsi merupakan langkah strategis yang sangat penting pada saat itu?',
    options: [
      'Untuk mempermudah pemerintah pusat dalam memungut pajak dari daerah-daerah',
      'Untuk menghindari konflik internal antar suku bangsa di berbagai daerah',
      'Untuk membangun struktur pemerintahan yang nyata dan efektif sebagai bukti kedaulatan Indonesia atas seluruh wilayahnya sebelum kedatangan Sekutu',
      'Untuk mengikuti model pemerintahan Belanda yang telah terbukti efektif',
      'Untuk mempermudah distribusi bantuan pangan bagi rakyat yang kekurangan',
    ],
    answer: 2,
  },
  {
    id: 6,
    section: 'Sidang PPKI & Pembentukan Pemerintahan',
    type: 'single',
    text: 'Sidang PPKI II memutuskan pembentukan 12 Departemen, antara lain: Departemen Dalam Negeri, Luar Negeri, Kehakiman, Kemakmuran, Keuangan, Kesehatan, Pengajaran, Sosial, Pertahanan, dan Penerangan. Berdasarkan susunan departemen tersebut, kesimpulan yang paling tepat tentang prioritas pemerintah Indonesia pada awal kemerdekaan adalah...',
    options: [
      'Indonesia lebih memprioritaskan pembangunan ekonomi daripada pertahanan negara',
      'Pemerintah Indonesia berfokus pada pembangunan infrastruktur fisik sebagai pondasi negara',
      'Indonesia membangun fondasi negara secara menyeluruh dengan menyeimbangkan kebutuhan internal (sosial, pendidikan, kesehatan) dan eksternal (pertahanan, luar negeri) secara bersamaan',
      'Pemerintah Indonesia mengutamakan hubungan diplomatik dengan negara-negara asing',
      'Departemen Pertahanan menjadi prioritas utama mengingat ancaman dari Jepang dan Sekutu',
    ],
    answer: 2,
  },
  {
    id: 7,
    section: 'Sidang PPKI & Pembentukan Pemerintahan',
    type: 'single',
    text: 'Dalam Sidang PPKI III tanggal 22 Agustus 1945, para pemuda mendesak pembentukan tentara nasional. Namun pemerintah akhirnya memutuskan membentuk Badan Keamanan Rakyat (BKR) yang bersifat tidak resmi sebagai angkatan bersenjata negara. Evaluasi alasan mengapa pemerintah memilih membentuk BKR daripada langsung membentuk tentara nasional pada saat itu adalah...',
    options: [
      'Karena Indonesia belum memiliki cukup sumber daya manusia yang terlatih untuk membentuk tentara',
      'Karena pemerintah ingin menghindari konfrontasi langsung dengan Sekutu yang dapat memancing reaksi keras dan mengancam pengakuan kedaulatan Indonesia',
      'Karena pembentukan tentara nasional membutuhkan persetujuan dari PBB terlebih dahulu',
      'Karena BKR dianggap lebih efektif dalam menghadapi ancaman dari dalam negeri dibanding ancaman asing',
      'Karena pemerintah tidak memiliki anggaran untuk membiayai tentara nasional yang profesional',
    ],
    answer: 1,
  },
  {
    id: 8,
    section: 'Sidang PPKI & Pembentukan Pemerintahan',
    type: 'single',
    text: 'Chairul Saleh menuntut agar PPKI menghentikan hubungan dengan Jepang dan berganti nama menjadi Komite Nasional Indonesia. PPKI akhirnya dibubarkan dan berganti wujud menjadi KNIP. Mengapa desakan para pemuda untuk memutus hubungan dengan Jepang dan mengubah PPKI menjadi lembaga baru merupakan langkah yang penting secara politik?',
    options: [
      'Karena PPKI dianggap tidak memiliki legitimasi hukum untuk membentuk pemerintahan Indonesia',
      'Untuk menegaskan bahwa kemerdekaan Indonesia murni hasil perjuangan bangsa sendiri, bukan pemberian Jepang, sehingga meningkatkan legitimasi di mata dunia internasional',
      'Karena nama "Panitia Persiapan Kemerdekaan" tidak sesuai lagi dengan kondisi Indonesia yang sudah merdeka',
      'Untuk menyesuaikan struktur pemerintahan Indonesia dengan sistem demokrasi Barat',
      'Karena Sekutu mewajibkan Indonesia membubarkan semua lembaga bentukan Jepang',
    ],
    answer: 1,
  },
  {
    id: 9,
    section: 'Sidang PPKI & Pembentukan Pemerintahan',
    type: 'single',
    text: 'Maklumat Wakil Presiden No. X tanggal 16 Oktober 1945 memutuskan bahwa KNIP diserahi kekuasaan legislatif sebelum DPR/MPR terbentuk, dan dalam menjalankan tugas sehari-hari KNIP dijalankan oleh Badan Pekerja (BP-KNIP) yang diketuai Sutan Sjahrir. Dampak paling signifikan dari Maklumat tersebut terhadap sistem pemerintahan Indonesia adalah...',
    options: [
      'Indonesia berubah dari sistem monarki menjadi sistem republik demokratis',
      'Kekuasaan presiden menjadi semakin kuat karena mendapat dukungan dari lembaga legislatif',
      'Terjadi distribusi kekuasaan dari presiden kepada lembaga perwakilan rakyat (KNIP), yang menjadi cikal bakal pergeseran menuju sistem parlementer',
      'Indonesia secara resmi menganut sistem pemerintahan federal dengan KNIP sebagai lembaga tertinggi',
      'Perdana Menteri mendapat kekuasaan yang setara dengan Presiden dalam menjalankan pemerintahan',
    ],
    answer: 2,
  },
  {
    id: 10,
    section: 'Sidang PPKI & Pembentukan Pemerintahan',
    type: 'single',
    text: 'Maklumat Pemerintah tanggal 3 November 1945 menganjurkan masyarakat untuk membentuk partai-partai politik. Hal ini bertolak belakang dengan gagasan Sukarno yang pernah mengusulkan PNI sebagai partai tunggal dalam Sidang PPKI III. Hubungan sebab-akibat yang paling tepat antara Maklumat tersebut dengan kondisi demokrasi Indonesia masa kini adalah...',
    options: [
      'Maklumat tersebut menjadi dasar hukum bagi pembatasan jumlah partai politik di Indonesia',
      'Maklumat tersebut meletakkan fondasi sistem multipartai yang menjadi ciri khas demokrasi Indonesia hingga saat ini, sekaligus menunjukkan bahwa kebebasan berserikat diakui sejak awal kemerdekaan',
      'Maklumat tersebut menyebabkan ketidakstabilan politik yang terus berlanjut hingga era reformasi',
      'Maklumat tersebut merupakan respons langsung terhadap tekanan politik dari Belanda yang ingin Indonesia terpecah',
      'Maklumat tersebut hanya berlaku sementara hingga pemilu pertama tahun 1955',
    ],
    answer: 1,
  },
  {
    id: 11,
    section: 'Sidang PPKI & Pembentukan Pemerintahan',
    type: 'single',
    text: 'Maklumat Pemerintah tanggal 14 November 1945 mengubah sistem pemerintahan Indonesia dari presidensial menjadi parlementer. Dalam sistem baru ini, kabinet bertanggung jawab kepada KNIP, bukan kepada presiden. Evaluasi dampak perubahan sistem pemerintahan tersebut terhadap stabilitas pemerintahan Indonesia pada awal kemerdekaan adalah...',
    options: [
      'Perubahan ini sangat menguntungkan karena memperluas partisipasi rakyat dalam pemerintahan',
      'Perubahan ini tidak berdampak apapun karena kondisi perang kemerdekaan lebih menentukan stabilitas',
      'Perubahan ini berpotensi melemahkan stabilitas pemerintahan karena kabinet dapat dijatuhkan kapan saja oleh KNIP, namun di sisi lain mencerminkan keinginan untuk membangun sistem yang demokratis',
      'Perubahan ini memperkuat posisi Indonesia di mata dunia internasional karena sesuai dengan sistem demokrasi Barat',
      'Perubahan ini memperkuat kekuasaan Presiden Sukarno karena tidak lagi bertanggung jawab atas kebijakan kabinet',
    ],
    answer: 2,
  },
  {
    id: 12,
    section: 'Sidang PPKI & Pembentukan Pemerintahan',
    type: 'single',
    text: 'Perhatikan hasil-hasil sidang PPKI berikut: (1) Pengesahan UUD 1945 dan penetapan Presiden-Wakil Presiden, (2) Pembentukan 8 Provinsi dan 12 Departemen, (3) Pembentukan BKR dan KNIP. Jika dianalisis dari teori konstitusi negara modern, ketiga rangkaian keputusan tersebut membuktikan bahwa...',
    options: [
      'Indonesia membutuhkan waktu yang lama untuk memenuhi syarat sebagai negara yang diakui dunia internasional',
      'Para pendiri bangsa secara sistematis dan terencana membangun semua unsur negara (pemerintah, wilayah, rakyat, dan aturan dasar) dalam waktu singkat untuk memperkuat kedaulatan Indonesia',
      'PPKI hanya berfungsi sebagai lembaga seremonial tanpa kewenangan membuat kebijakan nyata',
      'Proses pembentukan negara Indonesia dilakukan tanpa perencanaan yang matang karena terburu-buru',
      'Indonesia lebih memprioritaskan pengakuan internasional daripada membangun kelembagaan negara dari dalam',
    ],
    answer: 1,
  },
  {
    id: 13,
    section: 'Sidang PPKI & Pembentukan Pemerintahan',
    type: 'single',
    text: 'Piagam Jakarta yang disepakati pada 22 Juni 1945 mengandung kalimat proklamasi dan rancangan pembukaan UUD. Setelah dimodifikasi dalam Sidang PPKI I pada 18 Agustus 1945, Piagam Jakarta menjadi Pembukaan UUD 1945 yang memuat dasar negara Pancasila. Hubungan antara Piagam Jakarta, UUD 1945, dan Pancasila yang paling tepat adalah...',
    options: [
      'Piagam Jakarta dan Pancasila adalah dua dokumen yang sepenuhnya berbeda dan tidak saling berkaitan',
      'Pancasila merupakan penyempurnaan dari Piagam Jakarta yang dirumuskan setelah UUD 1945 disahkan',
      'Piagam Jakarta adalah embrio yang melahirkan UUD 1945 sekaligus memuat nilai-nilai Pancasila, sehingga ketiganya merupakan satu kesatuan fondasi konstitusional negara Indonesia',
      'UUD 1945 merupakan dokumen yang lebih tinggi kedudukannya dibandingkan Piagam Jakarta dan Pancasila',
      'Pancasila baru diakui sebagai dasar negara setelah terpisah dari Piagam Jakarta dan dicantumkan dalam UUD 1945',
    ],
    answer: 2,
  },
  {
    id: 14,
    section: 'Sidang PPKI & Pembentukan Pemerintahan',
    type: 'single',
    text: 'KNIP dibentuk pada 29 Agustus 1945 dengan Kasman Singodimejo sebagai ketua. Setelah Maklumat Wakil Presiden No. X, KNIP diserahi kekuasaan legislatif. Pada masa sekarang, KNIP diidentikkan dengan DPR, sehingga tanggal 29 Agustus dijadikan Hari Lahir DPR. Relevansi peran KNIP bagi kehidupan demokrasi Indonesia masa kini yang paling tepat adalah...',
    options: [
      'KNIP membuktikan bahwa lembaga legislatif Indonesia sudah ada sejak sebelum kemerdekaan diproklamasikan',
      'KNIP menjadi preseden bahwa lembaga perwakilan rakyat harus selalu diketuai oleh tokoh militer',
      'KNIP meletakkan tradisi bahwa lembaga legislatif berfungsi sebagai penyeimbang kekuasaan eksekutif dan representasi rakyat—tradisi yang diteruskan oleh DPR hingga saat ini',
      'Keberadaan KNIP membuktikan bahwa sistem parlementer lebih cocok untuk Indonesia dibanding sistem presidensial',
      'KNIP menunjukkan bahwa partai politik tidak diperlukan dalam sistem demokrasi Indonesia',
    ],
    answer: 2,
  },
  {
    id: 15,
    section: 'Sidang PPKI & Pembentukan Pemerintahan',
    type: 'single',
    text: 'Dalam waktu kurang dari sebulan (18 Agustus – 29 Agustus 1945), para pendiri bangsa berhasil menyelenggarakan tiga kali sidang PPKI dan membentuk KNIP, menghasilkan konstitusi, memilih pemimpin, membagi wilayah, membentuk departemen, dan membangun lembaga perwakilan rakyat. Pelajaran terpenting yang dapat diambil generasi muda Indonesia dari proses pembentukan pemerintahan awal tersebut untuk kehidupan kebangsaan masa kini adalah...',
    options: [
      'Bahwa kecepatan dalam mengambil keputusan lebih penting daripada kualitas keputusan itu sendiri',
      'Bahwa persatuan, semangat berkorban untuk kepentingan bangsa, dan kemampuan membangun konsensus di atas perbedaan adalah kunci membangun dan mempertahankan negara',
      'Bahwa lembaga-lembaga negara yang ada saat ini harus kembali pada struktur yang ditetapkan PPKI pada tahun 1945',
      'Bahwa tokoh-tokoh berpendidikan tinggi adalah satu-satunya yang mampu memimpin bangsa dalam situasi kritis',
      'Bahwa intervensi kelompok pemuda selalu berdampak negatif terhadap stabilitas pemerintahan',
    ],
    answer: 1,
  },
  {
    id: 16,
    section: 'Benar atau Salah - Sidang PPKI I',
    type: 'tf',
    text: 'Tentukan setiap pernyataan berikut apakah BENAR (Tepat) atau SALAH (Tidak Tepat) berkaitan dengan Sidang PPKI I!',
    statements: [
      'Sidang PPKI I dilaksanakan pada tanggal 18 Agustus 1945 di Gedung Chuo Sang In.',
      'Sukarno mengusulkan agar pemilihan presiden dilakukan secara aklamasi dalam Sidang PPKI I.',
      'UUD 1945 yang disahkan dalam Sidang PPKI I memuat dasar negara Pancasila dalam Pembukaan.',
      'Rancangan UUD 1945 yang dibahas dalam Sidang PPKI I berasal dari sidang BPUPK tanggal 10–16 Juli 1945.',
      'Perubahan pembukaan UUD dalam Sidang PPKI I memakan waktu lebih dari 5 jam perdebatan.',
    ],
    answers: ['Tepat', 'Tidak Tepat', 'Tepat', 'Tepat', 'Tidak Tepat'],
  },
  {
    id: 17,
    section: 'Benar atau Salah - Sidang PPKI II',
    type: 'tf',
    text: 'Tentukan setiap pernyataan berikut apakah BENAR (Tepat) atau SALAH (Tidak Tepat) berkaitan dengan Sidang PPKI II!',
    statements: [
      'Sidang PPKI II dilaksanakan pada tanggal 19 Agustus 1945 pukul 10.00 WIB.',
      'Provinsi Jawa Barat pada awal kemerdekaan dipimpin oleh Sutarjo Kartohadikusumo.',
      'Indonesia pada awal kemerdekaan dibagi menjadi 10 provinsi berdasarkan Sidang PPKI II.',
      'Sukarno meminta Ahmad Subarjo untuk membentuk tim kecil membahas bentuk Departemen.',
      'Johannes Latuharhary ditetapkan sebagai Gubernur pertama Provinsi Maluku.',
    ],
    answers: ['Tepat', 'Tepat', 'Tidak Tepat', 'Tepat', 'Tepat'],
  },
  {
    id: 18,
    section: 'Benar atau Salah - Sidang PPKI III',
    type: 'tf',
    text: 'Tentukan setiap pernyataan berikut apakah BENAR (Tepat) atau SALAH (Tidak Tepat) berkaitan dengan Sidang PPKI III!',
    statements: [
      'Sidang PPKI III dilaksanakan pada tanggal 22 Agustus 1945.',
      'BKR dibentuk sebagai tentara resmi Republik Indonesia dalam Sidang PPKI III.',
      'PPKI setelah dibubarkan berganti wujud menjadi Komite Nasional Indonesia Pusat (KNIP).',
      'Chairul Saleh menuntut agar PPKI memutus hubungan dengan Jepang dalam Sidang PPKI III.',
      'Pembentukan PNI sebagai partai tunggal berhasil direalisasikan dalam Sidang PPKI III.',
    ],
    answers: ['Tepat', 'Tidak Tepat', 'Tepat', 'Tepat', 'Tidak Tepat'],
  },
  {
    id: 19,
    section: 'Benar atau Salah - KNIP & Maklumat',
    type: 'tf',
    text: 'Tentukan setiap pernyataan berikut apakah BENAR (Tepat) atau SALAH (Tidak Tepat) berkaitan dengan KNIP dan Maklumat pemerintah!',
    statements: [
      'KNIP secara resmi dibentuk pada tanggal 29 Agustus 1945.',
      'Ketua pertama KNIP adalah Sutan Sjahrir.',
      'Maklumat Wakil Presiden No. X memberikan kekuasaan legislatif kepada KNIP.',
      'Maklumat Pemerintah 14 November 1945 mengubah sistem presidensial menjadi parlementer.',
      'Tanggal terbentuknya KNIP (29 Agustus) kini diperingati sebagai Hari Lahir DPR RI.',
    ],
    answers: ['Tepat', 'Tidak Tepat', 'Tepat', 'Tepat', 'Tepat'],
  },
  {
    id: 20,
    section: 'Benar atau Salah - Konteks Kemerdekaan',
    type: 'tf',
    text: 'Tentukan setiap pernyataan berikut apakah BENAR (Tepat) atau SALAH (Tidak Tepat) berkaitan dengan konteks kemerdekaan Indonesia!',
    statements: [
      'Bom atom dijatuhkan di Hirosima dan Nagasaki pada tanggal 8 dan 9 Agustus 1945.',
      'Kaisar Hirohito menyerah kepada Sekutu pada tanggal 14 Agustus 1945.',
      'Proklamasi kemerdekaan Indonesia dibacakan di Jalan Pegangsaan Timur 56 Jakarta pada pukul 10.00.',
      'Kolonel Nishimura menyatakan bahwa Jepang tetap mendukung kemerdekaan Indonesia setelah kalah dari Sekutu.',
      'Mr. Mohammad Yamin menyatakan bahwa Indonesia dibentuk di atas abu perumahan Kolonial Belanda dan asap reruntuhan kekuasaan senjata Jepang.',
    ],
    answers: ['Tepat', 'Tepat', 'Tepat', 'Tidak Tepat', 'Tepat'],
  },
  {
    id: 21,
    section: 'Pilihan Ganda Kompleks - Sidang PPKI I',
    type: 'multiple',
    text: 'Berilah tanda centang pada SEMUA jawaban yang merupakan hasil keputusan Sidang PPKI I!',
    options: [
      'Pengesahan Pembukaan dan Undang-Undang Dasar 1945',
      'Penetapan Sukarno sebagai Presiden dan Mohammad Hatta sebagai Wakil Presiden',
      'Pembentukan 8 Provinsi beserta gubernurnya',
      'Penghapusan tujuh kata dalam Piagam Jakarta dan penyesuaian pasal-pasal UUD',
      'Pembentukan Badan Keamanan Rakyat (BKR)',
      'Penetapan komite nasional sebagai badan pembantu presiden',
    ],
    answers: [0, 1, 3, 5],
  },
  {
    id: 22,
    section: 'Pilihan Ganda Kompleks - Sidang PPKI II',
    type: 'multiple',
    text: 'Berilah tanda centang pada SEMUA jawaban yang merupakan keputusan Sidang PPKI II!',
    options: [
      'Pembagian wilayah Indonesia menjadi 8 Provinsi dengan masing-masing gubernur',
      'Pembentukan 12 Departemen dan 1 Menteri Negara',
      'Pemilihan Sukarno dan Hatta sebagai Presiden dan Wakil Presiden secara aklamasi',
      'Pembentukan Panitia Nasional Daerah (Komite Nasional) untuk membantu tugas daerah',
      'Pembubaran PPKI dan pembentukan KNIP',
      'Penunjukan pimpinan kepolisian dari unsur bekas PETA dan pemimpin rakyat',
    ],
    answers: [0, 1, 3, 5],
  },
  {
    id: 23,
    section: 'Pilihan Ganda Kompleks - Peran KNIP',
    type: 'multiple',
    text: 'Berilah tanda centang pada SEMUA pernyataan yang BENAR tentang peranan dan dampak KNIP!',
    options: [
      'KNIP menjadi cikal bakal DPR RI dan tanggal pembentukannya diperingati sebagai Hari Lahir DPR',
      'Melalui Maklumat Wapres No. X, KNIP menerima kekuasaan legislatif sebelum DPR/MPR terbentuk',
      'KNIP berperan mendorong terbitnya Maklumat yang mengizinkan pembentukan partai-partai politik',
      'KNIP memiliki kewenangan mengangkat dan memberhentikan presiden secara langsung',
      'Sjahrir melalui KNIP mendorong perubahan sistem pemerintahan dari presidensial ke parlementer',
      'KNIP menyusun haluan negara yang menggambarkan RI sebagai negara demokratis',
    ],
    answers: [0, 1, 2, 4, 5],
  },
  {
    id: 24,
    section: 'Pilihan Ganda Kompleks - Pasangan Tokoh & Peran',
    type: 'multiple',
    text: 'Berilah tanda centang pada SEMUA pasangan tokoh–peran yang BENAR!',
    options: [
      'Otto Iskandardinata – mengusulkan pemilihan presiden secara aklamasi dalam Sidang PPKI I',
      'Mohammad Hatta – mengumpulkan tokoh untuk mendiskusikan keberatan terhadap tujuh kata Piagam Jakarta',
      'Sutan Sjahrir – menjabat Ketua KNIP pertama setelah terpilih menggantikan Kasman Singodimejo',
      'Kasman Singodimejo – menjabat sebagai Ketua KNIP saat pertama dibentuk',
      'Ahmad Subarjo – mengusulkan pembentukan 13 Departemen dalam Sidang PPKI II',
      'Chairul Saleh – menuntut agar PPKI memutus hubungan dengan Jepang dalam Sidang PPKI III',
    ],
    answers: [0, 1, 3, 4, 5],
  },
  {
    id: 25,
    section: 'Pilihan Ganda Kompleks - Nilai Perjuangan',
    type: 'multiple',
    text: 'Berilah tanda centang pada SEMUA nilai/pelajaran dari Sidang PPKI dan KNIP yang RELEVAN bagi kehidupan kebangsaan Indonesia masa kini!',
    options: [
      'Mengutamakan kepentingan persatuan nasional di atas kepentingan pribadi atau golongan',
      'Pentingnya musyawarah mufakat dalam menyelesaikan perbedaan pendapat secara damai',
      'Lembaga negara cukup berfungsi berdasarkan kepercayaan tanpa dasar hukum yang kuat',
      'Keberanian mengambil keputusan besar secara cepat dan terencana dalam situasi darurat',
      'Semangat inklusivitas dalam membangun bangsa dengan menghargai keberagaman',
      'Pentingnya membangun kelembagaan negara yang kokoh sebagai pondasi kedaulatan',
    ],
    answers: [0, 1, 3, 4, 5],
  },
];

export default function App() {
  const [step, setStep] = useState('intro'); // 'intro', 'quiz', 'result'
  const [student, setStudent] = useState({
    name: '',
    nis: '',
    kelas: 'X MIPA 1',
  });
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [scoreData, setScoreData] = useState(null);
  const [activeQuestions, setActiveQuestions] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  const [showConfirm, setShowConfirm] = useState(false);

  // State untuk pengiriman ke Google Sheet
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // --- MASUKKAN URL GOOGLE APPS SCRIPT DI SINI ---
  const GOOGLE_SHEET_URL =
    'https://script.google.com/macros/s/AKfycbw4BsaRGEKDhLitVhXWxH05KSPMJRQAegRvMm363pRWGwwq6oP-VhvPa_lIy-GC7Kr97A/exec';

  // Helper untuk mendapatkan abjad pilihan ganda
  const getLabel = (idx) => String.fromCharCode(65 + idx);

  // Fungsi untuk mengacak urutan array (algoritma Fisher-Yates)
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const handleStart = (e) => {
    e.preventDefault();
    if (student.name && student.nis) {
      setErrorMsg('');

      // Ambil seluruh soal dari dataKerajaan Siak
      const poolSoal = questionsData;

      // Acak array soal dan tampilkan SEMUA 25 SOAL
      const randomSoal = shuffleArray(poolSoal).slice(0, 25);

      setActiveQuestions(randomSoal);
      setStep('quiz');
      window.scrollTo(0, 0);
    } else {
      setErrorMsg('Mohon isi Nama dan NIS terlebih dahulu.');
    }
  };

  const handleAnswerSingle = (optIdx) => {
    setAnswers({ ...answers, [currentIdx]: optIdx });
  };

  const handleAnswerMultiple = (optIdx) => {
    const currentAns = answers[currentIdx] || [];
    let newAns;
    if (currentAns.includes(optIdx)) {
      newAns = currentAns.filter((i) => i !== optIdx);
    } else {
      newAns = [...currentAns, optIdx].sort();
    }
    setAnswers({ ...answers, [currentIdx]: newAns });
  };

  const handleAnswerTF = (statementIdx, value) => {
    const currentAns = answers[currentIdx] || [];
    const newAns = [...currentAns];
    newAns[statementIdx] = value;
    setAnswers({ ...answers, [currentIdx]: newAns });
  };

  const calculateScore = () => {
    let correctCount = 0;
    let detail = [];

    activeQuestions.forEach((q, idx) => {
      const userAns = answers[idx];
      let isCorrect = false;

      if (userAns !== undefined) {
        if (q.type === 'single') {
          isCorrect = userAns === q.answer;
        } else if (q.type === 'multiple') {
          if (Array.isArray(userAns) && userAns.length === q.answers.length) {
            isCorrect = q.answers.every((a) => userAns.includes(a));
          }
        } else if (q.type === 'tf') {
          if (Array.isArray(userAns)) {
            isCorrect = q.answers.every((a, i) => userAns[i] === a);
          }
        }
      }

      if (isCorrect) correctCount++;
      detail.push({ id: q.id, correct: isCorrect });
    });

    const finalScore = Math.round(
      (correctCount / activeQuestions.length) * 100
    );
    setScoreData({
      score: finalScore,
      correct: correctCount,
      total: activeQuestions.length,
      detail,
    });
    setStep('result');
    window.scrollTo(0, 0);
  };

  const submitToSpreadsheet = async () => {
    if (GOOGLE_SHEET_URL === 'MASUKKAN_URL_APPS_SCRIPT_ANDA_DISINI') {
      alert(
        'Tautan Google Sheet belum diatur oleh Guru. Anda masih dapat mengunduh CSV cadangan.'
      );
      return;
    }

    setIsSubmitting(true);

    // Menyiapkan data yang dikirim
    const formData = new FormData();
    formData.append('nama', student.name);
    formData.append('nis', student.nis);
    formData.append('kelas', student.kelas);
    formData.append('skor', scoreData.score);
    formData.append('benar', scoreData.correct);
    formData.append('salah', scoreData.total - scoreData.correct);

    try {
      // Mengirim POST request secara asinkron ke Google Apps Script
      await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors', // Penting untuk melewati error CORS dari browser
        body: formData,
      });
      setSubmitSuccess(true);
    } catch (error) {
      alert(
        'Terjadi kesalahan saat mengirim. Silakan unduh CSV sebagai cadangan.'
      );
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateCSV = () => {
    let csvContent = 'data:text/csv;charset=utf-8,';
    csvContent += 'SEKOLAH,SMA N 8 DUMAI\n';
    csvContent += 'MATA PELAJARAN,SEJARAH INDONESIA (SIDANG PPKI & KNIP)\n';
    csvContent += 'TANGGAL,' + new Date().toLocaleDateString('id-ID') + '\n\n';

    csvContent += 'NAMA SISWA,NIS,KELAS,SKOR AKHIR,BENAR,SALAH\n';
    csvContent += `"${student.name}","${student.nis}","${student.kelas}",${
      scoreData.score
    },${scoreData.correct},${scoreData.total - scoreData.correct}\n\n`;

    csvContent += 'NO SOAL (ID),STATUS JAWABAN\n';
    scoreData.detail.forEach((item) => {
      csvContent += `${item.id},${item.correct ? 'Benar' : 'Salah'}\n`;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute(
      'download',
      `Nilai_Sejarah_PPKI_${student.kelas.replace(
        / /g,
        '_'
      )}_${student.name.replace(/ /g, '_')}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // --- VIEW: INTRO ---
  if (step === 'intro') {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
          <div className="bg-green-600 p-6 text-center flex flex-col items-center">
            {/* Tempat Logo */}
            <img
              src="logo-kuning.png"
              alt="Logo SMAN 8 Dumai"
              className="w-24 h-24 object-contain mb-3 drop-shadow-md bg-white rounded-full p-2"
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            {/* Ikon Pengganti jika gambar logo gagal dimuat */}
            <BookOpen className="w-12 h-12 text-white mx-auto mb-3 hidden" />
            <h1 className="text-2xl font-bold text-white">
              Kuis Sejarah: PPKI & KNIP
            </h1>
            <p className="text-green-100 mt-1">Ujian & Latihan Interaktif</p>
          </div>

          <div className="p-6">
            <div className="text-center mb-6">
              <h2 className="text-lg font-bold text-slate-800">
                SMA N 8 DUMAI
              </h2>
              <div className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                Tahun Ajaran 2025/2026
              </div>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 bg-red-100 border border-red-200 text-red-700 rounded-lg text-sm font-medium text-center">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleStart} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Nama Lengkap
                </label>
                <div className="relative">
                  <User className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    required
                    className="pl-10 w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
                    placeholder="Masukkan nama Anda"
                    value={student.name}
                    onChange={(e) =>
                      setStudent({ ...student, name: e.target.value })
                    }
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  NIS (Nomor Induk Siswa)
                </label>
                <div className="relative">
                  <GraduationCap className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                  <input
                    type="number"
                    required
                    className="pl-10 w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
                    placeholder="Contoh: 2100123"
                    value={student.nis}
                    onChange={(e) =>
                      setStudent({ ...student, nis: e.target.value })
                    }
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Kelas
                </label>
                <select
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none bg-white"
                  value={student.kelas}
                  onChange={(e) =>
                    setStudent({ ...student, kelas: e.target.value })
                  }
                >
                  <optgroup label="Kelas X">
                    <option>X MIPA 1</option>
                    <option>X MIPA 2</option>
                    <option>X MIPA 3</option>
                    <option>X IPS 1</option>
                    <option>X IPS 2</option>
                  </optgroup>
                  <optgroup label="Kelas XI">
                    <option>XI MIPA 1</option>
                    <option>XI MIPA 2</option>
                    <option>XI MIPA 3</option>
                    <option>XI IPS 1</option>
                    <option>XI IPS 2</option>
                  </optgroup>
                </select>
              </div>

              <button
                type="submit"
                className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors flex justify-center items-center gap-2"
              >
                Mulai Kuis <ChevronRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // --- VIEW: QUIZ ---
  if (step === 'quiz') {
    const q = activeQuestions[currentIdx];
    const isLast = currentIdx === activeQuestions.length - 1;

    return (
      <div className="min-h-screen bg-slate-50 font-sans pb-20">
        {/* Header / Nav */}
        <div className="bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-3xl mx-auto px-4 py-4 flex justify-between items-center">
            <div>
              <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                SMA N 8 DUMAI • {student.kelas}
              </div>
              <div className="font-bold text-slate-800">{student.name}</div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-green-600">
                Soal {currentIdx + 1} / {activeQuestions.length}
              </div>
            </div>
          </div>
          {/* Progress Bar */}
          <div className="w-full bg-slate-100 h-1.5">
            <div
              className="bg-green-600 h-1.5 transition-all duration-300"
              style={{
                width: `${((currentIdx + 1) / activeQuestions.length) * 100}%`,
              }}
            ></div>
          </div>
        </div>

        {/* Question Container */}
        <div className="max-w-3xl mx-auto px-4 mt-8">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
            <div className="mb-2 text-sm font-bold text-green-600 bg-green-50 inline-block px-3 py-1 rounded-md">
              {q.section}
            </div>
            <h3 className="text-lg sm:text-xl font-medium text-slate-800 mt-3 mb-6 leading-relaxed">
              {currentIdx + 1}. {q.text}
            </h3>

            {/* Render Options based on Type */}
            <div className="space-y-3">
              {q.type === 'single' &&
                q.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswerSingle(i)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all flex gap-3
                    ${
                      answers[currentIdx] === i
                        ? 'border-green-500 bg-green-50'
                        : 'border-slate-200 hover:border-green-300 hover:bg-slate-50'
                    }
                  `}
                  >
                    <span
                      className={`font-bold shrink-0 ${
                        answers[currentIdx] === i
                          ? 'text-green-600'
                          : 'text-slate-500'
                      }`}
                    >
                      {getLabel(i)}.
                    </span>
                    <span className="text-slate-700">{opt}</span>
                  </button>
                ))}

              {q.type === 'multiple' && (
                <>
                  <div className="text-sm text-amber-600 font-medium mb-2 flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" />{' '}
                    <i>Pilih lebih dari satu jawaban benar.</i>
                  </div>
                  {q.options.map((opt, i) => {
                    const isChecked = (answers[currentIdx] || []).includes(i);
                    return (
                      <label
                        key={i}
                        className={`flex items-start gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all
                        ${
                          isChecked
                            ? 'border-green-500 bg-green-50'
                            : 'border-slate-200 hover:border-green-300 hover:bg-slate-50'
                        }
                      `}
                      >
                        <div className="mt-0.5 shrink-0">
                          <input
                            type="checkbox"
                            className="w-5 h-5 text-green-600 rounded focus:ring-green-500"
                            checked={isChecked}
                            onChange={() => handleAnswerMultiple(i)}
                          />
                        </div>
                        <span className="text-slate-700 leading-tight">
                          {opt}
                        </span>
                      </label>
                    );
                  })}
                </>
              )}

              {q.type === 'tf' && (
                <div className="overflow-x-auto border border-slate-200 rounded-lg">
                  <table className="w-full text-left border-collapse min-w-[500px]">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200">
                        <th className="p-3 font-semibold text-slate-700 w-3/5">
                          Pernyataan
                        </th>
                        <th className="p-3 font-semibold text-slate-700 text-center w-1/5">
                          Tepat
                        </th>
                        <th className="p-3 font-semibold text-slate-700 text-center w-1/5">
                          Tidak Tepat
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {q.statements.map((stmt, i) => (
                        <tr
                          key={i}
                          className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50"
                        >
                          <td className="p-3 text-slate-700">{stmt}</td>
                          <td className="p-3 text-center">
                            <input
                              type="radio"
                              name={`q${currentIdx}_s${i}`}
                              className="w-5 h-5 text-green-600 focus:ring-green-500"
                              checked={
                                (answers[currentIdx] || [])[i] === 'Tepat'
                              }
                              onChange={() => handleAnswerTF(i, 'Tepat')}
                            />
                          </td>
                          <td className="p-3 text-center">
                            <input
                              type="radio"
                              name={`q${currentIdx}_s${i}`}
                              className="w-5 h-5 text-green-600 focus:ring-green-500"
                              checked={
                                (answers[currentIdx] || [])[i] === 'Tidak Tepat'
                              }
                              onChange={() => handleAnswerTF(i, 'Tidak Tepat')}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={() => {
                setCurrentIdx(Math.max(0, currentIdx - 1));
                window.scrollTo(0, 0);
              }}
              disabled={currentIdx === 0}
              className={`flex items-center gap-2 px-5 py-3 rounded-lg font-medium transition-colors
                ${
                  currentIdx === 0
                    ? 'text-slate-400 bg-slate-200 cursor-not-allowed'
                    : 'text-slate-700 bg-white border border-slate-300 hover:bg-slate-50'
                }
              `}
            >
              <ChevronLeft className="w-5 h-5" /> Sebelumnya
            </button>

            {isLast ? (
              <button
                onClick={() => setShowConfirm(true)}
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-white bg-green-600 hover:bg-green-700 shadow-md transition-colors"
              >
                Cek Jawaban <CheckCircle2 className="w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={() => {
                  setCurrentIdx(
                    Math.min(activeQuestions.length - 1, currentIdx + 1)
                  );
                  window.scrollTo(0, 0);
                }}
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-white bg-green-600 hover:bg-green-700 shadow-md transition-colors"
              >
                Selanjutnya <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Modal Konfirmasi */}
        {showConfirm && (
          <div className="fixed inset-0 bg-slate-900/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl p-6 max-w-sm w-full text-center shadow-2xl">
              <div className="w-16 h-16 bg-amber-100 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                Cek Hasil?
              </h3>
              <p className="text-slate-600 mb-6 text-sm">
                Apakah Anda yakin ingin menyelesaikan kuis ini? Pastikan semua
                soal telah terjawab.
              </p>
              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => setShowConfirm(false)}
                  className="flex-1 py-3 rounded-lg font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  Batal
                </button>
                <button
                  onClick={() => {
                    setShowConfirm(false);
                    calculateScore();
                  }}
                  className="flex-1 py-3 rounded-lg font-bold text-white bg-green-600 hover:bg-green-700 transition-colors"
                >
                  Ya, Hitung
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // --- VIEW: RESULT ---
  if (step === 'result') {
    return (
      <div className="min-h-screen bg-slate-50 p-4 py-10 font-sans">
        <div className="max-w-2xl mx-auto">
          {/* Result Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 mb-8 text-center">
            <div className="bg-green-600 p-8 text-white relative">
              <Award className="w-16 h-16 mx-auto mb-4 opacity-90" />
              <h1 className="text-3xl font-bold mb-2">Kuis Selesai!</h1>
              <p className="text-green-100 text-lg">
                Berikut adalah hasil pekerjaan Anda.
              </p>

              <svg
                className="absolute -bottom-1 left-0 w-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                <path
                  fill="#ffffff"
                  fillOpacity="1"
                  d="M0,128L48,138.7C96,149,192,171,288,170.7C384,171,480,149,576,144C672,139,768,149,864,170.7C960,192,1056,224,1152,224C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
            </div>

            <div className="p-8 pt-4">
              <div className="grid grid-cols-2 gap-4 mb-8 text-left">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <div className="text-sm text-slate-500 font-medium">
                    Siswa
                  </div>
                  <div className="font-bold text-slate-800">{student.name}</div>
                  <div className="text-sm text-slate-600">{student.nis}</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <div className="text-sm text-slate-500 font-medium">
                    Kelas
                  </div>
                  <div className="font-bold text-slate-800">
                    {student.kelas}
                  </div>
                  <div className="text-sm text-slate-600">SMA N 8 Dumai</div>
                </div>
              </div>

              <div className="flex justify-center items-center gap-12 mb-8">
                <div className="text-center">
                  <div className="text-6xl font-black text-green-600">
                    {scoreData.score}
                  </div>
                  <div className="text-sm font-bold text-slate-400 mt-1 uppercase tracking-widest">
                    Skor Akhir
                  </div>
                </div>
                <div className="h-16 w-px bg-slate-200"></div>
                <div className="text-left space-y-2">
                  <div className="flex items-center gap-2 text-green-600 font-medium">
                    <CheckCircle2 className="w-5 h-5" /> {scoreData.correct}{' '}
                    Benar
                  </div>
                  <div className="flex items-center gap-2 text-red-500 font-medium">
                    <XCircle className="w-5 h-5" />{' '}
                    {scoreData.total - scoreData.correct} Salah
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 text-left flex gap-4 mb-6">
                <Send className="w-8 h-8 text-blue-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-blue-900 text-sm">
                    Kirim Nilai Otomatis
                  </h4>
                  <p className="text-blue-800 text-sm mt-1 mb-3">
                    Klik tombol di bawah ini untuk mengirim hasil Anda langsung
                    ke *database* Bapak/Ibu Guru.
                  </p>

                  {submitSuccess ? (
                    <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1.5 rounded-md text-sm font-bold border border-green-300">
                      <CheckCircle2 className="w-4 h-4" /> Nilai Berhasil
                      Terkirim!
                    </div>
                  ) : (
                    <button
                      onClick={submitToSpreadsheet}
                      disabled={isSubmitting}
                      className={`inline-flex justify-center items-center gap-2 font-bold py-2 px-4 rounded-md transition-colors text-sm
                        ${
                          isSubmitting
                            ? 'bg-blue-300 text-blue-800 cursor-not-allowed'
                            : 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm'
                        }`}
                    >
                      {isSubmitting
                        ? 'Mengirim Data...'
                        : 'Kirim Nilai ke Guru Sekarang'}
                    </button>
                  )}
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={generateCSV}
                  className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 px-4 rounded-lg transition-colors flex justify-center items-center gap-2 text-sm border border-slate-300"
                >
                  <Download className="w-4 h-4" /> Unduh CSV Cadangan
                </button>
                <button
                  onClick={() => window.location.reload()}
                  className="px-6 py-3 bg-red-50 hover:bg-red-100 text-red-600 font-bold rounded-lg transition-colors border border-red-200 text-sm"
                >
                  Ulangi
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
