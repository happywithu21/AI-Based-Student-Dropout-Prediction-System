import { useEffect, useState, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import { motion } from 'framer-motion';
import Loader from './components/Loader';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, duration: 1.2, smoothWheel: true });
    lenisRef.current = lenis;
    const raf = (time) => { lenis.raf(time); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);

    // Section Tracking Logic
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // Trigger when section is in the middle of screen
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = ['about', 'skills', 'certificates', 'projects', 'contact'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      lenis.destroy();
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false); // Close mobile menu if open
    const targetElement = document.getElementById(targetId);
    if (targetElement && lenisRef.current) {
      lenisRef.current.scrollTo(targetElement, {
        offset: -90, // Match header height
        duration: 2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) // Custom smooth easing
      });
    }
  };

  const navItems = [
    { id: 'about', label: 'ABOUT' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'certificates', label: 'CERTIFICATES' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'contact', label: 'CONTACT' },
  ];

  return (
    <>
      <div className="grain-overlay" />
      <Loader onComplete={() => setLoading(false)} />

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'center' }}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div style={{
        opacity: loading ? 0 : 1,
        transition: 'opacity 1.5s cubic-bezier(0.16, 1, 0.3, 1)',
        background: 'var(--bg-color)',
        minHeight: '100vh',
        position: 'relative'
      }}>

        {/* Professional Floating Navigation */}
        <header className="header-nav">
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <div className="animated-name" style={{ fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              HARSHITA GOUR
            </div>
          </div>

          <nav style={{ display: 'flex', gap: '8px' }} className="desktop-only">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`nav-link interactive ${activeSection === item.id ? 'active' : ''}`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="nav-pill"
                    className="nav-active-pill"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30
                    }}
                  />
                )}
              </a>
            ))}
          </nav>

          <button 
            className={`menu-toggle mobile-only ${isMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span></span>
          </button>
        </header>

        <main style={{ paddingTop: '90px', paddingBottom: '10vh' }}>
          <div id="about"><Hero /></div>
          <AboutSection />

          <div style={{ height: '10vh', minHeight: '100px' }} />
          <div id="skills"><Skills /></div>

          <div style={{ height: '10vh', minHeight: '100px' }} />
          <div id="certificates"><Certificates /></div>

          <div style={{ height: '10vh', minHeight: '100px' }} />
          <div id="projects"><Projects /></div>

          <div style={{ height: '5vh', minHeight: '50px' }} />
          <div id="contact"><Contact /></div>
        </main>

        <footer style={{ padding: '8vw 6vw', borderTop: '1px solid rgba(238,237,228,0.05)', background: 'rgba(0,0,0,0.2)' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '4rem'
          }}>
            <div>
              <span className="section-label">GET IN TOUCH</span>
              <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '400px' }}>
                Open for collaborations in Predictive Modeling and Data Engineering.
              </p>
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                <a href="mailto:gourharshita850@gmail.com" className="nav-link interactive" style={{ opacity: 1, color: 'var(--brand-orange)' }}>EMAIL_INQUIRY</a>
                <a href="https://www.linkedin.com/in/harshitaagourr/" target="_blank" rel="noopener noreferrer" className="nav-link interactive">LINKEDIN_SYS</a>
              </div>
            </div>

            <div>
              <span className="section-label">CURRENT STATUS</span>
              <div className="mono" style={{ fontSize: '11px', opacity: 0.4, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <span>[ST] SERVER: ONLINE</span>
                <span>[ST] FOCUS: OPEN FOR WORK</span>
                <span>[ST] UPDATED: MARCH 2025</span>
                <span>[ST] HEALTH: EXCELLENT</span>
              </div>
            </div>

            <div className="desktop-only" style={{ textAlign: 'right' }}>
              <span className="section-label">IDENTITY</span>
              <div style={{ fontSize: '3rem', fontWeight: 900, opacity: 0.05, letterSpacing: '-0.05em' }}>
                HARSHITA
              </div>
              <div className="mono" style={{ fontSize: '10px', opacity: 0.3 }}>© 2026_ALL_RIGHTS_RESERVED</div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
