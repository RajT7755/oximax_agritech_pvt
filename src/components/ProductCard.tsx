import type { Page } from '../App'

interface Props {
  image: string
  imageAlt: string
  title: string
  description: string
  badges?: { label: string; value: string }[]
  detailPage: Page
  navigate: (p: Page) => void
}

export default function ProductCard({ image, imageAlt, title, description, badges, detailPage, navigate }: Props) {
  return (
    <article
      style={{
        backgroundColor: '#FFFFFF',
        border: '1.5px solid #E8E4DE',
        borderRadius: 16,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'box-shadow 0.25s, transform 0.25s',
        minWidth: 0,
        width: '100%',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget
        el.style.boxShadow = '0 12px 40px rgba(27,42,74,0.12)'
        el.style.transform = 'translateY(-3px)'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        el.style.boxShadow = 'none'
        el.style.transform = 'translateY(0)'
      }}
    >
      <div className="img-frame" style={{ aspectRatio: '16 / 10', backgroundColor: '#F5F0E8' }}>
        <img
          src={image}
          alt={imageAlt}
          className="img-contain"
          style={{ transition: 'transform 0.4s' }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.03)' }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)' }}
        />
      </div>

      <div style={{ padding: 'clamp(16px, 3vw, 24px)', display: 'flex', flexDirection: 'column', gap: 12, flex: 1, minWidth: 0 }}>
        <h3
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(17px, 2.5vw, 20px)',
            color: '#1B2A4A',
            lineHeight: 1.3,
            margin: 0,
            overflowWrap: 'break-word',
          }}
        >
          {title}
        </h3>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 14,
            color: '#4B5563',
            lineHeight: 1.6,
            margin: 0,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {description}
        </p>

        {badges && badges.length > 0 && (
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 4 }}>
            {badges.map((b) => (
              <span
                key={b.label}
                style={{
                  backgroundColor: '#FDF3EC',
                  border: '1px solid #FBCBA0',
                  color: '#C44B00',
                  borderRadius: 6,
                  padding: '3px 10px',
                  fontSize: 12,
                  fontWeight: 600,
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {b.label}: {b.value}
              </span>
            ))}
          </div>
        )}

        <div style={{ marginTop: 'auto', paddingTop: 16 }}>
          <button
            onClick={() => navigate(detailPage)}
            style={{
              backgroundColor: '#E85D04',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: 8,
              padding: '12px 24px',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: 14,
              cursor: 'pointer',
              width: '100%',
              minHeight: 48,
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#c94d00' }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#E85D04' }}
          >
            View Details →
          </button>
        </div>
      </div>
    </article>
  )
}
