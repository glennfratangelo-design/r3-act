import { Routes, Route, Link } from 'react-router-dom'
import { Nav, Footer, ScrollToTop } from './components/Shared.jsx'
import Home from './pages/Home.jsx'
import Bill from './pages/Bill.jsx'
import Funding from './pages/Funding.jsx'
import Employers from './pages/Employers.jsx'
import Act from './pages/Act.jsx'
import Faq from './pages/Faq.jsx'

function NotFound() {
  return (
    <section className="s"><div className="wrap measure">
      <h2 style={{ fontSize: 56, textTransform: 'uppercase' }}>Page not found</h2>
      <p>That page doesn't exist. <Link to="/">Go to the home page</Link>.</p>
    </div></section>
  )
}

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <ScrollToTop />
      <Nav />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bill" element={<Bill />} />
          <Route path="/funding" element={<Funding />} />
          <Route path="/employers" element={<Employers />} />
          <Route path="/act" element={<Act />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
