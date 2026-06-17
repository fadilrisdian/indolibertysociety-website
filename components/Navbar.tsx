
'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav id="nav">
      <Link href="/" className="nav-logo">
        <svg
          className="logo-mark"
          viewBox="0 0 36 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 2C18 2 8 10 8 20C8 26.4 11.6 32 18 35C24.4 32 28 26.4 28 20C28 10 18 2 18 2Z"
            fill="#C4911C"
            opacity=".9"
          />
          <path
            d="M18 6C18 6 11 13 11 20C11 24.2 13.4 28 18 31C22.6 28 25 24.2 25 20C25 13 18 6 18 6Z"
            fill="#E6B445"
          />
          <path
            d="M18 11C18 11 14 16 14 20C14 22.4 15.6 24.6 18 26C20.4 24.6 22 22.4 22 20C22 16 18 11 18 11Z"
            fill="#FFF4B0"
          />
          <rect x="15.5" y="34" width="5" height="6" rx="2.5" fill="#7A5208" />
        </svg>
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