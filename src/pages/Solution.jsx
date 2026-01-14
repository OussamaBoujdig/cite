import { Link } from 'react-router-dom'
import { 
  CheckCircle, ArrowRight, Scan, FileText, Search, Database,
  Cloud, Headphones, Lock, Shield, Server, Users, Clock,
  Zap, Settings, BarChart3
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Solution() {
  const setupFeatures = [
    'Analyse complète de vos archives existantes',
    'Classement logique (par client, date, type…)',
    'Numérisation haute qualité (300 DPI+)',
    'Indexation et métadonnées pour recherche rapide',
    'Livraison sur plateforme sécurisée'
  ]

  const saasFeatures = [
    'Consultation des archives 24h/24, 7j/7',
    'Recherche rapide par mots-clés',
    'Filtres avancés (date, catégorie, client)',
    'Sauvegarde automatique et redondante',
    'Support technique dédié',
    'Mises à jour régulières'
  ]

  const securityFeatures = [
    { icon: FileText, title: 'NDA signé', text: 'Contrat de confidentialité avant tout projet' },
    { icon: Lock, title: 'Chiffrement AES-256', text: 'Vos données sont chiffrées de bout en bout' },
    { icon: Users, title: 'Accès par utilisateur', text: 'Contrôle granulaire des permissions' },
    { icon: Server, title: 'Hébergement sécurisé', text: 'Serveurs au Maroc en priorité' }
  ]

  return (
    <>
      <Navbar />
      
      {/* Hero */}
      <section style={{
        background: 'var(--gradient-hero)',
        paddingTop: '10rem',
        paddingBottom: '5rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="hero-glow hero-glow-1"></div>
        <div className="hero-glow hero-glow-2"></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-badge" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', marginBottom: '1.5rem' }}>
            <Settings size={16} />
            Notre Solution
          </div>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '800',
            color: 'white',
            marginBottom: '1.5rem',
            lineHeight: '1.2'
          }}>
            Une solution complète pour<br />
            <span style={{ color: 'var(--accent)' }}>vos archives</span>
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: 'rgba(255,255,255,0.8)',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            De l'audit initial à la consultation quotidienne, Archivist vous accompagne 
            à chaque étape de votre transformation digitale.
          </p>
        </div>
      </section>

      {/* Mise en place */}
      <section style={{ padding: '6rem 2rem', background: 'white' }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '4rem',
            alignItems: 'center'
          }}>
            <div>
              <div className="section-badge">
                <Zap size={16} />
                Étape 1
              </div>
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: '800',
                color: 'var(--gray-900)',
                marginBottom: '1rem'
              }}>
                Mise en place <span style={{ color: 'var(--primary)' }}>(one-shot)</span>
              </h2>
              <p style={{
                fontSize: '1.125rem',
                color: 'var(--gray-500)',
                marginBottom: '2rem',
                lineHeight: '1.7'
              }}>
                Nous prenons en charge l'intégralité du processus de digitalisation 
                de vos archives existantes. Un projet clé en main.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                {setupFeatures.map((feature, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <CheckCircle size={20} color="var(--success)" />
                    <span style={{ color: 'var(--gray-700)' }}>{feature}</span>
                  </div>
                ))}
              </div>

              <div style={{
                background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
                padding: '1.5rem 2rem',
                borderRadius: '1rem',
                border: '1px solid #bfdbfe'
              }}>
                <div style={{ fontSize: '0.875rem', color: 'var(--gray-500)', marginBottom: '0.5rem' }}>
                  Tarif indicatif
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                  <span style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--primary)' }}>
                    5 000 - 30 000
                  </span>
                  <span style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--primary)' }}>DH</span>
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>
                  Selon le volume d'archives à traiter
                </div>
              </div>
            </div>

            <div style={{
              background: 'var(--gray-50)',
              borderRadius: '1.5rem',
              padding: '3rem',
              position: 'relative'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1.5rem'
              }}>
                <div style={{
                  background: 'white',
                  padding: '1.5rem',
                  borderRadius: '1rem',
                  textAlign: 'center',
                  boxShadow: 'var(--shadow-md)'
                }}>
                  <Scan size={40} color="var(--primary)" style={{ marginBottom: '1rem' }} />
                  <div style={{ fontWeight: '600', color: 'var(--gray-900)' }}>Audit</div>
                </div>
                <div style={{
                  background: 'white',
                  padding: '1.5rem',
                  borderRadius: '1rem',
                  textAlign: 'center',
                  boxShadow: 'var(--shadow-md)'
                }}>
                  <FileText size={40} color="var(--primary)" style={{ marginBottom: '1rem' }} />
                  <div style={{ fontWeight: '600', color: 'var(--gray-900)' }}>Scan</div>
                </div>
                <div style={{
                  background: 'white',
                  padding: '1.5rem',
                  borderRadius: '1rem',
                  textAlign: 'center',
                  boxShadow: 'var(--shadow-md)'
                }}>
                  <Search size={40} color="var(--primary)" style={{ marginBottom: '1rem' }} />
                  <div style={{ fontWeight: '600', color: 'var(--gray-900)' }}>Indexation</div>
                </div>
                <div style={{
                  background: 'white',
                  padding: '1.5rem',
                  borderRadius: '1rem',
                  textAlign: 'center',
                  boxShadow: 'var(--shadow-md)'
                }}>
                  <Database size={40} color="var(--primary)" style={{ marginBottom: '1rem' }} />
                  <div style={{ fontWeight: '600', color: 'var(--gray-900)' }}>Organisation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Abonnement SaaS */}
      <section style={{ padding: '6rem 2rem', background: 'var(--gray-50)' }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '4rem',
            alignItems: 'center'
          }}>
            <div style={{
              background: 'var(--gradient-dark)',
              borderRadius: '1.5rem',
              padding: '3rem',
              color: 'white',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '200px',
                height: '200px',
                background: 'var(--primary)',
                borderRadius: '50%',
                opacity: '0.1'
              }}></div>
              
              <div style={{ position: 'relative', zIndex: 1 }}>
                <Cloud size={48} style={{ marginBottom: '1.5rem', color: 'var(--accent)' }} />
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>
                  Plateforme Archivist
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem' }}>
                  Accédez à tous vos documents depuis n'importe où, à tout moment.
                </p>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem'
                }}>
                  <div style={{
                    background: 'rgba(255,255,255,0.1)',
                    padding: '1rem',
                    borderRadius: '0.75rem',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: '700' }}>24/7</div>
                    <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)' }}>Disponibilité</div>
                  </div>
                  <div style={{
                    background: 'rgba(255,255,255,0.1)',
                    padding: '1rem',
                    borderRadius: '0.75rem',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: '700' }}>99.9%</div>
                    <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)' }}>Uptime</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="section-badge">
                <Clock size={16} />
                Étape 2
              </div>
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: '800',
                color: 'var(--gray-900)',
                marginBottom: '1rem'
              }}>
                Abonnement mensuel <span style={{ color: 'var(--primary)' }}>(SaaS)</span>
              </h2>
              <p style={{
                fontSize: '1.125rem',
                color: 'var(--gray-500)',
                marginBottom: '2rem',
                lineHeight: '1.7'
              }}>
                Une fois vos archives digitalisées, accédez-y facilement via notre 
                plateforme cloud sécurisée.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                {saasFeatures.map((feature, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <CheckCircle size={20} color="var(--success)" />
                    <span style={{ color: 'var(--gray-700)' }}>{feature}</span>
                  </div>
                ))}
              </div>

              <div style={{
                background: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)',
                padding: '1.5rem 2rem',
                borderRadius: '1rem',
                border: '1px solid #a7f3d0'
              }}>
                <div style={{ fontSize: '0.875rem', color: 'var(--gray-500)', marginBottom: '0.5rem' }}>
                  Abonnement mensuel
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                  <span style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--success)' }}>
                    300 - 1 000
                  </span>
                  <span style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--success)' }}>DH/mois</span>
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>
                  Selon le nombre d'utilisateurs et le stockage
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sécurité */}
      <section className="security-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge" style={{ background: 'rgba(255,255,255,0.1)', color: 'white' }}>
              <Shield size={16} />
              Sécurité & Confidentialité
            </div>
            <h2 className="section-title">
              Nos engagements sécurité
            </h2>
            <p className="section-subtitle">
              Nous traitons des documents sensibles et légaux. 
              Voici nos garanties pour protéger vos données.
            </p>
          </div>

          <div className="security-grid">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="security-card">
                <div className="security-icon">
                  <feature.icon size={28} />
                </div>
                <h3 className="security-title">{feature.title}</h3>
                <p className="security-text">{feature.text}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <div className="security-badge">
              <Shield size={20} />
              Vos données restent confidentielles et protégées
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
            Prêt à commencer ?
          </h2>
          <p style={{ 
            fontSize: '1.25rem', 
            color: 'rgba(255,255,255,0.9)',
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Contactez-nous pour un audit gratuit de vos archives 
            et un devis personnalisé.
          </p>
          <Link to="/contact" className="btn btn-lg" style={{
            background: 'white',
            color: 'var(--primary)',
            fontWeight: '700'
          }}>
            Demander un devis gratuit
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Solution
