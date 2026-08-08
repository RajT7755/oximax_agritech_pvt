import type { Page } from '../App'
import smpImg from '../assets/images/smp-product.jpeg'
import butterImg from '../assets/images/butter-product.jpeg'
import badgeIcon from '../assets/images/badge-icon.png'
import medalIcon from '../assets/images/medal-icon.png'
import heroVideo from '../assets/videos/hero-bg.mp4'

interface Props {
  navigate: (p: Page) => void
}

const trustItems = [
  'FSSAI Licensed',
  'ISI Marked',
  'Fine Grade',
  'Consistent Quality',
  'Reliable Supply',
]

const whyUs = [
  { stat: '34%', title: 'High Protein', desc: 'Supports the strongest growth trend in dairy ingredients' },
  { stat: '100%', title: 'Batch Consistency', desc: 'Reliable specifications for predictable production' },
  { stat: 'India', title: 'Reliable Supply', desc: 'Dependable local manufacturing for food manufacturers' },
]

export default function Home({ navigate }: Props) {
  return (
    <div className="has-mob-cta">
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero" aria-label="Premium dairy products">
        <video
          className="hero-video"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={smpImg}
          aria-hidden
        />
        <div className="hero-overlay" aria-hidden />
        <div className="container hero-content">
          {/* Spacer keeps middle block centered above the bottom CTA */}
          <div className="hero-spacer" aria-hidden />

          {/* Middle of video: badge + title (darker text) */}
          <div className="hero-middle">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
              <img src={medalIcon} alt="" style={{ width: 22, height: 22, objectFit: 'contain', mixBlendMode: 'multiply', opacity: 0.95 }} />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(12px, 2.5vw, 14px)', fontWeight: 700, color: '#7A2E02', letterSpacing: 2, textTransform: 'uppercase' }}>
                Trusted By Many Experts
              </span>
            </div>

            <h1 style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(32px, 6vw, 64px)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#0A1628',
              margin: 0,
            }}>
              Premium Dairy Products
            </h1>
          </div>

          {/* Bottom of video: subtitle + CTA */}
          <div className="hero-bottom">
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(15px, 2.5vw, 20px)',
              color: '#374151',
              lineHeight: 1.7,
              maxWidth: 560,
              margin: '0 auto 20px',
            }}>
              High quality dairy ingredients trusted by food manufacturers across India
            </p>

            <button
              onClick={() => navigate('contact')}
              style={{
                backgroundColor: '#E85D04',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: 12,
                padding: '16px 32px',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(15px, 2vw, 17px)',
                cursor: 'pointer',
                minHeight: 56,
                transition: 'background-color 0.2s',
                boxShadow: '0 4px 20px rgba(232,93,4,0.25)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#D45303' }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#E85D04' }}
            >
              Request Quote
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ────────────────────────────────────── */}
      <section style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #F3F4F6', borderBottom: '1px solid #F3F4F6' }}>
        <div className="container" style={{ paddingTop: 16, paddingBottom: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center', gap: '8px 4px' }}>
            {trustItems.map((t, i) => (
              <span key={t} style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '4px 12px' }}>
                  <img src={badgeIcon} alt="" style={{ width: 14, height: 14, objectFit: 'contain', opacity: 0.5, flexShrink: 0 }} />
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(12px, 2vw, 14px)', fontWeight: 500, color: '#6B7280', whiteSpace: 'nowrap' }}>{t}</span>
                </span>
                {i < trustItems.length - 1 && <span style={{ color: '#D1D5DB', display: 'none' }} className="trust-dot">•</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ─────────────────────────────────────── */}
      <section id="products" style={{ backgroundColor: '#FDFBF7', padding: 'clamp(48px, 8vw, 80px) 0 clamp(56px, 10vw, 96px)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'clamp(32px, 5vw, 56px)' }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 700, color: '#E85D04', letterSpacing: 2, textTransform: 'uppercase', margin: '0 0 12px' }}>
              Crafted by Heart, Defined by Quality
            </p>
            <h2 style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(26px, 4vw, 40px)',
              color: '#1B2A4A',
              margin: '0 0 16px',
              letterSpacing: '-0.02em',
            }}>
              Our Products
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: '#6B7280', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
              Consistent quality Milk Powder and Table Butter for bakery, confectionery, foodservice and nutritional applications.
            </p>
          </div>

          <div className="product-grid">
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 20,
                overflow: 'hidden',
                border: '1px solid #F3F4F6',
                transition: 'box-shadow 0.25s, transform 0.25s',
                minWidth: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.10)'
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div className="img-frame">
                <img
                  src={smpImg}
                  alt="Instant Skimmed Milk Powder"
                  className="img-contain"
                  style={{ transition: 'transform 0.5s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.04)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)' }}
                />
              </div>
              <div style={{ padding: 'clamp(16px, 3vw, 28px)' }}>
                <h3 style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: 'clamp(17px, 2.5vw, 20px)',
                  color: '#1B2A4A',
                  margin: '0 0 10px',
                  lineHeight: 1.3,
                }}>
                  Instant Spray Dried Skimmed Milk Powder
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: '0 0 20px' }}>
                  High-protein (34%), low-fat Instant SMP with excellent solubility for industrial use.
                </p>
                <button
                  onClick={() => navigate('smp')}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: 14,
                    color: '#E85D04',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                  }}
                >
                  View Details
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </div>

            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 20,
                overflow: 'hidden',
                border: '1px solid #F3F4F6',
                transition: 'box-shadow 0.25s, transform 0.25s',
                minWidth: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.10)'
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div className="img-frame">
                <img
                  src={butterImg}
                  alt="Table Butter 5 kg"
                  className="img-contain"
                  style={{ transition: 'transform 0.5s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.04)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)' }}
                />
              </div>
              <div style={{ padding: 'clamp(16px, 3vw, 28px)' }}>
                <h3 style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: 'clamp(17px, 2.5vw, 20px)',
                  color: '#1B2A4A',
                  margin: '0 0 10px',
                  lineHeight: 1.3,
                }}>
                  Table Butter 5 kg
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: '0 0 20px' }}>
                  Premium Table Butter for foodservice and industrial applications with consistent performance.
                </p>
                <button
                  onClick={() => navigate('butter')}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: 14,
                    color: '#E85D04',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                  }}
                >
                  View Details
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#FFFFFF', padding: 'clamp(48px, 8vw, 72px) 0' }}>
        <div className="container">
          <div className="stats-grid">
            {whyUs.map((item) => (
              <div key={item.stat} style={{ padding: '8px 12px', minWidth: 0 }}>
                <div style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: 'clamp(36px, 6vw, 60px)',
                  color: '#E85D04',
                  lineHeight: 1,
                  marginBottom: 10,
                }}>
                  {item.stat}
                </div>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 18, color: '#1B2A4A', margin: '0 0 6px' }}>
                  {item.title}
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 600, color: '#E85D04', textTransform: 'uppercase', letterSpacing: 1, margin: '0 0 6px' }}>
                  Quality Tested
                </p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────── */}
      <section style={{ backgroundColor: '#FDFBF7', padding: 'clamp(48px, 8vw, 80px) 0 clamp(56px, 10vw, 96px)' }}>
        <div className="container" style={{ maxWidth: 800, textAlign: 'center' }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700, color: '#E85D04', letterSpacing: 3, textTransform: 'uppercase', margin: '0 0 16px' }}>
            Let&apos;s Work Together
          </p>
          <h2 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(24px, 4vw, 40px)',
            color: '#1B2A4A',
            margin: '0 0 16px',
            letterSpacing: '-0.02em',
          }}>
            Need consistent dairy ingredients?
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: '#6B7280', margin: '0 0 40px', lineHeight: 1.7 }}>
            Request specifications, samples or bulk pricing.
          </p>
          <button
            onClick={() => navigate('contact')}
            style={{
              backgroundColor: '#E85D04',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: 12,
              padding: '16px 40px',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: 17,
              cursor: 'pointer',
              minHeight: 56,
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#D45303' }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#E85D04' }}
          >
            Request Quote
          </button>
        </div>
      </section>

      <div className="mob-cta">
        <button
          onClick={() => navigate('contact')}
          style={{
            width: '100%',
            backgroundColor: '#E85D04',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: 10,
            padding: '14px',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: 16,
            cursor: 'pointer',
            minHeight: 50,
          }}
        >
          Request Quote
        </button>
      </div>
    </div>
  )
}
