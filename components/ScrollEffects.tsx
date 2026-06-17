// components/ScrollEffects.tsx
'use client'

import { useEffect } from 'react'

export default function ScrollEffects() {
  useEffect(() => {
    // Nav scroll effect
    const nav = document.getElementById('nav')
    const handleScroll = () => {
      nav?.classList.toggle('scrolled', window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Intersection Observer untuk fade-in
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('visible'), i * 80)
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.fade-in').forEach((el) => io.observe(el))

    // Cleanup saat unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
      io.disconnect()
    }
  }, []) // [] = hanya jalan sekali saat mount

  return null // komponen ini tidak render apapun
}