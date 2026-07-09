export interface IssueFAQ {
  q: string
  a: string
}

export interface IssueData {
  slug: string
  title: string
  category: string
  coverImage?: string
  summary: string
  intro: string
  overview: string
  whyItMatters: string
  currentChallenges: string[]
  classicalLiberal: string
  recommendations: string[]
  faqs: IssueFAQ[]
  furtherReading: { label: string; url: string }[]
}

export const issues: IssueData[] = [
  {
    slug: 'bumn-kapitalisme-negara',
    title: 'Badan Usaha Milik Negara dan Kapitalisme Negara',
    category: 'Ekonomi & Persaingan',
    coverImage: '/isu/bumn.png',
    summary: 'Badan Usaha Milik Negara (BUMN) terus memainkan peran besar dalam perekonomian Indonesia. Meskipun dimaksudkan untuk mendukung pembangunan nasional, kepemilikan pemerintah dapat mengurangi persaingan, mendorong pengaruh politik, dan membatasi inovasi. Isu ini membahas bagaimana pasar yang kompetitif dapat melayani konsumen dan pembayar pajak dengan lebih baik.',
    intro: 'Indonesia memiliki salah satu sektor badan usaha milik negara terbesar di Asia Tenggara, dengan lebih dari 100 BUMN yang beroperasi di bidang energi, perbankan, infrastruktur, telekomunikasi, dan pertanian. Memahami peran dan kinerja badan-badan usaha ini penting untuk mengevaluasi strategi pembangunan ekonomi Indonesia.',
    overview: 'Sejak kemerdekaan, badan usaha milik negara telah menjadi bagian sentral dari model ekonomi Indonesia. Undang-Undang Dasar 1945, khususnya Pasal 33, mengabadikan gagasan bahwa cabang-cabang produksi yang “penting bagi negara” dan yang menguasai hajat hidup orang banyak harus dikuasai oleh negara. Selama beberapa dekade, prinsip ini ditafsirkan secara luas, sehingga membenarkan kepemilikan pemerintah di berbagai sektor, mulai dari industri semen hingga jaringan hotel.\n\nKementerian Badan Usaha Milik Negara mengawasi portofolio ini, yang secara kolektif mempekerjakan ratusan ribu orang dan memberikan kontribusi signifikan terhadap produk domestik bruto. BUMN besar mencakup Pertamina di bidang energi, Bank Mandiri dan BRI di bidang perbankan, Telkom di bidang telekomunikasi, serta PLN di bidang ketenagalistrikan. Sebagian telah tercatat di bursa, sementara yang lain tetap sepenuhnya dimiliki oleh negara.\n\nSecara historis, BUMN dibentuk untuk mengisi kekosongan ketika modal swasta tidak mencukupi atau tidak bersedia berinvestasi. Namun, seiring dengan semakin matangnya sektor swasta Indonesia, alasan awal keberadaan banyak badan usaha tersebut menjadi semakin lemah.',
    whyItMatters: 'Kinerja BUMN secara langsung memengaruhi kesehatan fiskal Indonesia, kesejahteraan konsumen, dan daya saing ekonomi. Ketika badan usaha milik negara beroperasi secara tidak efisien atau menerima perlakuan istimewa, biaya tersebut ditanggung oleh pembayar pajak melalui subsidi, oleh konsumen melalui harga yang lebih tinggi, serta oleh calon pesaing yang tersingkir dari pasar.\n\nModal yang dialokasikan kepada BUMN berkinerja rendah mencerminkan biaya peluang, karena sumber daya tersebut dapat digunakan untuk pendidikan, layanan kesehatan, atau infrastruktur. Penunjukan politik pada dewan BUMN dapat mengutamakan patronase dibandingkan kompetensi, sementara jaminan pemerintah yang tersirat mengurangi disiplin yang biasanya dipaksakan oleh persaingan pasar.',
    currentChallenges: [
      'Beberapa BUMN telah mengakumulasi kerugian yang signifikan sehingga membutuhkan penyertaan modal berulang dari anggaran negara. Garuda Indonesia, maskapai nasional, memerlukan restrukturisasi besar setelah mengakumulasi kewajiban lebih dari USD 9 miliar.',
      'Pengaruh politik dalam penunjukan manajemen masih lazim terjadi. Posisi dewan BUMN kerap dialokasikan berdasarkan hubungan politik, bukan kualifikasi profesional, sehingga memengaruhi efisiensi operasional.',
      'BUMN sering menikmati keunggulan regulasi, termasuk lisensi eksklusif, akses istimewa terhadap kontrak pemerintah, dan jaminan pinjaman tersirat, yang tidak dapat diakses oleh pesaing swasta, sehingga mendistorsi persaingan pasar.',
      'Standar transparansi dan akuntabilitas BUMN sering tertinggal dibandingkan standar yang diwajibkan bagi perusahaan terbuka, sehingga menyulitkan masyarakat untuk menilai apakah uang pajak mereka digunakan secara efektif.',
      'Kebijakan “sinergi” wajib yang mengharuskan BUMN melakukan transaksi satu sama lain dapat menghasilkan harga di atas harga pasar dan mengurangi insentif untuk mencari pemasok yang paling efisien.'
    ],
    classicalLiberal: 'Prinsip-prinsip liberal klasik menunjukkan bahwa aktivitas ekonomi pada umumnya paling baik diorganisasi melalui pertukaran sukarela dalam pasar yang kompetitif. Ketika pemerintah memiliki dan menjalankan usaha, pemerintah menghadapi konflik kepentingan yang melekat, yaitu bertindak sekaligus sebagai regulator, pesaing, dan pemilik.\n\nSupremasi hukum menuntut agar seluruh pelaku pasar beroperasi di bawah kerangka hukum yang sama. Ketika BUMN menerima perlakuan regulasi istimewa atau jaminan tersirat, hal tersebut melanggar prinsip perlakuan yang setara di hadapan hukum.\n\nPemerintahan yang terbatas tidak berarti nihilnya keterlibatan pemerintah dalam perekonomian, tetapi mengisyaratkan bahwa kepemilikan negara seharusnya menjadi pengecualian, bukan aturan umum, dan hanya dapat dibenarkan ketika terdapat kegagalan pasar yang nyata serta tidak dapat diatasi melalui regulasi yang lebih baik.\n\nHak milik pribadi dan kebebasan berusaha tergerus ketika negara menggunakan kekuasaan regulasinya untuk melindungi kepentingan komersialnya sendiri dengan mengorbankan pesaing swasta.',
    recommendations: [
      'Melakukan peninjauan independen terhadap setiap BUMN untuk menentukan apakah kelanjutan kepemilikan negara melayani kepentingan publik yang jelas dan tidak dapat dicapai melalui regulasi terhadap perusahaan swasta.',
      'Bagi BUMN yang tetap dimiliki negara, menerapkan reformasi tata kelola, termasuk penunjukan dewan secara independen, standar pelaporan transparan yang setara dengan perusahaan terbuka, serta tolok ukur kinerja yang jelas.',
      'Membuka sektor-sektor monopoli secara bertahap bagi persaingan swasta, dimulai dari industri yang telah menunjukkan kapasitas oleh beberapa perusahaan swasta, seperti telekomunikasi dan perbankan.',
      'Menghapus keunggulan regulasi yang dinikmati BUMN dibandingkan pesaing swasta, termasuk lisensi eksklusif dan akses istimewa terhadap kontrak pemerintah.',
      'Membentuk kerangka kerja yang transparan untuk privatisasi sebagian atau penuh terhadap BUMN yang beroperasi di sektor kompetitif, dengan hasilnya diarahkan untuk infrastruktur publik atau pengurangan utang.'
    ],
    faqs: [
      { q: 'Apakah privatisasi berarti menjual aset nasional kepada pihak asing?', a: 'Privatisasi dapat mengambil berbagai bentuk, termasuk pencatatan saham di Bursa Efek Indonesia yang memungkinkan warga negara Indonesia menjadi pemegang saham. Banyak negara telah berhasil memprivatisasi badan usaha milik negara sambil mempertahankan kepemilikan domestik melalui pencatatan di pasar saham dan pembatasan kepemilikan.' },
      { q: 'Bukankah BUMN menyediakan layanan penting yang tidak akan disediakan oleh sektor swasta?', a: 'Dalam beberapa kasus, penyediaan oleh negara dapat dibenarkan, khususnya untuk monopoli alamiah atau layanan di daerah terpencil. Namun, banyak BUMN beroperasi di sektor yang memiliki persaingan swasta yang kuat. Pertanyaannya bukan apakah suatu layanan harus ada, melainkan apakah kepemilikan pemerintah merupakan cara paling efisien untuk menyediakannya.' },
      { q: 'Bukankah privatisasi akan menyebabkan kehilangan pekerjaan?', a: 'Bukti dari privatisasi di berbagai negara menunjukkan hasil yang beragam. Transisi yang dikelola dengan baik sering kali menghasilkan penciptaan lapangan kerja ketika perusahaan menjadi lebih kompetitif dan berkembang. Kuncinya adalah memastikan dukungan transisi yang memadai sambil mengakui bahwa melindungi pekerjaan yang tidak efisien tanpa batas waktu menimbulkan biaya bagi perekonomian yang lebih luas.' },
      { q: 'Bagaimana dengan Pasal 33 Undang-Undang Dasar?', a: 'Pasal 33 menyatakan bahwa cabang produksi yang penting bagi negara dan menguasai hajat hidup orang banyak harus “dikuasai” oleh negara. Para ahli hukum berbeda pandangan mengenai apakah “dikuasai” selalu berarti “dimiliki.” Regulasi, perizinan, dan pengawasan merupakan bentuk penguasaan negara yang tidak mensyaratkan kepemilikan langsung.' }
    ],
    furtherReading: [
      { label: 'Bank Dunia — Badan Usaha Milik Negara di Indonesia', url: 'https://www.worldbank.org/en/country/indonesia' },
      { label: 'OECD — Pedoman Tata Kelola Perusahaan untuk Badan Usaha Milik Negara', url: 'https://www.oecd.org/corporate/guidelines-corporate-governance-soes.htm' },
      { label: 'Asia Foundation — Agenda Reformasi BUMN Indonesia', url: 'https://asiafoundation.org' }
    ]
  },
  {
    slug: 'perdagangan-bebas',
    title: 'Perdagangan Bebas dan Pasar Terbuka',
    category: 'Perdagangan',
    coverImage: '/isu/free-trade.png',
    summary: 'Perdagangan memungkinkan konsumen memperoleh produk yang lebih baik dengan harga yang lebih rendah, sekaligus membantu dunia usaha bersaing secara global. Isu ini mengkaji bagaimana pembatasan impor, kebijakan proteksionis, dan hambatan perdagangan memengaruhi pertumbuhan ekonomi Indonesia serta kesejahteraan konsumen.',
    intro: 'Perdagangan internasional telah menjadi salah satu mesin kemakmuran paling kuat dalam sejarah manusia. Bagi Indonesia, negara kepulauan berpenduduk 280 juta jiwa yang terletak strategis di antara Samudra Pasifik dan Samudra Hindia, pilihan kebijakan perdagangan memiliki implikasi besar bagi pertumbuhan ekonomi, pengurangan kemiskinan, dan kesejahteraan konsumen.',
    overview: 'Kebijakan perdagangan Indonesia telah berayun antara keterbukaan dan proteksionisme sejak kemerdekaan. Pada era Soeharto, terjadi liberalisasi perdagangan yang signifikan pada 1980-an dan 1990-an, yang berkontribusi terhadap pertumbuhan ekonomi yang pesat. Namun, setelah Krisis Keuangan Asia 1998, sentimen proteksionis kembali menguat.\n\nSaat ini, Indonesia mempertahankan sistem hambatan perdagangan yang kompleks, termasuk tarif, persyaratan perizinan impor, persyaratan tingkat kandungan dalam negeri, dan hambatan non-tarif. Rata-rata tarif yang diterapkan tergolong moderat menurut standar global, tetapi langkah-langkah non-tarif, termasuk inspeksi pra-pengapalan, kuota impor, dan standar nasional wajib, secara signifikan meningkatkan biaya efektif perdagangan.\n\nIndonesia berpartisipasi dalam perjanjian perdagangan bebas ASEAN dan memiliki perjanjian bilateral dengan sejumlah negara. Namun, Indonesia lebih lambat dibandingkan negara-negara kawasan seperti Vietnam dan Thailand dalam merangkul liberalisasi perdagangan yang komprehensif.',
    whyItMatters: 'Pembatasan perdagangan berfungsi sebagai pajak tersembunyi bagi konsumen. Ketika hambatan impor menaikkan harga barang, mulai dari bahan pangan pokok hingga input industri, masyarakat Indonesia biasa yang menanggung harga lebih tinggi. Bagi rumah tangga berpendapatan rendah yang membelanjakan porsi lebih besar dari pendapatannya untuk kebutuhan dasar, biaya ini sangat memberatkan.\n\nProteksionisme juga merugikan eksportir Indonesia dengan menaikkan biaya input impor yang mereka butuhkan untuk bersaing secara global. Produsen yang harus membayar harga di atas harga pasar untuk baja atau komponen akibat pembatasan impor menjadi kurang kompetitif di pasar ekspor.\n\nSelain itu, keterbukaan perdagangan mendorong transfer teknologi, penyebaran pengetahuan, dan tekanan kompetitif yang memacu perusahaan domestik untuk berinovasi serta meningkatkan produktivitas.',
    currentChallenges: [
      'Hambatan non-tarif Indonesia meningkat secara signifikan dalam beberapa tahun terakhir. Persyaratan perizinan impor, standar nasional wajib (SNI), dan persyaratan sertifikasi halal menambah biaya dan ketidakpastian bagi pelaku perdagangan.',
      'Persyaratan tingkat kandungan dalam negeri di berbagai sektor, termasuk telekomunikasi, energi, dan pengadaan pemerintah, memaksa perusahaan menggunakan input produksi domestik meskipun lebih mahal atau berkualitas lebih rendah.',
      'Pembatasan impor pangan, termasuk beras, gula, daging sapi, dan produk hortikultura, berkontribusi pada harga pangan yang termasuk paling tinggi di kawasan relatif terhadap tingkat pendapatan.',
      'Peringkat Indonesia dalam indikator fasilitasi perdagangan masih berada di bawah negara-negara kawasan, dengan waktu penyelesaian kepabeanan dan persyaratan dokumen yang menambah biaya signifikan bagi usaha kecil dan menengah.',
      'Meningkatnya larangan ekspor bahan mentah, termasuk bijih nikel, bertujuan mendorong pengolahan domestik, tetapi menaikkan biaya bagi pengguna hilir dan mengundang tindakan balasan dari mitra dagang.'
    ],
    classicalLiberal: 'Perdagangan bebas merupakan salah satu prinsip paling mapan dalam ilmu ekonomi. Sejak Adam Smith dan David Ricardo, para ekonom telah menunjukkan bahwa pertukaran sukarela lintas batas menciptakan keuntungan bersama melalui spesialisasi dan keunggulan komparatif.\n\nArgumen liberal klasik untuk perdagangan bebas bertumpu pada kebebasan individu: masyarakat seharusnya bebas membeli dari dan menjual kepada siapa pun yang mereka pilih, tanpa memandang batas negara. Ketika pemerintah membatasi perdagangan, pemerintah mengesampingkan pilihan sukarela konsumen dan produsen, biasanya demi menguntungkan industri yang memiliki koneksi politik dengan mengorbankan masyarakat luas.\n\nSupremasi hukum menuntut agar kebijakan perdagangan bersifat dapat diprediksi, transparan, dan diterapkan secara setara. Perizinan impor yang diskresioner, ketika birokrat menentukan siapa yang boleh mengimpor dan berapa banyak, menciptakan peluang korupsi dan perburuan rente.\n\nPemerintahan yang terbatas mengakui bahwa negara tidak memiliki informasi yang diperlukan untuk menentukan industri mana yang harus dilindungi dan mana yang harus menghadapi persaingan. Kebijakan industri, betapapun baik niatnya, memusatkan pengambilan keputusan ekonomi di tangan pejabat yang menghadapi insentif politik, bukan sinyal pasar.',
    recommendations: [
      'Mengurangi dan menyederhanakan struktur tarif, menuju tarif rendah yang seragam untuk meminimalkan distorsi ekonomi sambil tetap mempertahankan penerimaan negara.',
      'Mengubah hambatan non-tarif, seperti lisensi impor dan kuota, menjadi ekuivalen tarif yang transparan dan dapat dikurangi secara bertahap berdasarkan jadwal yang dipublikasikan.',
      'Mereformasi kebijakan impor pangan untuk menurunkan harga konsumen, khususnya untuk barang pokok yang secara tidak proporsional memengaruhi rumah tangga berpendapatan rendah.',
      'Mempercepat modernisasi kepabeanan dan reformasi fasilitasi perdagangan guna mengurangi waktu penyelesaian dan biaya kepatuhan, khususnya bagi UKM.',
      'Mengejar perjanjian perdagangan bebas yang komprehensif dengan mitra dagang utama, disertai proses konsultasi publik yang transparan dan dukungan penyesuaian bagi pekerja terdampak.'
    ],
    faqs: [
      { q: 'Bukankah perdagangan bebas akan menghancurkan lapangan kerja Indonesia?', a: 'Perdagangan menciptakan dan menghilangkan pekerjaan secara bersamaan. Ia menghilangkan pekerjaan di sektor yang kurang kompetitif, tetapi menciptakan pekerjaan di sektor yang lebih kompetitif. Bukti selama beberapa dekade menunjukkan dampak bersih yang positif: negara yang lebih banyak berdagang cenderung memiliki tingkat pekerjaan dan upah yang lebih tinggi. Tantangannya adalah memastikan pekerja dapat berpindah antar-sektor, yang membutuhkan investasi dalam pendidikan dan pasar tenaga kerja yang fleksibel.' },
      { q: 'Bukankah kita perlu melindungi industri bayi?', a: 'Argumen industri bayi memiliki dasar teoretis, tetapi rekam jejak praktisnya lemah. Industri yang dilindungi jarang “tumbuh dewasa” karena perlindungan menghilangkan tekanan kompetitif untuk memperbaiki diri. Selain itu, pemerintah tidak memiliki informasi yang andal untuk mengidentifikasi industri mana yang akan menjadi kompetitif. Strategi berorientasi ekspor Vietnam telah menghasilkan perkembangan industri yang lebih cepat dibandingkan pendekatan Indonesia yang lebih proteksionis.' },
      { q: 'Bagaimana dengan ketahanan pangan?', a: 'Ketahanan pangan paling baik dicapai melalui sumber pasokan yang beragam, bukan swasembada. Negara yang membatasi impor pangan menjadi lebih rentan terhadap gagal panen domestik. Singapura dan Jepang memiliki ketahanan pangan yang tinggi meskipun mengimpor sebagian besar pangannya, karena mereka menjaga hubungan dagang yang beragam dan memiliki cadangan devisa yang memadai.' },
      { q: 'Bukankah Indonesia perlu naik ke rantai nilai yang lebih tinggi?', a: 'Naik ke rantai nilai yang lebih tinggi memang diinginkan, tetapi larangan ekspor bahan mentah merupakan cara yang mahal untuk mencapainya. Pengolahan hilir berkembang paling baik ketika perusahaan memiliki akses terhadap input yang terjangkau, termasuk impor, tenaga kerja terampil, infrastruktur andal, dan tekanan kompetitif. Memaksakan pengolahan melalui larangan ekspor sering menghasilkan operasi yang tidak efisien dan hanya bertahan karena keunggulan biaya buatan akibat ditekanannya harga bahan mentah.' }
    ],
    furtherReading: [
      { label: 'Organisasi Perdagangan Dunia — Tinjauan Kebijakan Perdagangan Indonesia', url: 'https://www.wto.org/english/tratop_e/tpr_e/tp_rep_e.htm' },
      { label: 'CSIS Indonesia — Ringkasan Kebijakan Perdagangan', url: 'https://www.csis.or.id' },
      { label: 'Frédéric Bastiat — Economic Sophisms tentang Proteksionisme', url: 'https://oll.libertyfund.org/titles/bastiat-economic-sophisms' }
    ]
  },
  {
    slug: 'hak-properti-tanah',
    title: 'Hak Kepemilikan Properti dan Kepemilikan Tanah',
    category: 'Hak Milik',
    coverImage: '/isu/property-right.png',
    summary: 'Hak kepemilikan properti yang aman memberikan fondasi bagi investasi, kewirausahaan, dan kebebasan individu. Isu ini membahas kepemilikan tanah, pengadaan tanah secara wajib, hak masyarakat adat, serta pentingnya kepastian hukum bagi kemakmuran jangka panjang.',
    intro: 'Hak kepemilikan properti merupakan fondasi kelembagaan yang menjadi dasar bagi pasar, investasi, dan otonomi individu. Di Indonesia, penguasaan dan kepemilikan tanah tetap menjadi salah satu bidang hukum dan kebijakan yang paling kompleks serta paling diperdebatkan, karena memengaruhi jutaan keluarga, pelaku usaha, dan komunitas di seluruh kepulauan Indonesia.',
    overview: 'Sistem tata kelola pertanahan Indonesia dibentuk oleh Undang-Undang Pokok Agraria Tahun 1960 (UUPA), yang menetapkan prinsip bahwa seluruh tanah pada akhirnya dikuasai oleh negara dan diberikan kepada individu atau badan hukum melalui berbagai bentuk hak penguasaan. Bentuk-bentuk utama tersebut mencakup Hak Milik, yaitu hak kepemilikan penuh yang hanya dapat dimiliki oleh warga negara Indonesia; Hak Guna Bangunan, yaitu hak untuk mendirikan dan memiliki bangunan yang dapat diperpanjang; serta Hak Guna Usaha, yaitu hak untuk mengusahakan tanah, terutama untuk kegiatan perkebunan.\n\nHanya sekitar 30% bidang tanah di Indonesia yang telah terdaftar dan bersertifikat secara formal. Sementara itu, sekitar 70% sisanya masih bergantung pada klaim adat, catatan tingkat desa, atau pengaturan informal. Kesenjangan antara hukum formal dan realitas di lapangan ini menciptakan ketidakpastian yang sangat besar.\n\nUndang-Undang Cipta Kerja Tahun 2020 berupaya menyederhanakan administrasi pertanahan, tetapi tetap menimbulkan kontroversi. Hak atas tanah adat memperoleh pengakuan konstitusional melalui putusan Mahkamah Konstitusi pada tahun 2013, tetapi implementasinya masih berjalan lambat.',
    whyItMatters: 'Tanpa hak kepemilikan properti yang aman, individu tidak dapat menggunakan aset mereka sebagai agunan untuk memperoleh pinjaman, tidak dapat berinvestasi secara percaya diri untuk meningkatkan nilai tanahnya, serta tetap rentan terhadap pengambilalihan. Ekonom Hernando de Soto memperkirakan bahwa negara-negara berkembang memiliki aset bernilai triliunan dolar AS dalam bentuk “modal mati”, yaitu aset yang tidak dapat dimanfaatkan secara produktif karena tidak memiliki pengakuan hukum formal.\n\nSengketa tanah merupakan salah satu sumber konflik sosial yang paling umum di Indonesia. Badan Pertanahan Nasional (BPN) menangani ratusan ribu sengketa setiap tahun, banyak di antaranya berlangsung selama bertahun-tahun atau bahkan puluhan tahun. Konflik-konflik ini menghambat investasi, merusak mata pencaharian, dan dalam beberapa kasus berujung pada kekerasan.\n\nBagi dunia usaha, ketidakpastian status penguasaan tanah meningkatkan premi risiko dan biaya transaksi, sehingga menghambat investasi domestik maupun asing, terutama di sektor pertanian, manufaktur, dan infrastruktur.',
    currentChallenges: [
      'Sebagian besar tanah di Indonesia masih belum terdaftar. Program Pendaftaran Tanah Sistematis Lengkap (PTSL) yang dijalankan pemerintah telah menunjukkan kemajuan, tetapi masih menghadapi tantangan terkait akurasi data, keterbatasan anggaran, dan tumpang tindih klaim.',
      'Pengadaan tanah secara wajib untuk proyek infrastruktur dan kawasan industri sering kali menghasilkan kompensasi yang tidak memadai bagi masyarakat terdampak. Undang-Undang Pengadaan Tanah Tahun 2012 menyediakan kerangka hukum, tetapi implementasinya sangat bervariasi di lapangan.',
      'Tumpang tindih kewenangan antara lembaga nasional, seperti BPN, Kementerian Kehutanan, dan pemerintah daerah, menciptakan konflik yurisdiksi serta klasifikasi tanah yang saling bertentangan. Satu bidang tanah dapat diklasifikasikan secara berbeda oleh lembaga yang berbeda.',
      'Hak atas tanah adat, meskipun telah diakui secara konstitusional, belum memiliki mekanisme implementasi yang jelas. Masyarakat adat masih menghadapi tekanan berkelanjutan dari perusahaan perkebunan, kegiatan pertambangan, dan proyek infrastruktur.',
      'Pembatasan kepemilikan tanah oleh warga negara asing, meskipun dimaksudkan untuk melindungi kedaulatan nasional, menciptakan struktur penghindaran yang kompleks, seperti penggunaan nominee atau perusahaan berlapis, yang justru mengurangi transparansi dan kepastian hukum bagi semua pihak.'
    ],
    classicalLiberal: 'Hak kepemilikan pribadi merupakan fondasi utama dalam pemikiran liberal klasik. John Locke berpendapat bahwa individu memiliki hak alamiah atas hasil kerja mereka, termasuk tanah yang telah mereka perbaiki dan olah. Hak kepemilikan yang aman menciptakan insentif bagi investasi jangka panjang, pengelolaan yang bertanggung jawab, dan pemanfaatan sumber daya secara produktif.\n\nSupremasi hukum menuntut agar hak kepemilikan didefinisikan secara jelas, dicatat secara terbuka, dan dapat ditegakkan melalui pengadilan yang imparsial. Ketika penguasaan tanah bergantung pada koneksi politik, diskresi birokrasi, atau pendudukan fisik semata, bukan pada hak hukum yang sah, maka supremasi hukum menjadi lemah.\n\nPemerintahan yang terbatas berarti negara seharusnya melindungi hak kepemilikan, bukan bertindak sebagai pemilik akhir atas seluruh tanah. Meskipun eminent domain atau pengadaan tanah secara wajib kadang-kadang dapat diperlukan untuk tujuan publik yang benar-benar sah, tindakan tersebut harus tunduk pada batasan hukum yang ketat, kompensasi yang adil, serta peninjauan oleh pengadilan.\n\nKebebasan individu tidak dapat dipisahkan dari hak kepemilikan properti. Seseorang yang dapat dipindahkan dari rumah atau tanahnya atas diskresi pejabat, tanpa proses hukum yang semestinya atau kompensasi yang adil, tidak benar-benar menikmati kebebasan yang sejati.',
    recommendations: [
      'Mempercepat pendaftaran tanah dengan menitikberatkan pada akurasi dan penyelesaian sengketa. Pemerintah perlu berinvestasi dalam sistem kadaster digital yang mengurangi tumpang tindih dan memungkinkan akses publik yang transparan terhadap catatan pertanahan.',
      'Memperkuat perlindungan hukum terhadap pengadaan tanah secara wajib, termasuk persyaratan adanya tujuan publik yang nyata, penilaian independen, kompensasi berdasarkan nilai pasar, serta akses yang mudah terhadap peninjauan oleh pengadilan.',
      'Mengimplementasikan pengakuan Mahkamah Konstitusi terhadap hak tanah adat melalui legislasi yang jelas, sehingga masyarakat adat dapat secara formal mendaftarkan dan melindungi wilayah adat mereka.',
      'Membentuk sistem informasi pertanahan terpadu yang menyelesaikan kontradiksi antar-klasifikasi lembaga dan menyediakan satu catatan otoritatif untuk setiap bidang tanah.',
      'Mereformasi perpajakan terkait tanah untuk mendorong pemanfaatan tanah terdaftar secara produktif, sekaligus mengurangi insentif bagi kepemilikan spekulatif atas tanah yang tidak dikembangkan.'
    ],
    faqs: [
      {
        q: 'Apakah warga negara asing seharusnya diperbolehkan memiliki tanah di Indonesia?',
        a: 'Hal ini pada akhirnya merupakan pilihan kebijakan yang melibatkan berbagai pertukaran kepentingan. Pembatasan kepemilikan asing dapat melindungi negara dari gelembung spekulatif, tetapi juga dapat menghambat investasi dan menciptakan struktur nominee yang tidak transparan. Banyak negara memperbolehkan kepemilikan tanah oleh warga negara asing dengan pengamanan yang wajar, seperti batasan luas kepemilikan, pembatasan atas tanah pertanian, atau persyaratan domisili, tanpa mengorbankan kedaulatan nasional.'
      },
      {
        q: 'Bagaimana dengan reforma agraria dan redistribusi tanah?',
        a: 'Prinsip liberal klasik mendukung hak kepemilikan yang aman bagi semua pihak, termasuk petani kecil. Ketidakadilan historis dalam distribusi tanah memang nyata, tetapi redistribusi paksa dapat menciptakan ketidakadilan dan ketidakpastian baru. Pendekatan yang lebih efektif mencakup pengamanan hak bagi para penghuni atau penggarap saat ini, jaminan kompensasi yang adil dalam sengketa, serta penyediaan jalur yang mudah diakses untuk memperoleh hak kepemilikan formal.'
      },
      {
        q: 'Bukankah hak kepemilikan yang kuat akan menguntungkan orang kaya dengan mengorbankan masyarakat miskin?',
        a: 'Yang lebih sering terjadi justru sebaliknya. Individu yang kaya dan memiliki koneksi politik dapat melindungi kepentingan mereka meskipun sistem hukum formal lemah. Masyarakat miskin dan kelompok termarginalkanlah yang paling diuntungkan dari hak kepemilikan yang jelas dan dapat ditegakkan, karena tanpa hak tersebut mereka tidak memiliki perlindungan hukum terhadap pengambilalihan.'
      },
      {
        q: 'Bagaimana hubungan antara hak kepemilikan properti dan perlindungan lingkungan?',
        a: 'Hak kepemilikan yang jelas dapat mendukung perlindungan lingkungan dengan menciptakan akuntabilitas. Ketika tanah tidak terdaftar dan status penguasaannya tidak pasti, tidak ada pihak yang memiliki insentif jangka panjang untuk berinvestasi dalam pengelolaan yang berkelanjutan. Hak formal, apabila dikombinasikan dengan regulasi lingkungan yang wajar, dapat menyelaraskan insentif pribadi dengan tujuan konservasi.'
      }
    ],
    furtherReading: [
      { label: 'Hernando de Soto — The Mystery of Capital', url: 'https://www.hernandodesoto.com' },
      { label: 'World Bank — Indonesia Land Administration', url: 'https://www.worldbank.org/en/country/indonesia' },
      { label: 'Arizona Journal of International & Comparative Law — Indonesian Land Law', url: 'https://arizonajournal.org' }
    ]
  },
  {
    slug: 'kebebasan-digital',
    title: 'Kebebasan Digital dan Kebebasan Berekspresi',
    category: 'Kebebasan Digital',
    coverImage: '/isu/digital-freedom.png',
    summary: 'Internet telah menjadi sarana penting bagi komunikasi, inovasi, dan kegiatan usaha. Isu ini membahas sensor daring, regulasi platform, privasi digital, serta pentingnya melindungi kebebasan berekspresi pada era digital.',
    intro: 'Internet telah mengubah cara masyarakat Indonesia berkomunikasi, menjalankan usaha, mengakses informasi, dan berpartisipasi dalam kehidupan publik. Dengan lebih dari 210 juta pengguna internet, Indonesia merupakan salah satu pasar digital terbesar di dunia. Cara pemerintah mengatur ruang digital ini memiliki implikasi yang sangat besar terhadap kebebasan individu, inovasi ekonomi, dan akuntabilitas demokratis.',
    overview: 'Lanskap regulasi digital Indonesia terutama dibentuk oleh Undang-Undang Informasi dan Transaksi Elektronik Tahun 2008 (UU ITE), yang telah beberapa kali diubah. Undang-undang ini mengkriminalisasi pencemaran nama baik, distribusi konten yang dianggap “melanggar kesusilaan”, serta penyebaran informasi yang dianggap palsu atau menyesatkan. UU ITE telah menjadi salah satu instrumen hukum yang paling sering digunakan terhadap jurnalis, aktivis, dan warga biasa.\n\nKementerian Komunikasi dan Informatika (Kominfo) mengelola pemblokiran konten serta persyaratan pendaftaran platform. Pada tahun 2022, pemerintah menerapkan kewajiban pendaftaran bagi seluruh platform digital melalui regulasi Penyelenggara Sistem Elektronik (PSE), yang mewajibkan platform untuk menghapus konten dalam hitungan jam setelah adanya permintaan pemerintah atau menghadapi pemblokiran.\n\nIndonesia juga memblokir ribuan situs web, termasuk situs yang berkaitan dengan perjudian, pornografi, dan konten politik yang dianggap separatis. Infrastruktur pemblokiran tersebut tidak memiliki kriteria yang transparan, pengawasan yudisial, maupun proses banding yang konsisten.',
    whyItMatters: 'Kebebasan berekspresi sangat penting bagi tata kelola demokratis, kemajuan ilmu pengetahuan, dan martabat individu. Ketika pemerintah dapat membungkam kritik, mengendalikan arus informasi, atau menghukum ujaran yang tidak populer, mekanisme akuntabilitas akan melemah dan kecenderungan otoritarian dapat menguat.\n\nSensor digital juga memiliki biaya ekonomi langsung. Ketidakpastian mengenai ujaran apa yang diperbolehkan menciptakan efek gentar terhadap jurnalisme, penelitian akademik, dan industri kreatif. Persyaratan pendaftaran platform serta mandat penghapusan konten meningkatkan biaya kepatuhan dan menghalangi perusahaan teknologi kecil untuk beroperasi di Indonesia.\n\nPelanggaran privasi digital, termasuk pengawasan pemerintah tanpa pengawasan yudisial, merusak kepercayaan yang diperlukan bagi perdagangan digital, perbankan daring, dan layanan pemerintahan elektronik.',
    currentChallenges: [
      'Ketentuan pencemaran nama baik dalam UU ITE sering digunakan untuk membungkam kritik. Individu telah diproses hukum karena unggahan media sosial, ulasan produk, dan keluhan terhadap layanan publik. Rumusan undang-undang yang luas menciptakan ketidakpastian hukum mengenai ujaran apa yang diperbolehkan.',
      'Pemblokiran situs web oleh Kominfo tidak memiliki kriteria yang transparan, peninjauan independen, maupun proses banding yang dapat diandalkan. Pemblokiran berlebihan secara berkala berdampak pada situs web yang sah, dan setelah diblokir, proses pemulihan akses berjalan lambat serta tidak pasti.',
      'Kewajiban pendaftaran platform melalui regulasi PSE memberikan pemerintah daya tawar untuk menuntut penghapusan konten secara cepat dari platform, tanpa mensyaratkan perintah pengadilan atau memberikan kesempatan yang bermakna bagi pembuat konten untuk mengajukan banding.',
      'Indonesia belum memiliki penegakan perlindungan data yang komprehensif. Meskipun Undang-Undang Perlindungan Data Pribadi disahkan pada tahun 2022, implementasi dan kapasitas kelembagaannya masih terbatas. Lembaga pemerintah sendiri sering menjadi sumber kebocoran data.',
      'Usulan regulasi mengenai kecerdasan buatan, verifikasi media sosial, dan “etika digital” dapat semakin memperluas kendali pemerintah atas ujaran daring dan inovasi.'
    ],
    classicalLiberal: 'Kebebasan berekspresi merupakan nilai liberal yang mendasar, penting baik bagi otonomi individu maupun bagi pencarian kebenaran melalui perdebatan terbuka. John Stuart Mill dalam On Liberty berpendapat bahwa menekan pendapat apa pun, bahkan pendapat yang keliru sekalipun, merugikan masyarakat karena menghalangi pengujian gagasan melalui tantangan dan kritik.\n\nSupremasi hukum menuntut agar setiap pembatasan terhadap ujaran dirumuskan secara sempit, dapat diprediksi, dan tunduk pada peninjauan yudisial yang independen. Undang-undang yang luas dan kabur seperti UU ITE melanggar prinsip ini karena memberikan diskresi kepada pejabat untuk menghukum ujaran yang tidak mereka sukai, tanpa menyediakan standar yang jelas bagi warga negara untuk dipatuhi.\n\nPemerintahan yang terbatas berarti negara tidak seharusnya menempatkan dirinya sebagai penentu kebenaran atau penjaga moralitas publik dalam urusan ekspresi. Orang dewasa dalam masyarakat bebas mampu mengevaluasi informasi, membentuk pendapat mereka sendiri, dan mengabaikan ujaran yang mereka anggap menyinggung.\n\nHak kepemilikan pribadi juga mencakup aset dan komunikasi digital. Pengawasan terhadap komunikasi pribadi tanpa surat perintah pengadilan serupa dengan penggeledahan rumah seseorang tanpa dasar yang sah, yaitu pelanggaran terhadap kedaulatan individu yang memerlukan pembenaran kuat dan batasan hukum yang ketat.',
    recommendations: [
      'Mereformasi UU ITE dengan mempersempit ketentuan pencemaran nama baik, menghapus sanksi pidana untuk pelanggaran berbasis ujaran, serta menetapkan perlindungan hukum yang jelas bagi kritik, satire, penelitian akademik, dan jurnalisme.',
      'Menerapkan pengawasan yudisial terhadap pemblokiran situs web, dengan mensyaratkan perintah pengadilan berdasarkan kriteria hukum tertentu sebelum suatu konten dapat dibatasi. Proses banding yang transparan dan tepat waktu juga perlu dibentuk.',
      'Memastikan regulasi platform berfokus pada transparansi dan proses hukum yang adil, bukan pada penghapusan konten yang diarahkan oleh pemerintah. Pembatasan konten seharusnya mensyaratkan perintah pengadilan, kecuali dalam situasi darurat yang didefinisikan secara sangat terbatas.',
      'Memperkuat penegakan perlindungan data melalui otoritas pengawas independen yang memiliki kewenangan atas pengendali data sektor swasta maupun pemerintah.',
      'Melindungi enkripsi dan privasi digital sebagai infrastruktur penting bagi perdagangan, jurnalisme, dan kebebasan individu. Menolak usulan kewajiban pintu belakang enkripsi atau kemampuan pengawasan massal.'
    ],
    faqs: [
      {
        q: 'Bukankah pemerintah perlu memberantas misinformasi?',
        a: 'Obat bagi ujaran yang buruk pada umumnya adalah lebih banyak ujaran, bukan sensor. Pemeriksaan fakta yang diarahkan pemerintah bermasalah karena insentif politik tidak dapat dihindari dalam menentukan apa yang dianggap sebagai “misinformasi”. Pendekatan yang lebih baik mencakup pendidikan literasi media, pelabelan transparan oleh platform, dan dukungan terhadap jurnalisme independen.'
      },
      {
        q: 'Bagaimana dengan ujaran kebencian dan hasutan untuk melakukan kekerasan?',
        a: 'Hasutan langsung terhadap kekerasan yang segera terjadi dapat secara sah dibatasi melalui undang-undang yang dirumuskan secara sempit. Namun, konsep “ujaran kebencian” sering diperluas untuk mencakup kritik politik, perbedaan pandangan keagamaan, atau komentar budaya. Pembatasan hukum seharusnya terbatas pada ujaran yang secara langsung dan segera mengancam terjadinya bahaya fisik.'
      },
      {
        q: 'Bukankah platform memang perlu diregulasi?',
        a: 'Platform dapat memperoleh manfaat dari kerangka hukum yang jelas mengenai tanggung jawab, transparansi, dan hak pengguna. Namun, regulasi yang memberikan pemerintah kewenangan untuk menentukan keputusan moderasi konten pada dasarnya menjadikan negara sebagai penyunting wacana publik. Pendekatan yang lebih baik berfokus pada kewajiban transparansi terkait aturan platform dan pemberian pilihan yang bermakna bagi pengguna di antara berbagai platform.'
      },
      {
        q: 'Bagaimana dengan keselamatan anak-anak di ruang daring?',
        a: 'Melindungi anak-anak merupakan kepentingan yang sah, tetapi hal tersebut paling baik dilakukan melalui alat pengawasan orang tua, verifikasi usia untuk layanan tertentu, dan pendidikan, bukan melalui sensor luas yang membatasi akses orang dewasa terhadap informasi. Undang-undang yang dirancang untuk “melindungi anak-anak” sering digunakan untuk membenarkan pembatasan konten secara luas yang berdampak pada semua orang.'
      }
    ],
    furtherReading: [
      { label: 'SAFEnet — Laporan Hak Digital Indonesia', url: 'https://safenet.or.id' },
      { label: 'Electronic Frontier Foundation — Sensor dan Kebebasan Berekspresi', url: 'https://www.eff.org/issues/free-speech' },
      { label: 'John Stuart Mill — On Liberty', url: 'https://oll.libertyfund.org/titles/mill-on-liberty' }
    ]
  },
  {
    slug: 'kebebasan-ekonomi',
    title: 'Kebebasan Ekonomi dan Kewirausahaan',
    category: 'Kebebasan Ekonomi',
    coverImage: '/isu/entrepeneur.png',
    summary: 'Para wirausahawan menciptakan lapangan kerja, inovasi, dan peluang ekonomi. Isu ini membahas bagaimana perizinan, regulasi, dan kompleksitas administratif memengaruhi lingkungan usaha dan iklim investasi di Indonesia.',
    intro: 'Kebebasan ekonomi, yaitu kemampuan individu untuk memulai usaha, membuat kontrak, dan terlibat dalam pertukaran sukarela tanpa campur tangan pemerintah yang berlebihan, memiliki korelasi yang kuat dengan kemakmuran, pengurangan kemiskinan, dan pembangunan manusia. Lingkungan regulasi Indonesia menghadirkan peluang sekaligus hambatan bagi jutaan wirausahawan yang menjadi penggerak perekonomian nasional.',
    overview: 'Perekonomian Indonesia sebagian besar digerakkan oleh usaha mikro, kecil, dan menengah (UMKM), yang mencakup sekitar 97% dari seluruh unit usaha, 60% dari produk domestik bruto, dan 97% dari lapangan kerja. Meskipun memiliki peran penting, usaha-usaha ini menghadapi lingkungan regulasi yang kompleks dan sangat bervariasi antarwilayah maupun antarsektor.\n\nIndikator Doing Business yang sebelumnya diterbitkan oleh Bank Dunia secara konsisten menempatkan Indonesia pada peringkat menengah secara global, dengan tantangan khusus dalam hal memulai usaha, penegakan kontrak, dan memperoleh izin konstruksi. Meskipun pemerintah telah mencapai kemajuan melalui paket-paket deregulasi dan Undang-Undang Cipta Kerja Tahun 2020, implementasi di tingkat daerah masih belum merata.\n\nSistem perizinan Indonesia secara historis mengharuskan pelaku usaha memperoleh puluhan izin dari berbagai lembaga di tingkat nasional, provinsi, dan kabupaten/kota. Sistem Online Single Submission (OSS) diperkenalkan untuk menyederhanakan proses ini, tetapi banyak sektor masih memerlukan izin sektoral tambahan di luar pendaftaran usaha dasar.',
    whyItMatters: 'Kompleksitas regulasi berfungsi sebagai hambatan masuk yang bersifat regresif. Perusahaan besar dan mapan mampu membiayai departemen kepatuhan serta penasihat hukum untuk menavigasi birokrasi. Sebaliknya, wirausahawan kecil, seperti pedagang kaki lima, produsen rumahan, dan perusahaan rintisan digital, tidak memiliki kemampuan yang sama. Akibatnya, regulasi yang dimaksudkan untuk melindungi konsumen atau menjamin kualitas justru melindungi pelaku usaha lama dari persaingan.\n\nSetiap jam yang dihabiskan seorang wirausahawan untuk mengurus dokumen kepatuhan adalah waktu yang tidak digunakan untuk inovasi, pelayanan pelanggan, atau ekspansi usaha. Ketika regulasi bersifat tidak dapat diprediksi atau bergantung pada diskresi pejabat, pelaku usaha tidak dapat merencanakan masa depan dengan baik, sehingga investasi dan penciptaan lapangan kerja berkurang.\n\nBonus demografi Indonesia, yaitu populasi yang besar, muda, dan semakin terdidik, hanya dapat dimanfaatkan secara optimal apabila generasi muda dapat memulai usaha dan memperoleh pekerjaan dalam perekonomian yang dinamis. Regulasi yang berlebihan mengubah calon wirausahawan menjadi pekerja informal tanpa perlindungan hukum atau akses terhadap kredit.',
    currentChallenges: [
      'Meskipun sistem OSS telah diterapkan, banyak pelaku usaha masih menghadapi proses perizinan yang panjang dan tidak dapat diprediksi. Regulasi sektoral sering kali bertentangan dengan kerangka penyederhanaan, dan pemerintah daerah dapat memberlakukan persyaratan tambahan.',
      'Regulasi ketenagakerjaan, termasuk kewajiban pesangon yang tinggi dan pembatasan terhadap kontrak kerja waktu tertentu, menghambat penciptaan lapangan kerja formal. Banyak perusahaan tetap mempertahankan skala kecil untuk menghindari ambang batas kepatuhan, sehingga membatasi potensi pertumbuhan mereka.',
      'Persyaratan modal minimum dan prosedur pendirian badan usaha yang kompleks menghambat pendaftaran usaha secara formal, khususnya bagi wirausahawan muda dan pelaku ekonomi digital.',
      'Ketidakkonsistenan regulasi antara pemerintah pusat dan pemerintah daerah menciptakan ketidakpastian kepatuhan. Suatu usaha yang telah mematuhi aturan nasional masih dapat menghadapi kendala regulasi di tingkat daerah.',
      'Perekonomian informal tetap besar, diperkirakan mencakup sekitar 60% pekerja, sebagian karena biaya formalisasi, baik dalam bentuk waktu, uang, maupun kepatuhan berkelanjutan, melebihi manfaatnya bagi banyak pelaku usaha kecil.'
    ],
    classicalLiberal: 'Kebebasan ekonomi merupakan penerapan kebebasan individu dalam kegiatan komersial. Sebagaimana individu seharusnya bebas menyampaikan pendapat dan berasosiasi dengan orang lain, mereka juga seharusnya bebas mendirikan usaha, menawarkan jasa, dan membuat perjanjian sukarela dengan pelanggan maupun pekerja.\n\nPasar bebas mengoordinasikan kegiatan ekonomi melalui harga, keuntungan, dan kerugian, yaitu sinyal yang mengarahkan sumber daya menuju penggunaan yang paling bernilai tanpa memerlukan perencanaan terpusat. Ketika regulasi mengesampingkan sinyal-sinyal ini, misalnya dengan menetapkan upah, mewajibkan struktur usaha tertentu, atau membatasi akses masuk ke pasar, regulasi tersebut menggantikan pengetahuan tersebar dari jutaan pelaku pasar dengan penilaian politik.\n\nSupremasi hukum dalam urusan ekonomi berarti bahwa regulasi harus jelas, dapat diprediksi, dan diterapkan secara setara kepada semua pihak. Perizinan diskresioner, yaitu ketika pejabat menentukan siapa yang boleh menjalankan usaha, tidak sejalan dengan supremasi hukum karena menjadikan partisipasi ekonomi bergantung pada persetujuan birokrasi, bukan pada kepatuhan terhadap hukum.\n\nPemerintahan yang terbatas mengakui bahwa sebagian besar regulasi ekonomi menimbulkan biaya, seperti beban kepatuhan, berkurangnya persaingan, dan biaya birokrasi, yang harus ditimbang terhadap manfaatnya. Banyak regulasi bertahan bukan karena melayani kepentingan publik, melainkan karena melayani kepentingan perusahaan lama, lembaga birokrasi, atau patron politik.',
    recommendations: [
      'Menerapkan kewajiban analisis dampak regulasi secara komprehensif untuk seluruh regulasi usaha baru, disertai klausul kedaluwarsa wajib yang mengharuskan pembenaran ulang secara berkala.',
      'Mengurangi persyaratan perizinan hanya pada hal-hal yang benar-benar berkaitan dengan kesehatan, keselamatan, dan lingkungan hidup. Jika memungkinkan, mengganti persetujuan di awal berupa izin dengan pemberitahuan dan akuntabilitas, yaitu pendaftaran disertai penegakan hukum.',
      'Mereformasi regulasi ketenagakerjaan guna mengurangi biaya penciptaan lapangan kerja formal, sambil tetap mempertahankan perlindungan inti bagi pekerja. Salah satu opsi adalah mengganti kewajiban pesangon yang kaku dengan asuransi sosial portabel yang didanai melalui kontribusi pemberi kerja dan pekerja.',
      'Menciptakan struktur hukum bagi usaha mikro dan usaha digital yang meminimalkan biaya kepatuhan, sambil memberikan pengakuan hukum formal dan akses terhadap layanan perbankan.',
      'Memperkuat penegakan kontrak dan penyelesaian sengketa komersial melalui pengadilan niaga khusus serta mekanisme penyelesaian sengketa alternatif yang mudah diakses.'
    ],
    faqs: [
      {
        q: 'Bukankah regulasi melindungi konsumen dan pekerja?',
        a: 'Sebagian regulasi memang memiliki tujuan perlindungan yang sah. Namun, banyak regulasi yang mengklaim melindungi konsumen justru membatasi persaingan, sehingga merugikan konsumen melalui harga yang lebih tinggi dan pilihan yang lebih sedikit. Pertanyaan kuncinya adalah apakah manfaat nyata suatu regulasi bagi masyarakat lebih besar daripada biayanya, termasuk biaya tersembunyi berupa usaha yang tidak pernah berdiri dan pekerjaan yang tidak pernah tercipta.'
      },
      {
        q: 'Bukankah deregulasi akan menyebabkan eksploitasi?',
        a: 'Eksploitasi paling sering terjadi ketika pekerja memiliki sedikit alternatif. Deregulasi yang meningkatkan jumlah pemberi kerja yang bersaing untuk memperoleh tenaga kerja justru memperkuat posisi tawar pekerja. Perlindungan terbaik terhadap eksploitasi adalah perekonomian yang dinamis, di mana pekerja dapat dengan mudah menemukan pekerjaan alternatif, bukan regulasi kaku yang mengurangi jumlah lapangan kerja secara keseluruhan.'
      },
      {
        q: 'Bagaimana dengan standar lingkungan dan keselamatan?',
        a: 'Regulasi yang benar-benar berkaitan dengan kesehatan, keselamatan, dan lingkungan hidup memiliki tujuan penting dan sejalan dengan kebebasan ekonomi. Isu utamanya adalah proporsionalitas: regulasi harus berbasis bukti, membebankan beban seminimal mungkin, dan ditegakkan secara konsisten, bukan digunakan sebagai hambatan masuk yang bersifat diskresioner.'
      },
      {
        q: 'Bukankah Indonesia sudah cukup terderegulasi?',
        a: 'Indonesia telah mencapai kemajuan yang signifikan, tetapi kesenjangan implementasi masih besar. Reformasi di tingkat nasional sering kali tidak langsung menghasilkan perbaikan kondisi di tingkat lokal, tempat pelaku usaha benar-benar beroperasi. Selain itu, kualitas regulasi sama pentingnya dengan jumlah regulasi. Prediktabilitas, konsistensi, dan transparansi masih menjadi tantangan besar.'
      }
    ],
    furtherReading: [
      { label: 'Fraser Institute — Economic Freedom of the World Report', url: 'https://www.fraserinstitute.org/economic-freedom' },
      { label: 'World Bank — Indonesia Development Update', url: 'https://www.worldbank.org/en/country/indonesia' },
      { label: 'Friedrich Hayek — The Use of Knowledge in Society', url: 'https://oll.libertyfund.org/titles/hayek-the-use-of-knowledge-in-society' }
    ]
  },
  {
    slug: 'pajak-fiskal',
    title: 'Perpajakan dan Tanggung Jawab Fiskal',
    category: 'Fiskal',
    coverImage: '/isu/tax.png',
    summary: 'Sistem perpajakan yang efektif seharusnya sederhana, transparan, dan dapat diprediksi. Isu ini membahas kebijakan perpajakan, kompleksitas administrasi, belanja pemerintah, serta bagaimana reformasi fiskal dapat mendorong pertumbuhan ekonomi.',
    intro: 'Perpajakan merupakan sarana utama bagi pemerintah untuk membiayai layanan publik dan infrastruktur. Cara suatu sistem perpajakan dirancang, baik dari sisi tarif, kompleksitas, keadilan, maupun administrasinya, sangat memengaruhi perilaku ekonomi, keputusan investasi, serta hubungan antara warga negara dan negara. Sistem perpajakan Indonesia menghadapi tantangan besar, baik dalam aspek pemungutan maupun desain kebijakan.',
    overview: 'Rasio pajak terhadap produk domestik bruto Indonesia, yang berada pada kisaran sekitar 10–11%, termasuk salah satu yang terendah di kawasan dan jauh di bawah rata-rata OECD sebesar 34%. Rasio yang rendah ini membatasi belanja pemerintah untuk infrastruktur, pendidikan, dan layanan kesehatan, sekaligus menciptakan ketergantungan pada pendapatan komoditas dan pembiayaan defisit.\n\nSistem perpajakan Indonesia sangat bergantung pada pajak pertambahan nilai (PPN) dan pajak penghasilan badan, sementara pajak penghasilan orang pribadi memberikan kontribusi yang relatif kecil karena besarnya sektor informal dan terbatasnya kapasitas administrasi perpajakan. Direktorat Jenderal Pajak di bawah Kementerian Keuangan bertanggung jawab mengelola sistem ini.\n\nReformasi terbaru mencakup Undang-Undang Harmonisasi Peraturan Perpajakan Tahun 2021, yang menaikkan tarif PPN dari 10% menjadi 11% dengan rencana kenaikan menjadi 12%, memperkenalkan kerangka pajak karbon, serta mengubah lapisan tarif pajak penghasilan orang pribadi. Pemerintah juga telah menjalankan program pengampunan pajak untuk memperluas basis pajak.',
    whyItMatters: 'Sistem perpajakan yang dirancang secara buruk dapat menghambat kegiatan ekonomi produktif, mendorong penghindaran pajak, serta menciptakan ketidakadilan antara pihak yang patuh dan pihak yang tidak patuh. Ketika aturan pajak kompleks dan tidak dapat diprediksi, dunia usaha menghabiskan sumber daya untuk kepatuhan dan perencanaan pajak, bukan untuk investasi dan inovasi.\n\nRasio pajak terhadap PDB Indonesia yang rendah menyebabkan pemerintah terus menghadapi tekanan untuk menaikkan pajak, yang berpotensi menghambat pertumbuhan; mengurangi belanja layanan publik, yang dapat menghambat pembangunan; atau meningkatkan pinjaman, yang menciptakan kewajiban di masa depan. Keterbatasan fiskal ini membatasi kemampuan Indonesia untuk berinvestasi dalam infrastruktur dan modal manusia yang diperlukan bagi pertumbuhan ekonomi berkelanjutan.\n\nSelain itu, cara penerimaan pajak dibelanjakan sama pentingnya dengan cara penerimaan tersebut dipungut. Belanja pemerintah yang tidak efisien, boros, atau dikuasai oleh kepentingan khusus gagal memberikan nilai bagi pembayar pajak dan melemahkan kepercayaan publik terhadap sistem fiskal.',
    currentChallenges: [
      'Administrasi perpajakan masih kompleks, dengan perubahan regulasi yang sering terjadi sehingga menciptakan ketidakpastian kepatuhan. Pelaku usaha melaporkan bahwa mereka menghabiskan waktu dan sumber daya yang signifikan untuk perencanaan pajak serta kewajiban pelaporan.',
      'Sektor informal, yang diperkirakan mencakup sekitar 60% aktivitas ekonomi, sebagian besar berada di luar jangkauan sistem perpajakan. Hal ini menciptakan beban yang tidak adil bagi pelaku usaha dan pekerja sektor formal yang tidak dapat dengan mudah menghindari pajak.',
      'Insentif dan pembebasan pajak bagi industri atau kawasan tertentu menurunkan tarif pajak efektif, tetapi menciptakan kompleksitas, mendistorsi keputusan investasi, dan mengurangi penerimaan secara keseluruhan. Efektivitasnya dalam menarik investasi masih diperdebatkan.',
      'Desentralisasi fiskal daerah telah menciptakan lapisan tambahan berupa pajak dan retribusi daerah yang berbeda-beda antarwilayah dan menambah biaya kepatuhan bagi dunia usaha.',
      'Efisiensi belanja pemerintah masih menjadi perhatian. Subsidi bahan bakar, biaya aparatur sipil negara, dan transfer kepada badan usaha milik negara menyerap sebagian besar anggaran, sehingga membatasi sumber daya untuk investasi produktif.'
    ],
    classicalLiberal: 'Para pemikir liberal klasik sejak Adam Smith mengakui bahwa perpajakan diperlukan untuk membiayai fungsi-fungsi pemerintahan yang sah, seperti pertahanan, peradilan, dan infrastruktur publik yang esensial. Namun, mereka juga memahami bahwa perpajakan menimbulkan biaya nyata di luar jumlah penerimaan yang dipungut, yaitu biaya kepatuhan, distorsi ekonomi, dan berkurangnya insentif untuk melakukan kegiatan produktif.\n\nAdam Smith merumuskan empat prinsip perpajakan yang tetap relevan hingga saat ini: pajak harus proporsional terhadap kemampuan membayar, pasti dan dapat diprediksi, bukan sewenang-wenang, mudah dibayar, serta efisien dalam pemungutannya, dengan meminimalkan beban bagi wajib pajak relatif terhadap penerimaan yang diperoleh.\n\nPemerintahan yang terbatas mengisyaratkan bahwa beban pajak harus diminimalkan sejauh tetap konsisten dengan pembiayaan layanan publik yang esensial. Setiap rupiah pajak yang dipungut mencerminkan pilihan yang dibuat oleh pemerintah, bukan oleh warga negara yang memperolehnya. Hal ini tidak dengan sendirinya keliru, karena barang publik membutuhkan pembiayaan publik, tetapi menimbulkan tanggung jawab untuk membelanjakan dana secara bijaksana dan meminimalkan pemborosan.\n\nSupremasi hukum menuntut agar kewajiban perpajakan jelas, dapat diprediksi, dan diterapkan secara konsisten. Penegakan pajak yang bersifat diskresioner, yaitu ketika otoritas dapat memilih siapa yang diperiksa dan seberapa agresif aturan yang ambigu ditafsirkan, menciptakan peluang bagi korupsi dan penargetan politik.\n\nTanggung jawab fiskal juga berarti membatasi pinjaman pemerintah. Belanja defisit mengalihkan biaya kepada generasi mendatang yang tidak memiliki suara dalam keputusan belanja saat ini, suatu bentuk perpajakan tanpa perwakilan.',
    recommendations: [
      'Menyederhanakan kode pajak dengan mengurangi pengecualian khusus, insentif, dan tarif preferensial. Basis pajak yang lebih luas dengan tarif yang lebih rendah dapat meminimalkan distorsi ekonomi sambil mempertahankan atau meningkatkan penerimaan.',
      'Berinvestasi dalam modernisasi administrasi perpajakan untuk meningkatkan kepatuhan sukarela melalui layanan yang lebih baik, panduan yang lebih jelas, dan penegakan yang dapat diprediksi, bukan melalui pendekatan yang semata-mata bersifat menghukum.',
      'Mengurangi biaya kepatuhan bagi usaha kecil melalui skema perpajakan sederhana yang mengakui keterbatasan kapasitas administratif, sambil tetap mendorong partisipasi dalam sektor formal.',
      'Mereformasi belanja pemerintah agar memprioritaskan investasi produktif, seperti infrastruktur, pendidikan, dan layanan kesehatan, dibandingkan subsidi konsumsi dan transfer kepada badan usaha milik negara yang berkinerja buruk.',
      'Membentuk aturan fiskal yang transparan untuk membatasi belanja defisit dan mewajibkan justifikasi publik bagi setiap kenaikan beban pajak secara keseluruhan, termasuk analisis biaya-manfaat yang jelas atas program belanja baru.'
    ],
    faqs: [
      {
        q: 'Apakah pajak seharusnya dinaikkan untuk membiayai pembangunan?',
        a: 'Indonesia memang membutuhkan lebih banyak penerimaan publik untuk investasi infrastruktur dan modal manusia. Namun, prioritas seharusnya diberikan pada perluasan basis pajak, yaitu membawa lebih banyak aktivitas ekonomi ke dalam sistem perpajakan formal, serta peningkatan efisiensi belanja, bukan menaikkan tarif bagi pihak-pihak yang sudah membayar pajak. Tarif yang lebih tinggi pada basis pajak yang sempit hanya akan meningkatkan penalti bagi kepatuhan.'
      },
      {
        q: 'Apakah insentif pajak efektif dalam menarik investasi?',
        a: 'Bukti mengenai efektivitas insentif pajak bersifat beragam. Banyak studi menemukan bahwa kualitas infrastruktur, prediktabilitas regulasi, dan modal manusia lebih penting bagi investor dibandingkan pembebasan pajak. Insentif menjadi paling bermasalah ketika menciptakan kompleksitas, memerlukan persetujuan diskresioner, atau terutama menguntungkan investasi yang sebenarnya tetap akan terjadi tanpa insentif tersebut.'
      },
      {
        q: 'Bagaimana dengan pajak kekayaan atau perpajakan progresif?',
        a: 'Pajak penghasilan progresif sudah menjadi bagian dari sistem perpajakan Indonesia. Pajak kekayaan menghadapi tantangan praktis yang berat, seperti kesulitan penilaian aset, risiko pelarian modal, dan biaya administrasi yang tinggi relatif terhadap penerimaan yang dihasilkan. Pendekatan yang lebih efektif untuk keadilan fiskal mencakup penghapusan subsidi regresif, yang secara tidak proporsional menguntungkan kelompok kaya, serta memastikan penegakan yang konsisten di seluruh tingkat pendapatan.'
      },
      {
        q: 'Bagaimana posisi Indonesia dibandingkan negara lain di kawasan?',
        a: 'Rasio pajak terhadap PDB Indonesia, yaitu sekitar 10–11%, berada di bawah Thailand sebesar 17%, Vietnam sebesar 18%, dan Malaysia sebesar 12%. Namun, perbandingan rasio dapat menyesatkan. Hal yang lebih penting adalah apakah penerimaan negara cukup untuk membiayai layanan esensial dan apakah sistem perpajakan meminimalkan dampak negatif terhadap perekonomian. Tantangan utama Indonesia terutama terletak pada sempitnya basis pajak, bukan pada tingkat tarif.'
      }
    ],
    furtherReading: [
      { label: 'OECD — Revenue Statistics in Asian and Pacific Economies', url: 'https://www.oecd.org/tax/revenue-statistics-in-asia-and-the-pacific.htm' },
      { label: 'World Bank — Indonesia Public Expenditure Review', url: 'https://www.worldbank.org/en/country/indonesia' },
      { label: 'Adam Smith — The Wealth of Nations, Book V (On Taxation)', url: 'https://oll.libertyfund.org/titles/smith-an-inquiry-into-the-nature-and-causes-of-the-wealth-of-nations' }
    ]
  },
]
