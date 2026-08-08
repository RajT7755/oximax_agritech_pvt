import { useState, useEffect } from 'react'
import type { Page } from '../App'
import aboutImg from '../assets/images/smp-product-alt.jpeg'
import butterImg from '../assets/images/butter-product.jpeg'

interface Props {
  navigate: (p: Page) => void
}

const values = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E85D04" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" /><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
      </svg>
    ),
    title: 'Consistent Quality',
    desc: 'Reliable batch-to-batch specifications.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E85D04" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Food Safety',
    desc: 'Controlled, hygienic manufacturing practices.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E85D04" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2" /><path d="M16 8h4l3 3v5h-7V8z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: 'Reliable Supply',
    desc: 'Dependable support for growing businesses.',
  },
]

const slideshowImages = [
  { src: aboutImg, alt: 'OXIMAX Instant Skimmed Milk Powder' },
  { src: butterImg, alt: 'OXIMAX Table Butter 5 kg' },
]

export default function About({ navigate }: Props) {
  const [slideIndex, setSlideIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setSlideIndex((i) => (i + 1) % slideshowImages.length)
    }, 3500)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      <section style={{ backgroundColor: '#FDFBF7', padding: 'clamp(48px, 8vw, 80px) 0 clamp(40px, 6vw, 64px)' }}>
        <div className="container" style={{ maxWidth: 800, textAlign: 'center' }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, fontWeight: 700, color: '#E85D04', letterSpacing: 3, textTransform: 'uppercase', margin: '0 0 20px' }}>
            Our Purpose
          </p>
          <h1 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(28px, 5vw, 58px)',
            color: '#1B2A4A',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            margin: '0 0 24px',
          }}>
            Pure sourcing, strict testing, and real nutrition you can trust in every single batch.
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(16px, 2.5vw, 18px)', color: '#6B7280', lineHeight: 1.75, maxWidth: 560, margin: '0 auto' }}>
            <span style={{ color: '#E85D04', fontWeight: 700 }}>OXIMAX</span> AGRITECH supplies dependable milk powder and butter solutions for food manufacturers across India.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#FFFFFF', padding: 'clamp(48px, 8vw, 72px) 0' }}>
        <div className="container">
          <div className="about-grid" style={{ alignItems: 'center' }}>
            <div style={{ minWidth: 0 }}>
              <h2 style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(24px, 4vw, 40px)',
                color: '#1B2A4A',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                margin: '0 0 24px',
              }}>
                Quality that works in the real world
              </h2>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: '#6B7280', lineHeight: 1.8, margin: '0 0 20px' }}>
                We focus on dairy ingredients that help manufacturers formulate, produce, and scale with confidence. Our approach combines controlled processing, consistent specifications, and responsive supply.
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: '#6B7280', lineHeight: 1.8, margin: 0 }}>
                From Instant Skimmed Milk Powder to Table Butter, every product is selected for practical performance across bakery, confectionery, foodservice, and nutritional applications.
              </p>
            </div>

            <div style={{ borderRadius: 20, overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.10)', position: 'relative', aspectRatio: '4/3', minWidth: 0 }}>
              {slideshowImages.map((img, i) => (
                <img
                  key={img.alt}
                  src={img.src}
                  alt={img.alt}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    opacity: i === slideIndex ? 1 : 0,
                    transition: 'opacity 0.8s ease-in-out',
                  }}
                />
              ))}
              <div style={{ position: 'absolute', bottom: 16, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 8, zIndex: 2 }}>
                {slideshowImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSlideIndex(i)}
                    style={{
                      width: i === slideIndex ? 24 : 8,
                      height: 8,
                      borderRadius: 4,
                      border: 'none',
                      cursor: 'pointer',
                      backgroundColor: i === slideIndex ? '#E85D04' : 'rgba(255,255,255,0.7)',
                      transition: 'width 0.3s, background-color 0.3s',
                      padding: 0,
                    }}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#FDFBF7', padding: 'clamp(48px, 8vw, 72px) 0' }}>
        <div className="container">
          <h2 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(24px, 4vw, 40px)',
            color: '#1B2A4A',
            textAlign: 'center',
            margin: '0 0 clamp(32px, 5vw, 56px)',
            letterSpacing: '-0.02em',
          }}>
            What we stand for
          </h2>
          <div className="values-grid">
            {values.map((val) => (
              <div
                key={val.title}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 20,
                  border: '1px solid #F3F4F6',
                  padding: 'clamp(24px, 4vw, 32px)',
                  textAlign: 'center',
                  transition: 'box-shadow 0.2s, transform 0.2s',
                  minWidth: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.08)'
                  e.currentTarget.style.transform = 'translateY(-3px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <div style={{
                  width: 52,
                  height: 52,
                  backgroundColor: '#FDF3EC',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                }}>
                  {val.icon}
                </div>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 20, color: '#1B2A4A', margin: '0 0 10px' }}>
                  {val.title}
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>
                  {val.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <button
              onClick={() => navigate('contact')}
              style={{
                backgroundColor: '#E85D04',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: 12,
                padding: '14px 32px',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: 16,
                cursor: 'pointer',
                minHeight: 52,
              }}
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
