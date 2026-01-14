import { useState } from 'react'
import { 
  Mail, Phone, MapPin, Send, CheckCircle, ArrowRight,
  Building2, User, MessageSquare, Clock
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    sector: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

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
            <MessageSquare size={16} />
            Contact
          </div>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '800',
            color: 'white',
            marginBottom: '1.5rem',
            lineHeight: '1.2'
          }}>
            Demandez votre<br />
            <span style={{ color: 'var(--accent)' }}>démo gratuite</span>
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: 'rgba(255,255,255,0.8)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Vous souhaitez organiser vos archives ? Contactez-nous pour 
            une démonstration personnalisée et sans engagement.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-container">
            <div className="contact-info">
              <h2>Parlons de votre projet</h2>
              <p>
                Notre équipe est à votre disposition pour répondre à toutes vos questions 
                et vous accompagner dans votre projet de digitalisation.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-item-icon">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>Email</div>
                    <div className="contact-item-text">contact@archivist.ma</div>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-item-icon">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>Téléphone</div>
                    <div className="contact-item-text">06 XX XX XX XX</div>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-item-icon">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>Localisation</div>
                    <div className="contact-item-text">Maroc 🇲🇦</div>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-item-icon">
                    <Clock size={24} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>Disponibilité</div>
                    <div className="contact-item-text">Lun - Ven, 9h - 18h</div>
                  </div>
                </div>
              </div>

              <div style={{
                marginTop: '2rem',
                padding: '1.5rem',
                background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
                borderRadius: '1rem',
                border: '1px solid #bfdbfe'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <CheckCircle size={20} color="var(--primary)" />
                  <span style={{ fontWeight: '600', color: 'var(--gray-900)' }}>Démo gratuite</span>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)', margin: 0 }}>
                  Nous vous proposons une démonstration complète et personnalisée 
                  de notre solution, sans aucun engagement.
                </p>
              </div>
            </div>

            <div className="contact-form-container">
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 2rem' }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem'
                  }}>
                    <CheckCircle size={40} color="var(--success)" />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--gray-900)', marginBottom: '0.75rem' }}>
                    Demande envoyée !
                  </h3>
                  <p style={{ color: 'var(--gray-500)', marginBottom: '2rem' }}>
                    Merci pour votre intérêt. Notre équipe vous contactera 
                    dans les plus brefs délais.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="btn btn-outline"
                  >
                    Envoyer une autre demande
                  </button>
                </div>
              ) : (
                <>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1.5rem', color: 'var(--gray-900)' }}>
                    Demander une démo
                  </h3>
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="name">
                          <User size={14} style={{ display: 'inline', marginRight: '0.5rem' }} />
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Votre nom"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="company">
                          <Building2 size={14} style={{ display: 'inline', marginRight: '0.5rem' }} />
                          Entreprise *
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Nom de l'entreprise"
                          required
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="email">
                          <Mail size={14} style={{ display: 'inline', marginRight: '0.5rem' }} />
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="votre@email.com"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone">
                          <Phone size={14} style={{ display: 'inline', marginRight: '0.5rem' }} />
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="06 XX XX XX XX"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="sector">Secteur d'activité</label>
                      <select
                        id="sector"
                        name="sector"
                        value={formData.sector}
                        onChange={handleChange}
                      >
                        <option value="">Sélectionnez votre secteur</option>
                        <option value="avocat">Cabinet d'avocats</option>
                        <option value="comptable">Cabinet comptable</option>
                        <option value="entreprise">Entreprise</option>
                        <option value="administration">Service administratif</option>
                        <option value="station">Station-service</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">
                        <MessageSquare size={14} style={{ display: 'inline', marginRight: '0.5rem' }} />
                        Votre message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Décrivez brièvement votre besoin (volume d'archives, type de documents, etc.)"
                        rows={4}
                      />
                    </div>

                    <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                      <Send size={20} />
                      Envoyer ma demande
                    </button>

                    <p style={{ fontSize: '0.75rem', color: 'var(--gray-500)', textAlign: 'center', marginTop: '1rem' }}>
                      En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section style={{ padding: '5rem 2rem', background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Questions fréquentes</h2>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(2, 1fr)', 
            gap: '1.5rem',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            {[
              { q: 'Combien de temps dure la mise en place ?', a: 'Selon le volume, entre 1 et 4 semaines pour la digitalisation complète.' },
              { q: 'Mes documents sont-ils en sécurité ?', a: 'Oui, nous utilisons un chiffrement AES-256 et signons un NDA.' },
              { q: 'Puis-je essayer avant de m\'engager ?', a: 'Oui, nous proposons une démo gratuite et personnalisée.' },
              { q: 'Où sont hébergées mes données ?', a: 'En priorité sur des serveurs au Maroc, avec backup sécurisé.' }
            ].map((faq, index) => (
              <div key={index} style={{
                background: 'white',
                padding: '1.5rem',
                borderRadius: '1rem',
                border: '1px solid var(--gray-200)'
              }}>
                <h4 style={{ fontWeight: '600', color: 'var(--gray-900)', marginBottom: '0.5rem' }}>
                  {faq.q}
                </h4>
                <p style={{ fontSize: '0.9375rem', color: 'var(--gray-500)', margin: 0 }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Contact
