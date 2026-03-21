import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
    return (
        <section className="container" id="contact" style={{ padding: 'clamp(5vh, 10vh, 15vh) 2.5vw clamp(5vh, 10vh, 10vh) 2.5vw' }}>
            <div className="dot-grid data-card" style={{
                padding: 'clamp(2rem, 5vw, 6rem)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '6vw',
                background: 'rgba(255, 85, 0, 0.02)',
                borderColor: 'rgba(255, 85, 0, 0.2)',
                maxWidth: '1300px',
                margin: '0 auto',
                borderRadius: '20px',
            }}>

                {/* Left Side: Messaging */}
                <div>
                    <span className="section-label">CONTACT ME</span>
                    <h2 style={{ fontSize: 'clamp(1.6rem, 5vw, 4rem)', fontWeight: 900, marginBottom: '2rem', letterSpacing: '-0.02em' }}>
                        READY TO <span style={{ color: 'var(--brand-orange)' }}>CONNECT?</span>
                    </h2>
                    <p style={{ fontSize: '1.2rem', opacity: 0.7, lineHeight: 1.6, maxWidth: '500px', marginBottom: '4rem' }}>
                        Open for collaborations in Software Development, Web Design, and Data Analysis. Let's build something great together.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                        <div className="interactive" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <div style={{ color: 'var(--brand-orange)' }}><Mail size={20} /></div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <span className="mono" style={{ fontSize: '9px', opacity: 0.4 }}>EMAIL</span>
                                <a href="mailto:gourharshita850@gmail.com" style={{ fontSize: '14px', color: 'var(--text-main)', textDecoration: 'none' }}>gourharshita850@gmail.com</a>
                            </div>
                        </div>
                        <div className="interactive" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <div style={{ color: 'var(--brand-orange)' }}><Linkedin size={20} /></div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <span className="mono" style={{ fontSize: '9px', opacity: 0.4 }}>LINKEDIN</span>
                                <a href="https://www.linkedin.com/in/harshitaagourr/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: 'var(--text-main)', textDecoration: 'none' }}>harshitaagourr</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Quick Action / Form Style */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    borderLeft: '1px solid rgba(238,237,228,0.05)',
                    paddingLeft: 'clamp(0px, 6vw, 6vw)'
                }} className="contact-form-side">
                    <div style={{ background: 'rgba(0,0,0,0.3)', padding: 'clamp(1.5rem, 4vw, 2rem)', border: '1px solid rgba(238,237,228,0.1)' }}>
                        <span className="mono" style={{ fontSize: '10px', opacity: 0.3, display: 'block', marginBottom: '2rem' }}>[ QUICK CONTACT ]</span>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ borderBottom: '1px solid rgba(238,237,228,0.1)', paddingBottom: '0.5rem' }}>
                                <span className="mono" style={{ fontSize: '9px', opacity: 0.5 }}>YOUR NAME</span>
                                <p className="mono" style={{ fontSize: '13px', margin: '5px 0' }}>// Say hello...</p>
                            </div>
                            <div style={{ borderBottom: '1px solid rgba(238,237,228,0.1)', paddingBottom: '0.5rem' }}>
                                <span className="mono" style={{ fontSize: '9px', opacity: 0.5 }}>MESSAGE</span>
                                <p className="mono" style={{ fontSize: '13px', margin: '5px 0' }}>// Tell me about your project...</p>
                            </div>
                        </div>

                        <button
                            className="interactive mono"
                            style={{
                                marginTop: '3rem',
                                width: '100%',
                                background: 'var(--brand-orange)',
                                border: 'none',
                                color: 'white',
                                padding: '1.2rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '12px',
                                fontSize: '12px',
                                fontWeight: 900,
                                cursor: 'pointer',
                                boxShadow: '0 0 20px var(--orange-glow)'
                            }}
                        >
                            SEND MESSAGE <Send size={16} />
                        </button>
                    </div>

                    <div style={{ marginTop: '2rem', display: 'flex', gap: '1.5rem', opacity: 0.4 }}>
                        <a href="https://github.com/happywithu21" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                            <Github size={18} className="interactive" />
                        </a>
                        <MessageSquare size={18} className="interactive" />
                    </div>
                </div>

            </div>
        </section>
    );
}
