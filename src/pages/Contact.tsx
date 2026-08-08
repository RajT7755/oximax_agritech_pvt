import { useState } from 'react'
import type { Page } from '../App'

interface Props {
  navigate: (p: Page) => void
}

const faqs = [
  {
    q: 'What is the minimum order quantity?',
    a: 'Minimum order quantities vary by product. For Instant SMP, MOQ is typically 1 metric tonne. For Table Butter, MOQ is 100 kg. Contact us to discuss your specific requirements.',
  },
  {
    q: 'Do you supply a Certificate of Analysis with each batch?',
    a: 'Yes. Every consignment is supplied with a full Certificate of Analysis (CoA) and Technical Data Sheet (TDS) from our quality team.',
  },
  {
    q: 'Are your products FSSAI licensed?',
    a: 'Yes. OXIMAX AGRITECH INDUSTRIES PVT. LTD. is FSSAI licensed (License No. 11526999000564). Our products comply with FSSAI standards and we can provide license documentation on request.',
  },
  {
    q: 'What packaging formats are available for SMP?',
    a: 'Our Instant SMP is available in 25 kg multi-layer kraft paper bags with inner poly liner as standard. Custom bulk and private-label packaging is available — please enquire.',
  },
  {
    q: 'How do I request a product sample?',
    a: 'Fill in the contact form on this page or email us directly. Include your company name, product interest, and intended application and we will arrange a sample dispatch.',
  },
  {
    q: 'What is the shelf life of your products?',
    a: 'Instant SMP has a 24-month shelf life from date of manufacture when stored in sealed original packaging below 25°C. Table Butter has a 12-month shelf life when stored frozen at ≤−18°C.',
  },
]

