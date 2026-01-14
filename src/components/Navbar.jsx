import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Archive, Menu, X } from 'lucide-react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isHome = location.pathname === '/'

  return (
    <nav className={`navbar ${scrolled || !isHome ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <Archive size={32} />
          <span>Archivist</span>
        </Link>

        <div className="navbar-links">
          <Link to="/">Accueil</Link>
          <Link to="/solution">Notre Solution</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/contact" className="navbar-cta">Demander une démo</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
