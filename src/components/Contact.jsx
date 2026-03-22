import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MessageSquare, Send, CheckCircle, Loader2 } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
    const [status, setStatus] = useState('idle'); // idle, sending, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        try {
            const response = await fetch("https://formspree.io/f/maqpgeba", { 
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('success');
                form.reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section className="container" id="contact" style={{ padding: 'clamp(5vh, 10vh, 15vh) 2.5vw clamp(5vh, 10vh, 10vh) 2.5vw' }}>
            <div className="dot-grid data-card" style={{
                padding: 'clamp(2rem, 5vw, 6rem)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
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
                    <p style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.2rem)', opacity: 0.7, lineHeight: 1.6, maxWidth: '500px', marginBottom: 'clamp(2rem, 5vw, 4rem)' }}>
                        Open for collaborations in Software Development, Web Design, and Data Analysis. Let's build something great together.
                    </p>

                    <div className="contact-links" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div className="interactive" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <div style={{ color: 'var(--brand-orange)' }}><Mail size={20} /></div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <span className="mono" style={{ fontSize: '9px', opacity: 0.4 }}>EMAIL</span>
                                <a href="mailto:gourharshita850@gmail.com" style={{ fontSize: '14px', color: 'var(--text-main)', textDecoration: 'none' }}>gourharshita850@gmail.com</a>
                            </div>
                        </div>
                        <div className="interactive" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <div style={{ color: 'var(--brand-orange)' }}><Github size={20} /></div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <span className="mono" style={{ fontSize: '9px', opacity: 0.4 }}>GITHUB</span>
                                <a href="https://github.com/happywithu21" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: 'var(--text-main)', textDecoration: 'none' }}>happywithu21</a>
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

                {/* Right Side: Contact Form */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    borderLeft: '1px solid rgba(238,237,228,0.05)',
                    paddingLeft: 'clamp(0px, 6vw, 6vw)'
                }} className="contact-form-side">
                    <form 
                        onSubmit={handleSubmit}
                        style={{ background: 'rgba(0,0,0,0.3)', padding: 'clamp(1.5rem, 4vw, 2.5rem)', border: '1px solid rgba(238,237,228,0.1)' }}
                    >
                        <span className="mono" style={{ fontSize: '10px', opacity: 0.3, display: 'block', marginBottom: '2rem' }}>[ CONTACT_SECURE_CHANNEL ]</span>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div style={{ borderBottom: '1px solid rgba(238,237,228,0.1)', paddingBottom: '0.5rem' }}>
                                <label className="mono" style={{ fontSize: '9px', opacity: 0.5, display: 'block' }}>YOUR NAME</label>
                                <input 
                                    name="name"
                                    type="text" 
                                    placeholder="// Identify yourself" 
                                    required
                                    className="mono contact-input"
                                />
                            </div>
                            <div style={{ borderBottom: '1px solid rgba(238,237,228,0.1)', paddingBottom: '0.5rem' }}>
                                <label className="mono" style={{ fontSize: '9px', opacity: 0.5, display: 'block' }}>YOUR EMAIL</label>
                                <input 
                                    name="email"
                                    type="email" 
                                    placeholder="// return@address.com" 
                                    required
                                    className="mono contact-input"
                                />
                            </div>
                            <div style={{ borderBottom: '1px solid rgba(238,237,228,0.1)', paddingBottom: '0.5rem' }}>
                                <label className="mono" style={{ fontSize: '9px', opacity: 0.5, display: 'block' }}>MESSAGE</label>
                                <textarea 
                                    name="message"
                                    placeholder="// Transmission data..." 
                                    required
                                    rows="1"
                                    className="mono contact-input"
                                    style={{ resize: 'none' }}
                                    onInput={(e) => {
                                        e.target.style.height = 'auto';
                                        e.target.style.height = e.target.scrollHeight + 'px';
                                    }}
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'sending' || status === 'success'}
                            className="interactive mono"
                            style={{
                                marginTop: '3rem',
                                width: '100%',
                                background: status === 'success' ? '#00ff00' : 'var(--brand-orange)',
                                border: 'none',
                                color: status === 'success' ? '#000' : 'white',
                                padding: '1.2rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '12px',
                                fontSize: '12px',
                                fontWeight: 900,
                                cursor: (status === 'sending' || status === 'success') ? 'default' : 'pointer',
                                boxShadow: status === 'success' ? '0 0 20px rgba(0,255,0,0.3)' : '0 0 20px var(--orange-glow)',
                                transition: 'all 0.4s ease',
                                opacity: status === 'sending' ? 0.7 : 1
                            }}
                        >
                            {status === 'idle' && <><span style={{ letterSpacing: '0.1em' }}>SEND TRANSMISSION</span> <Send size={16} /></>}
                            {status === 'sending' && <><span style={{ letterSpacing: '0.1em' }}>SENDING...</span> <Loader2 size={16} className="animate-spin" /></>}
                            {status === 'success' && <><span style={{ letterSpacing: '0.1em' }}>SENT SUCCESSFULLY</span> <CheckCircle size={16} /></>}
                            {status === 'error' && <><span style={{ letterSpacing: '0.1em' }}>RETRY SEND</span> <Send size={16} /></>}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

