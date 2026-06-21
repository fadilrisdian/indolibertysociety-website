
'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav id="nav">
      <Link href="/" className="nav-logo">
        <Image
          src="/logo.png"
          alt="Indonesian Liberty Society Logo"
          width={40}
          height={40}
          className="logo-mark"
          priority
          style={{ width: 'auto', height: 'auto' }}
        />
        <div className="nav-wordmark">
          <span className="nav-name">Indonesian Liberty Society</span>
          <span className="nav-sub">Merdeka · Bebas · Sejahtera</span>
        </div>
      </Link>

      <ul className="nav-links">
        <li><a href="#tentang">Tentang</a></li>
        <li><a href="#nilai">Nilai</a></li>
        <li><a href="#program">Program</a></li>
        <li>
          <a href="#join" className="nav-cta">Bergabung</a>
        </li>
      </ul>
    </nav>
  )
}