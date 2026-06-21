import prisma from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Email tidak valid' },
        { status: 400 }
      )
    }

    // Cek apakah email sudah terdaftar
    const existing = await prisma.subscriber.findUnique({
      where: { email }
    })

    if (existing) {
      return NextResponse.json(
        { error: 'Email sudah terdaftar' },
        { status: 409 }
      )
    }

    // Simpan ke database
    const subscriber = await prisma.subscriber.create({
      data: { email }
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Terima kasih! Kamu sudah berlangganan newsletter kami.',
        subscriber: {
          id: subscriber.id,
          email: subscriber.email,
          createdAt: subscriber.createdAt.toISOString()
        }
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Subscribe error:', error)
    return NextResponse.json(
      { error: 'Terjadi kesalahan. Silakan coba lagi.' },
      { status: 500 }
    )
  }
}
