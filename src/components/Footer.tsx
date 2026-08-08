import type { Page } from '../App'
import logoImg from '../assets/images/logo-footer.jpeg'

interface Props {
  navigate: (p: Page) => void
}

export default function Footer({ navigate }: Props) {
  return (
    <footer style={{ backgroundColor: '#1B2A4A', color: '#FFFFFF', padding: '48px 0' }}>
      <div className="container">
        <div className="footer-top">
          <div>
            <button
              onClick={() => navigate('home')}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                marginBottom: 16,
              }}
            >
              <img
                src={logoImg}
                alt="OXIMAX AGRITECH Industries Private Limited"
                className="footer-logo"
              />
            </button>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 13,
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.65,
              margin: '0 0 10px',
              maxWidth: 340,
            }}>
              OXIMAX AGRITECH INDUSTRIES PVT. LTD. PUNE<br />
              Factory: G.No 120/4, A/p-Jawkhede (Khalsa),<br />
              Tal.-Pathardi, Dist-Ahilyanagar, MH 414505
            </p>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 13,
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.65,
              margin: 0,
              maxWidth: 340,
            }}>
              FSSAI: 11526999000564<br />
              <a href="mailto:customercareoximax2@gmail.com" style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }}>customercareoximax2@gmail.com</a><br />
              Call: <a href="tel:+917276861719" style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }}>+91 72768 61719</a>
            </p>
          </div>

          <div className="footer-links">
            <div>
              <h4 style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: 13,
                color: 'rgba(255,255,255,0.5)',
                letterSpacing: 1,
                textTransform: 'uppercase',
                marginBottom: 16,
              }}>
                Products
              </h4>
              {[
                { label: 'Instant SMP', page: 'smp' as Page },
                { label: 'Table Butter 5 kg', page: 'butter' as Page },
                { label: 'All Products', page: 'products' as Page },
              ].map((item) => (
                <button
                  key={item.page + item.label}
                  onClick={() => navigate(item.page)}
                  style={{
                    display: 'block',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '5px 0',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 14,
                    color: 'rgba(255,255,255,0.65)',
                    textAlign: 'left',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#FFFFFF' }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.65)' }}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div>
              <h4 style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: 13,
                color: 'rgba(255,255,255,0.5)',
                letterSpacing: 1,
                textTransform: 'uppercase',
                marginBottom: 16,
              }}>
                Company
              </h4>
              {[
                { label: 'About Us', page: 'about' as Page },
                { label: 'Contact', page: 'contact' as Page },
              ].map((item) => (
                <button
                  key={item.page}
                  onClick={() => navigate(item.page)}
                  style={{
                    display: 'block',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '5px 0',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 14,
                    color: 'rgba(255,255,255,0.65)',
                    textAlign: 'left',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#FFFFFF' }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.65)' }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: 24,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 12,
        }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0 }}>
            © 2026 OXIMAX AGRITECH Industries Private Limited. All rights reserved.
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0 }}>
            FSSAI Lic. 11526999000564 · Made in India
          </p>
        </div>
      </div>
    </footer>
  )
}