export default function Contact({ navigate: _navigate }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: '', company: '', product: '', email: '', phone: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 16px',
    fontFamily: "'Inter', sans-serif",
    fontSize: 15,
    color: '#1B2A4A',
    backgroundColor: '#FFFFFF',
    border: '1.5px solid #E8E4DE',
    borderRadius: 8,
    outline: 'none',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: "'Inter', sans-serif",
    fontSize: 13,
    fontWeight: 600,
    color: '#1B2A4A',
    marginBottom: 6,
  }

  return (
    <>
      {/* Page Header */}
      <section style={{ backgroundColor: '#1B2A4A', padding: 'clamp(40px, 6vw, 64px) 0 clamp(36px, 5vw, 56px)', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle at 80% 50%, rgba(232,93,4,0.1) 0%, transparent 55%)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ maxWidth: 1200, position: 'relative' }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 700, color: '#E85D04', letterSpacing: 1.5, textTransform: 'uppercase' }}>
            Contact &amp; Customer Care
          </span>
          <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 'clamp(28px, 5vw, 44px)', color: '#FFFFFF', margin: '12px 0 16px', lineHeight: 1.15 }}>
            Let&apos;s Talk
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(15px, 2vw, 17px)', color: 'rgba(255,255,255,0.7)', maxWidth: 520, lineHeight: 1.7, margin: 0 }}>
            Reach out for quotes, samples, technical specifications, or any other enquiries. We respond within one business day.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section style={{ backgroundColor: '#FDFBF7', padding: 'clamp(40px, 6vw, 64px) 0' }}>
        <div className="container contact-grid" style={{ maxWidth: 1200 }}>

          {/* Form */}
          <div style={{ minWidth: 0 }}>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 'clamp(20px, 3vw, 24px)', color: '#1B2A4A', margin: '0 0 32px' }}>
              Send Us a Message
            </h2>

            {submitted ? (
              <div style={{
                backgroundColor: '#F0FDF4', border: '1.5px solid #BBF7D0', borderRadius: 12,
                padding: 32, textAlign: 'center',
              }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>✓</div>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 20, color: '#166534', margin: '0 0 10px' }}>
                  Message Sent!
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: '#15803D', margin: 0 }}>
                  Thank you. We&apos;ll get back to you within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div className="form-row">
                  <div>
                    <label htmlFor="name" style={labelStyle}>Full Name *</label>
                    <input
                      id="name" type="text" required placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = '#E85D04' }}
                      onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = '#E8E4DE' }}
                    />
                  </div>
                  <div>
                    <label htmlFor="company" style={labelStyle}>Company *</label>
                    <input
                      id="company" type="text" required placeholder="Company name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = '#E85D04' }}
                      onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = '#E8E4DE' }}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" style={labelStyle}>Email Address *</label>
                  <input
                    id="email" type="email" required placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = '#E85D04' }}
                    onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = '#E8E4DE' }}
                  />
                </div>

                <div>
                  <label htmlFor="phone" style={labelStyle}>Phone / WhatsApp</label>
                  <input
                    id="phone" type="tel" placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = '#E85D04' }}
                    onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = '#E8E4DE' }}
                  />
                </div>

                <div>
                  <label htmlFor="product" style={labelStyle}>Product Interest *</label>
                  <select
                    id="product" required
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    style={{ ...inputStyle, appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 7L11 1' stroke='%236B7280' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center', cursor: 'pointer' }}
                    onFocus={(e) => { (e.target as HTMLSelectElement).style.borderColor = '#E85D04' }}
                    onBlur={(e) => { (e.target as HTMLSelectElement).style.borderColor = '#E8E4DE' }}
                  >
                    <option value="">Select a product...</option>
                    <option value="smp">Instant Spray Dried Skimmed Milk Powder</option>
                    <option value="butter">Table Butter 5 kg</option>
                    <option value="both">Both Products</option>
                    <option value="other">General Enquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" style={labelStyle}>Message *</label>
                  <textarea
                    id="message" required rows={5}
                    placeholder="Tell us about your requirements — volume, application, delivery location..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
                    onFocus={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = '#E85D04' }}
                    onBlur={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = '#E8E4DE' }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    backgroundColor: '#E85D04', color: '#FFFFFF', border: 'none', borderRadius: 10,
                    padding: '16px', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700,
                    fontSize: 16, cursor: 'pointer', minHeight: 56, transition: 'background-color 0.2s',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget).style.backgroundColor = '#c94d00' }}
                  onMouseLeave={(e) => { (e.currentTarget).style.backgroundColor = '#E85D04' }}
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32, minWidth: 0 }}>
            <div>
              <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 'clamp(20px, 3vw, 24px)', color: '#1B2A4A', margin: '0 0 24px' }}>
                Contact Information
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  {
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E85D04" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.28a16 16 0 006.81 6.81l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                      </svg>
                    ),
                    label: 'Phone / Call',
                    value: '+91 72768 61719',
                  },
                  {
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E85D04" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                      </svg>
                    ),
                    label: 'Email',
                    value: 'customercareoximax2@gmail.com',
                  },
                  {
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E85D04" strokeWidth="2">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                    ),
                    label: 'WhatsApp',
                    value: '+91 72768 61719',
                  },
                  {
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E85D04" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                      </svg>
                    ),
                    label: 'Manufactured & Marketed By',
                    value: 'OXIMAX AGRITECH INDUSTRIES PVT. LTD. PUNE',
                  },
                  {
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E85D04" strokeWidth="2">
                        <path d="M3 21h18M5 21V7l8-4 8 4v14M9 21v-6h6v6" />
                      </svg>
                    ),
                    label: 'Factory Address',
                    value: 'G.No 120/4, A/p-Jawkhede (Khalsa), Tal.-Pathardi, Dist-Ahilyanagar, MH 414505',
                  },
                  {
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E85D04" strokeWidth="2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    ),
                    label: 'FSSAI License Number',
                    value: '11526999000564',
                  },
                ].map((contact) => (
                  <div key={contact.label} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                    <div style={{ width: 40, height: 40, backgroundColor: '#FDF3EC', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {contact.icon}
                    </div>
                    <div>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 2 }}>
                        {contact.label}
                      </div>
                      <div style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 15,
                        color: '#1B2A4A',
                        fontWeight: 500,
                        lineHeight: 1.55,
                        overflowWrap: 'break-word',
                      }}>
                        {contact.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div style={{ backgroundColor: '#FFFFFF', border: '1.5px solid #E8E4DE', borderRadius: 12, padding: 24 }}>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 16, color: '#1B2A4A', margin: '0 0 16px' }}>Business Hours</h3>
              {[
                ['Monday – Friday', '9:00 AM – 6:00 PM'],
                ['Saturday', '9:00 AM – 2:00 PM'],
                ['Sunday', 'Closed'],
              ].map(([day, time]) => (
                <div key={day} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #F3F4F6' }}>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#6B7280' }}>{day}</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 600, color: '#1B2A4A' }}>{time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #E8E4DE', padding: 'clamp(40px, 6vw, 64px) 0 clamp(48px, 8vw, 80px)' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 700, color: '#E85D04', letterSpacing: 1.5, textTransform: 'uppercase' }}>
              Customer Care
            </span>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 'clamp(24px, 3.5vw, 36px)', color: '#1B2A4A', margin: '12px 0' }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  border: '1.5px solid',
                  borderColor: openFaq === i ? '#E85D04' : '#E8E4DE',
                  borderRadius: 12,
                  overflow: 'hidden',
                  transition: 'border-color 0.2s',
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: '100%', background: 'none', border: 'none', cursor: 'pointer',
                    padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    gap: 16, textAlign: 'left',
                  }}
                >
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 16, color: '#1B2A4A', lineHeight: 1.4 }}>
                    {faq.q}
                  </span>
                  <span style={{
                    color: '#E85D04', fontSize: 20, fontWeight: 300, flexShrink: 0,
                    transform: openFaq === i ? 'rotate(45deg)' : 'none',
                    transition: 'transform 0.2s',
                    display: 'inline-block',
                  }}>
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: '0 24px 20px', borderTop: '1px solid #F3F4F6' }}>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: '#4B5563', lineHeight: 1.75, margin: '16px 0 0' }}>
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
