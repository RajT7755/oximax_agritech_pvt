interface Props {
  label: string
  value: string
  unit?: string
}

export default function SpecBadge({ label, value, unit }: Props) {
  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        border: '1.5px solid #E8E4DE',
        borderRadius: 10,
        padding: '14px 18px',
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        minWidth: 100,
      }}
    >
      <span
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 11,
          fontWeight: 600,
          color: '#E85D04',
          letterSpacing: 0.8,
          textTransform: 'uppercase',
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: 22,
          fontWeight: 800,
          color: '#1B2A4A',
          lineHeight: 1.1,
        }}
      >
        {value}
        {unit && (
          <span style={{ fontSize: 13, fontWeight: 500, color: '#6B7280', marginLeft: 2 }}>
            {unit}
          </span>
        )}
      </span>
    </div>
  )
}
