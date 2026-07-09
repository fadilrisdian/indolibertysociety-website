import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { issues } from '@/lib/isu-data'

export async function generateStaticParams() {
  return issues.map((issue) => ({ slug: issue.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const issue = issues.find((i) => i.slug === slug)
  if (!issue) return {}
  return {
    title: issue.title,
    description: issue.summary,
    openGraph: issue.coverImage
      ? { images: [{ url: issue.coverImage }] }
      : undefined,
  }
}

export default async function IsuDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const issue = issues.find((i) => i.slug === slug)
  if (!issue) notFound()

  return (
    <main className="isu-detail">
      {/* Hero */}
      <section className="isu-hero">
        {issue.coverImage && (
          <>
            <Image
              src={issue.coverImage}
              alt={issue.title}
              fill
              sizes="100vw"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority
              quality={70}
              className="isu-hero-img"
            />
            <div className="isu-hero-overlay" />
          </>
        )}
        <div className="isu-hero-inner">
          <Link href="/isu" className="isu-back">← Semua Isu</Link>
          <div className="isu-hero-category">{issue.category}</div>
          <h1 className="isu-hero-title">{issue.title}</h1>
          <p className="isu-hero-intro">{issue.intro}</p>
        </div>
      </section>

      {/* Content */}
      <article className="isu-content">
        {/* Overview */}
        <section className="isu-section">
          <div className="isu-section-label">Overview</div>
          <h2 className="isu-section-title">Gambaran Umum</h2>
          {issue.overview.split('\n\n').map((p, i) => (
            <p key={i} className="isu-paragraph">{p}</p>
          ))}
        </section>

        {/* Why It Matters */}
        <section className="isu-section">
          <div className="isu-section-label">Why It Matters</div>
          <h2 className="isu-section-title">Mengapa Ini Penting</h2>
          {issue.whyItMatters.split('\n\n').map((p, i) => (
            <p key={i} className="isu-paragraph">{p}</p>
          ))}
        </section>

        {/* Current Challenges */}
        <section className="isu-section">
          <div className="isu-section-label">Current Challenges</div>
          <h2 className="isu-section-title">Tantangan Saat Ini</h2>
          <ul className="isu-challenges">
            {issue.currentChallenges.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </section>

        {/* Classical Liberal Perspective */}
        <section className="isu-section">
          <div className="isu-section-label">Classical Liberal Perspective</div>
          <h2 className="isu-section-title">Perspektif Liberal Klasik</h2>
          {issue.classicalLiberal.split('\n\n').map((p, i) => (
            <p key={i} className="isu-paragraph">{p}</p>
          ))}
        </section>

        {/* Policy Recommendations */}
        <section className="isu-section">
          <div className="isu-section-label">Policy Recommendations</div>
          <h2 className="isu-section-title">Rekomendasi Kebijakan</h2>
          <ol className="isu-recommendations">
            {issue.recommendations.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ol>
        </section>

        {/* FAQ */}
        <section className="isu-section">
          <div className="isu-section-label">FAQ</div>
          <h2 className="isu-section-title">Pertanyaan Umum</h2>
          <div className="isu-faqs">
            {issue.faqs.map((faq, i) => (
              <details key={i} className="isu-faq">
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Further Reading */}
        <section className="isu-section">
          <div className="isu-section-label">Further Reading</div>
          <h2 className="isu-section-title">Bacaan Lanjutan</h2>
          <ul className="isu-reading">
            {issue.furtherReading.map((r, i) => (
              <li key={i}>
                <a href={r.url} target="_blank" rel="noopener noreferrer">
                  {r.label} <span className="isu-ext-arrow">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Back link */}
        <div className="isu-bottom-nav">
          <Link href="/isu" className="btn-outline">← Kembali ke Semua Isu</Link>
        </div>
      </article>
    </main>
  )
}
