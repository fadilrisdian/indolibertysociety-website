
export default function Footer() {
  return (
    <footer>
      <div>
        <div className="ft-name">Indonesian Liberty Society</div>
        <div className="ft-tag">Merdeka · Bebas · Sejahtera</div>
        <p className="ft-desc">
          Komunitas pemikir Indonesia yang memperjuangkan kebebasan individu,
          pasar bebas, dan pemerintahan yang terbatas.
        </p>
      </div>
      <div className="ft-col">
        <h4>Tentang</h4>
        <ul>
          <li><a href="#">Misi & Visi</a></li>
          <li><a href="#">Tim Kami</a></li>
          <li><a href="#">Sejarah ILS</a></li>
          <li><a href="#">Press Kit</a></li>
        </ul>
      </div>
      <div className="ft-col">
        <h4>Konten</h4>
        <ul>
          <li><a href="#">Artikel & Analisis</a></li>
          <li><a href="#">Podcast</a></li>
          <li><a href="#">Rekomendasi Buku</a></li>
          <li><a href="#">Policy Brief</a></li>
        </ul>
      </div>
      <div className="ft-col">
        <h4>Komunitas</h4>
        <ul>
          <li><a href="#">Jadwal Acara</a></li>
          <li><a href="#">Bergabung</a></li>
          <li>
            <a href="https://instagram.com/indoliberty" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
          <li><a href="#">Kontak Kami</a></li>
        </ul>
      </div>
      <div className="ft-bottom">
        <span className="ft-copy">
          © 2025 Indonesian Liberty Society. Seluruh hak dilindungi.
        </span>
        <span className="ft-motto">
          "In individuals, insanity is rare; but in groups, parties, nations
          and epochs, it is the rule." — Nietzsche
        </span>
      </div>
    </footer>
  )
}
