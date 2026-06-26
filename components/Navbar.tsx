
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const closeMenu = () => setIsOpen(false)

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

      <button
        className={`hamburger ${mounted && isOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-links ${mounted && isOpen ? 'active' : ''}`}>
        <li><a href="#tentang" onClick={closeMenu}>Tentang</a></li>
        <li><Link href="/tulisan" onClick={closeMenu}>Tulisan</Link></li>
        <li><a href="#nilai" onClick={closeMenu}>Nilai</a></li>
        <li><a href="#program" onClick={closeMenu}>Program</a></li>
        <li>
          <a href="#join" className="nav-cta" onClick={closeMenu}>Bergabung</a>
        </li>
      </ul>
    </nav>
  )
}