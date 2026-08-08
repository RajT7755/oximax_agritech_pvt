import { useState } from 'react'
import type { Page } from '../App'
import logoImg from '../assets/images/logo-header.jpeg'

const NAV = [
  { label: 'Home', page: 'home' as Page },
  { label: 'Products', page: 'products' as Page },
  { label: 'About Us', page: 'about' as Page },
  { label: 'Contact', page: 'contact' as Page },
]

interface Props {
  currentPage: Page
  navigate: (p: Page) => void
}

export default function Header({ currentPage, navigate }: Props) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid #F3F4F6',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: 80,
          height: 'auto',
          paddingTop: 10,
          paddingBottom: 10,
          gap: 16,
        }}
      >
        <button
          onClick={() => { navigate('home'); setMenuOpen(false) }}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            flexShrink: 0,
            minWidth: 0,
            lineHeight: 0,
          }}
          aria-label="OXIMAX AGRITECH — go to homepage"
        >
          <img
            src={logoImg}
            alt="OXIMAX AGRITECH Industries Private Limited"
            className="header-logo"
            decoding="async"
          />
        </button>

        <nav className="desk-nav" aria-label="Main">
          {NAV.map((item) => (
            <button
              key={item.page}
              onClick={() => navigate(item.page)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px 14px',
                borderRadius: 8,
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: 14,
                color: currentPage === item.page ? '#E85D04' : '#374151',
                transition: 'color 0.2s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                if (currentPage !== item.page) e.currentTarget.style.color = '#E85D04'
              }}
              onMouseLeave={(e) => {
                if (currentPage !== item.page) e.currentTarget.style.color = '#374151'
              }}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => navigate('contact')}
            style={{
              marginLeft: 12,
              backgroundColor: '#E85D04',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: 8,
              padding: '10px 22px',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 600,
              fontSize: 14,
              cursor: 'pointer',
              minHeight: 44,
              transition: 'background-color 0.2s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#D45303' }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#E85D04' }}
          >
            Request Quote
          </button>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="burger-btn"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="4" y1="6" x2="20" y2="6" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #F3F4F6', padding: '8px 16px 24px' }}>
          {NAV.map((item) => (
            <button
              key={item.page}
              onClick={() => { navigate(item.page); setMenuOpen(false) }}
              style={{
                display: 'block',
                width: '100%',
                background: 'none',
                cursor: 'pointer',
                border: 'none',
                borderBottom: '1px solid #F9FAFB',
                padding: '14px 0',
                textAlign: 'left',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: 16,
                color: currentPage === item.page ? '#E85D04' : '#374151',
              }}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => { navigate('contact'); setMenuOpen(false) }}
            style={{
              marginTop: 16,
              width: '100%',
              backgroundColor: '#E85D04',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: 8,
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
      )}
    </header>
  )
}
