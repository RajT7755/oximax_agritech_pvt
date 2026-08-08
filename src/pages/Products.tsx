import type { Page } from '../App'
import ProductCard from '../components/ProductCard'
import smpImg from '../assets/images/smp-product.jpeg'
import butterImg from '../assets/images/butter-product.jpeg'

interface Props {
  navigate: (p: Page) => void
}

export default function Products({ navigate }: Props) {
  return (
    <>
      <section style={{ backgroundColor: '#FDFBF7', padding: 'clamp(40px, 6vw, 64px) 0 clamp(36px, 5vw, 56px)' }}>
        <div className="container" style={{ maxWidth: 1200 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
            <button
              onClick={() => navigate('home')}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9CA3AF', fontSize: 14, fontFamily: "'Inter', sans-serif", padding: 0 }}
            >
              Home
            </button>
            <span style={{ color: '#D1D5DB', fontSize: 14 }}>›</span>
            <span style={{ color: '#E85D04', fontSize: 14, fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>Products</span>
          </div>
          <h1 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(28px, 5vw, 48px)',
            color: '#1B2A4A',
            margin: '0 0 16px',
            lineHeight: 1.15,
          }}>
            Our Products
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(15px, 2vw, 17px)', color: '#6B7280', maxWidth: 560, lineHeight: 1.7, margin: 0 }}>
            Premium dairy ingredients for food manufacturers. Consistent specifications, reliable supply, FSSAI licensed.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #E8E4DE' }}>
        <div className="container" style={{ maxWidth: 1200, display: 'flex', gap: 0, overflowX: 'auto' }}>
          <div style={{
            padding: '16px 20px',
            fontFamily: "'Inter', sans-serif",
            fontSize: 14,
            fontWeight: 700,
            color: '#E85D04',
            borderBottom: '2px solid #E85D04',
            whiteSpace: 'nowrap',
          }}>
            All Products
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#FDFBF7', padding: 'clamp(40px, 6vw, 64px) 0 clamp(48px, 8vw, 80px)' }}>
        <div className="container" style={{ maxWidth: 1200 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32, flexWrap: 'wrap', gap: 12 }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#6B7280', margin: 0 }}>
              Showing <strong style={{ color: '#1B2A4A' }}>2</strong> products
            </p>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#6B7280' }}>Made for Food Manufacturers</span>
              <span style={{ backgroundColor: '#FDF3EC', border: '1px solid #FBCBA0', color: '#C44B00', borderRadius: 6, padding: '2px 10px', fontSize: 12, fontWeight: 600, fontFamily: "'Inter', sans-serif" }}>
                B2B Only
              </span>
            </div>
          </div>

          <div className="product-grid">
            <ProductCard
              image={smpImg}
              imageAlt="OXIMAX Instant Spray Dried Skimmed Milk Powder in kraft bag"
              title="Instant Spray Dried Skimmed Milk Powder"
              description="High-protein, low-fat Instant SMP designed for bakery, confectionery, ice cream, and nutritional applications. Excellent solubility with consistent specifications batch after batch."
              badges={[
                { label: 'Protein', value: '34% min' },
                { label: 'Fat', value: '≤1.5%' },
                { label: 'Moisture', value: '≤4%' },
              ]}
              detailPage="smp"
              navigate={navigate}
            />
            <ProductCard
              image={butterImg}
              imageAlt="OXIMAX Table Butter 10 kg cardboard box"
              title="Table Butter 10 kg"
              description="Premium Table Butter for foodservice and industrial use — consistent taste, texture, and performance. Reliable local supply for food manufacturers and operators."
              badges={[{ label: 'Net Weight', value: '10 kg' }]}
              detailPage="butter"
              navigate={navigate}
            />
          </div>

          <div
            style={{
              marginTop: 'clamp(40px, 6vw, 64px)',
              backgroundColor: '#FFFFFF',
              border: '1.5px solid #E8E4DE',
              borderRadius: 16,
              padding: 'clamp(24px, 4vw, 40px)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 24,
            }}
          >
            <div style={{ minWidth: 0, flex: '1 1 240px' }}>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 'clamp(18px, 3vw, 22px)', color: '#1B2A4A', margin: '0 0 8px' }}>
                Need a Custom Specification?
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: '#6B7280', margin: 0 }}>
                Contact us to discuss volume pricing, packaging options, and technical specs.
              </p>
            </div>
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
                minHeight: 48,
                whiteSpace: 'nowrap',
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#c94d00' }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#E85D04' }}
            >
              Request Quote →
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
