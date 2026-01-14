import { Link } from 'react-router-dom'
import { 
  Archive, Shield, Clock, Search, FileText, Lock, Server, Users,
  CheckCircle, ArrowRight, AlertTriangle, FolderX, FileWarning, 
  ShieldAlert, Building2, Scale, Calculator, Landmark, Fuel,
  Scan, Database, Cloud, Headphones
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Home() {
  const problems = [
    { icon: FolderX, title: 'Archives désorganisées', text: 'Documents papier éparpillés, difficiles à classer et à retrouver.' },
    { icon: FileWarning, title: 'Risque de perte', text: 'Détérioration, incendie, inondation... vos archives sont vulnérables.' },
    { icon: Search, title: 'Recherche difficile', text: 'Des heures perdues à chercher un document légal ou comptable.' },
    { icon: ShieldAlert, title: 'Manque de sécurité', text: 'Pas de traçabilité, accès non contrôlé aux documents sensibles.' }
  ]

  const solutions = [
    { icon: Scan, title: 'Audit & Organisation', text: 'Analyse et classement logique de vos archives' },
    { icon: FileText, title: 'Numérisation', text: 'Scan haute qualité et indexation professionnelle' },
    { icon: Cloud, title: 'Plateforme sécurisée', text: 'Consultation 24/7 depuis n\'importe où' },
    { icon: Lock, title: 'Protection des données', text: 'Chiffrement et accès contrôlé par utilisateur' }
  ]

  const clients = [
    { icon: Building2, title: 'Entreprises' },
    { icon: Scale, title: 'Cabinets d\'avocats' },
    { icon: Calculator, title: 'Cabinets comptables' },
    { icon: Landmark, title: 'Services administratifs' },
    { icon: Fuel, title: 'Stations-service' }
  ]

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-glow hero-glow-1"></div>
        <div className="hero-glow hero-glow-2"></div>
        
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <Shield size={16} />
              <span>Solution certifiée & sécurisée</span>
            </div>
            
            <h1 className="hero-title">
              Vos archives.<br />
              <span>Sécurisées. Organisées. Accessibles.</span>
            </h1>
            
            <p className="hero-subtitle">
              Archivist accompagne les entreprises, cabinets juridiques, comptables et services 
              administratifs dans la digitalisation et la gestion sécurisée de leurs archives 
              physiques et numériques.
            </p>
            
            <div className="hero-features">
              <div className="hero-feature">
                <CheckCircle size={20} />
                <span>Gagnez du temps sur la recherche de documents</span>
              </div>
              <div className="hero-feature">
                <CheckCircle size={20} />
                <span>Réduisez les risques de perte et de détérioration</span>
              </div>
              <div className="hero-feature">
                <CheckCircle size={20} />
                <span>Accédez à vos documents à tout moment, partout</span>
              </div>
            </div>
            
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Demander une démo
                <ArrowRight size={20} />
              </Link>
              <Link to="/solution" className="btn btn-secondary btn-lg">
                Découvrir la solution
              </Link>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="hero-card animate-float">
              <div className="hero-card-header">
                <div className="hero-card-icon">
                  <Archive size={28} />
                </div>
                <div>
                  <div className="hero-card-title">Tableau de bord</div>
                  <div className="hero-card-subtitle">Vue d'ensemble de vos archives</div>
                </div>
              </div>
              <div className="hero-stats">
                <div className="hero-stat">
                  <div className="hero-stat-value">2,847</div>
                  <div className="hero-stat-label">Documents</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-value">99.9%</div>
                  <div className="hero-stat-label">Disponibilité</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-value">256</div>
                  <div className="hero-stat-label">Bit AES</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="problem-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <AlertTriangle size={16} />
              Le problème
            </div>
            <h2 className="section-title">
              Pourquoi digitaliser vos archives ?
            </h2>
            <p className="section-subtitle">
              Les archives papier représentent un risque majeur pour votre entreprise. 
              Voici les défis auxquels vous faites face quotidiennement.
            </p>
          </div>

          <div className="problem-grid">
            {problems.map((problem, index) => (
              <div key={index} className="problem-card">
                <div className="problem-icon">
                  <problem.icon size={28} />
                </div>
                <h3 className="problem-title">{problem.title}</h3>
                <p className="problem-text">{problem.text}</p>
              </div>
            ))}
          </div>

          <div className="problem-alert">
            <AlertTriangle size={24} />
            <span>Un document perdu peut coûter très cher à votre entreprise.</span>
          </div>
        </div>
      </section>

      {/* Solution Preview */}
      <section className="solution-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <CheckCircle size={16} />
              Notre solution
            </div>
            <h2 className="section-title">
              Archivist, votre partenaire digital
            </h2>
            <p className="section-subtitle">
              Une solution complète pour transformer vos archives papier en ressources 
              numériques sécurisées et facilement accessibles.
            </p>
          </div>

          <div className="solution-grid">
            {solutions.map((solution, index) => (
              <div key={index} className="solution-card">
                <div className="solution-card-icon">
                  <solution.icon size={32} />
                </div>
                <h3 className="solution-card-title">{solution.title}</h3>
                <p className="solution-card-subtitle">{solution.text}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/solution" className="btn btn-primary btn-lg">
              Découvrir tous nos services
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="security-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge" style={{ background: 'rgba(255,255,255,0.1)', color: 'white' }}>
              <Lock size={16} />
              Sécurité & Confidentialité
            </div>
            <h2 className="section-title">
              Vos données sont entre de bonnes mains
            </h2>
            <p className="section-subtitle">
              Nous traitons des documents sensibles et légaux. 
              La sécurité est notre priorité absolue.
            </p>
          </div>

          <div className="security-grid">
            <div className="security-card">
              <div className="security-icon">
                <FileText size={28} />
              </div>
              <h3 className="security-title">NDA</h3>
              <p className="security-text">Contrat de confidentialité signé</p>
            </div>
            <div className="security-card">
              <div className="security-icon">
                <Lock size={28} />
              </div>
              <h3 className="security-title">Chiffrement</h3>
              <p className="security-text">Données chiffrées AES-256</p>
            </div>
            <div className="security-card">
              <div className="security-icon">
                <Users size={28} />
              </div>
              <h3 className="security-title">Accès sécurisé</h3>
              <p className="security-text">Contrôle par utilisateur</p>
            </div>
            <div className="security-card">
              <div className="security-icon">
                <Server size={28} />
              </div>
              <h3 className="security-title">Hébergement 🇲🇦</h3>
              <p className="security-text">Serveurs au Maroc (priorité)</p>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div className="security-badge">
              <Shield size={20} />
              Vos données restent confidentielles et protégées
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="clients-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <Users size={16} />
              Clients cibles
            </div>
            <h2 className="section-title">
              À qui s'adresse Archivist ?
            </h2>
            <p className="section-subtitle">
              Notre solution est conçue pour les professionnels qui gèrent 
              des volumes importants de documents sensibles.
            </p>
          </div>

          <div className="clients-grid">
            {clients.map((client, index) => (
              <div key={index} className="client-card">
                <div className="client-icon">
                  <client.icon size={32} />
                </div>
                <h3 className="client-title">{client.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ 
        background: 'var(--gradient-primary)', 
        padding: '5rem 2rem',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: '800', 
            color: 'white',
            marginBottom: '1rem'
          }}>
            Prêt à digitaliser vos archives ?
          </h2>
          <p style={{ 
            fontSize: '1.25rem', 
            color: 'rgba(255,255,255,0.9)',
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Contactez-nous dès aujourd'hui pour une démonstration gratuite 
            et découvrez comment Archivist peut transformer votre gestion documentaire.
          </p>
          <Link to="/contact" className="btn btn-lg" style={{
            background: 'white',
            color: 'var(--primary)',
            fontWeight: '700'
          }}>
            Demander une démo gratuite
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Home
