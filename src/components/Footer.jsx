import { Link } from 'react-router-dom'
import { Archive, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="navbar-logo" style={{ color: 'white' }}>
              <Archive size={28} />
              <span>Archivist</span>
            </Link>
            <p>
              Votre partenaire de confiance pour la gestion sécurisée 
              de vos archives numériques et physiques au Maroc.
            </p>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Navigation</h4>
            <div className="footer-links">
              <Link to="/">Accueil</Link>
              <Link to="/solution">Notre Solution</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Services</h4>
            <div className="footer-links">
              <a href="#">Audit & Organisation</a>
              <a href="#">Numérisation</a>
              <a href="#">Plateforme SaaS</a>
              <a href="#">Support</a>
            </div>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Contact</h4>
            <div className="footer-links">
              <a href="mailto:contact@archivist.ma">contact@archivist.ma</a>
              <a href="tel:+212600000000">06 XX XX XX XX</a>
              <a href="#">Maroc</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 Archivist. Tous droits réservés.</p>
          <div className="footer-social">
            <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
            <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
