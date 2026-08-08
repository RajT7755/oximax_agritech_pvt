import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetailSMP from './pages/ProductDetailSMP'
import ProductDetailButter from './pages/ProductDetailButter'
import About from './pages/About'
import Contact from './pages/Contact'

export type Page = 'home' | 'products' | 'smp' | 'butter' | 'about' | 'contact'

export default function App() {
  const [page, setPage] = useState<Page>('home')

  const navigate = (p: Page) => {
    setPage(p)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div
      style={{
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '100%',
        overflowX: 'hidden',
      }}
    >
      <Header currentPage={page} navigate={navigate} />
      <main style={{ flex: 1, width: '100%', minWidth: 0 }}>
        {page === 'home' && <Home navigate={navigate} />}
        {page === 'products' && <Products navigate={navigate} />}
        {page === 'smp' && <ProductDetailSMP navigate={navigate} />}
        {page === 'butter' && <ProductDetailButter navigate={navigate} />}
        {page === 'about' && <About navigate={navigate} />}
        {page === 'contact' && <Contact navigate={navigate} />}
      </main>
      <Footer navigate={navigate} />
    </div>
  )
}
