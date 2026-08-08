import type { Page } from '../App'
import smpImg from '../assets/images/smp-product.jpeg'

interface Props {
  navigate: (p: Page) => void
}

export default function ProductDetailSMP({ navigate }: Props) {
  return (
    <>
      <div style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #F3F4F6', padding: '12px 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
          {[{ label: 'Home', page: 'home' as Page }, { label: 'Products', page: 'products' as Page }].map((c) => (
            <span key={c.page} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <button
                onClick={() => navigate(c.page)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#6B7280', padding: 0 }}
              >
                {c.label}
              </button>
              <span style={{ color: '#D1D5DB', fontSize: 13 }}>›</span>
            </span>
          ))}
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#1B2A4A', fontWeight: 500 }}>Instant SMP</span>
        </div>
      </div>

      <section style={{ backgroundColor: '#FDFBF7', padding: 'clamp(32px, 5vw, 48px) 0 clamp(40px, 6vw, 64px)' }}>
        <div className="container">
          <div className="detail-grid">
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 20,
              padding: 'clamp(20px, 4vw, 40px)',
              border: '1px solid #F3F4F6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: 0,
            }}>
              <img
                src={smpImg}
                alt="Instant Spray Dried Skimmed Milk Powder"
                className="img-contain"
                style={{ maxHeight: 420, width: '100%', height: 'auto' }}
              />
            </div>

            <div style={{ minWidth: 0 }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700, color: '#E85D04', letterSpacing: 2, textTransform: 'uppercase', margin: '0 0 12px' }}>
                Dairy Ingredient
              </p>
              <h1 style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(24px, 4vw, 36px)',
                color: '#1B2A4A',
                margin: '0 0 16px',
                lineHeight: 1.2,
              }}>
                Instant Spray Dried Skimmed Milk Powder
              </h1>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: '#6B7280', lineHeight: 1.75, margin: '0 0 32px' }}>
                High-protein, low-fat Instant SMP with excellent solubility. Designed for bakery, confectionery, ice cream and nutritional applications.
              </p>

              <div className="spec-row-3" style={{ marginBottom: 32 }}>
                {[
                  { value: '34%', label: 'Protein' },
                  { value: '≤1.5%', label: 'Fat' },
                  { value: '≤4%', label: 'Moisture' },
                ].map((s) => (
                  <div key={s.label} style={{ backgroundColor: '#FFFFFF', border: '1px solid #F3F4F6', borderRadius: 12, padding: 16, textAlign: 'center', minWidth: 0 }}>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 'clamp(18px, 3vw, 22px)', color: '#E85D04', lineHeight: 1 }}>{s.value}</div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#9CA3AF', marginTop: 6 }}>{s.label}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                <button
                  onClick={() => navigate('contact')}
                  style={{
                    backgroundColor: '#E85D04',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: 10,
                    padding: '14px 28px',
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: 15,
                    cursor: 'pointer',
                    minHeight: 50,
                    flex: '1 1 160px',
                    transition: 'background-color 0.2s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#D45303' }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#E85D04' }}
                >
                  Request Quote
                </button>
                <button
                  style={{
                    backgroundColor: 'transparent',
                    color: '#1B2A4A',
                    border: '2px solid #1B2A4A',
                    borderRadius: 10,
                    padding: '14px 24px',
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: 15,
                    cursor: 'pointer',
                    minHeight: 50,
                    flex: '1 1 160px',
                    transition: 'all 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#1B2A4A'
                    e.currentTarget.style.color = '#FFFFFF'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.color = '#1B2A4A'
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download Spec Sheet
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #F3F4F6', padding: 'clamp(40px, 6vw, 64px) 0' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 'clamp(20px, 3vw, 24px)', color: '#1B2A4A', margin: '0 0 16px' }}>
            Product Description
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: '#4B5563', lineHeight: 1.8, margin: '0 0 48px' }}>
            Our Instant Spray Dried Skimmed Milk Powder is produced for consistent performance in industrial applications. With 34% protein and excellent solubility, it is ideal for manufacturers looking for reliable dairy solids.
          </p>

          <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 20, color: '#1B2A4A', margin: '0 0 16px' }}>
            Applications
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 48px', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              'Bakery and confectionery',
              'Ice cream and frozen desserts',
              'Reconstituted milk and dairy drinks',
              'Yoghurt and cultured products',
              'Nutritional and protein-fortified foods',
            ].map((item) => (
              <li key={item} style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: '#4B5563' }}>• {item}</li>
            ))}
          </ul>

          <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 20, color: '#1B2A4A', margin: '0 0 16px' }}>
            Packaging &amp; Storage
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              'Multi-wall kraft paper bags',
              'Store in a cool and dry place',
              'Use no hooks',
              'Protect from moisture and direct sunlight',
            ].map((item) => (
              <li key={item} style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: '#4B5563' }}>• {item}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
