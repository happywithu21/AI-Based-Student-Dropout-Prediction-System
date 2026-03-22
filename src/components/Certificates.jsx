import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, FileText, CheckCircle, Plus } from 'lucide-react';
import CertificateModal from './CertificateModal';

const certs = [
    {
        id: 'CR-001',
        title: 'PYTHON PROGRAMMING',
        issuer: 'PROFESSIONAL CERTIFICATION',
        file: '/certs/cert_python.pdf',
        preview: '/certs/cert_python.pdf',
        status: 'VERIFIED_RECORD'
    },
    {
        id: 'CR-002',
        title: 'FROM DATA TO INSIGHTS',
        issuer: 'ANALYTICS SPECIALIZATION',
        file: '/certs/cert_insights.pdf',
        preview: '/certs/cert_insights.pdf',
        status: 'SYSTEM_VALIDATED'
    },
    {
        id: 'CR-006',
        title: 'PRIVACY & SECURITY',
        issuer: 'CYBER SECURITY SPECIALIZATION',
        file: '/certs/Privacy and Security in Online Social Media.pdf',
        preview: '/certs/Privacy and Security in Online Social Media.pdf',
        status: 'SYSTEM_VALIDATED'
    }
];


export default function Certificates() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="container" id="certificates" style={{ padding: 'clamp(5vh, 10vh, 15vh) 0' }}>
            <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 6vw, 6rem)' }}>
                <span className="section-label" style={{ marginBottom: '1rem' }}>MY CERTIFICATES</span>
                <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.8rem)', margin: '0 auto', maxWidth: '900px', lineHeight: 1.2 }}>
                    Verified <span style={{ color: 'var(--brand-orange)' }}>Academic & Technical</span> Credentials.
                </h2>
            </div>

            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                gap: '1.5vw', 
                marginBottom: '4rem',
                maxWidth: '1200px',
                margin: '0 auto 4rem auto',
                justifyContent: 'center'
            }}>
                {certs.map((cert) => (
                    <motion.div
                        key={cert.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="data-card glow-purple"
                        style={{ 
                            padding: 0, 
                            overflow: 'hidden', 
                            borderRadius: '24px',
                            background: 'rgba(15, 15, 15, 0.4)',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%'
                        }}
                    >
                        {/* Certificate Preview Image */}
                        <div style={{ 
                            width: '100%', 
                            height: '240px', 
                            overflow: 'hidden',
                            position: 'relative',
                            background: '#151515',
                            borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
                        }}>
                             <iframe
                                src={`${cert.preview}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                                title={cert.title}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    border: 'none',
                                    pointerEvents: 'none',
                                    transform: 'scale(1)',
                                    transformOrigin: 'top left',
                                }}
                            />
                            
                            <div style={{ position: 'absolute', top: '15px', left: '15px', zIndex: 2 }}>
                                <span className="mono" style={{ 
                                    fontSize: '9px', 
                                    padding: '4px 8px', 
                                    background: 'rgba(0,0,0,0.7)', 
                                    borderRadius: '4px',
                                    color: 'var(--brand-orange)',
                                    border: '1px solid rgba(255,85,0,0.3)'
                                }}>
                                    {cert.id}
                                </span>
                            </div>
                        </div>

                        {/* Certificate Info Body */}
                        <div style={{ padding: '1.8rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <h3 style={{ fontSize: '1.4rem', fontWeight: 900, marginBottom: '0.6rem', color: '#fff', textTransform: 'uppercase' }}>
                                {cert.title}
                            </h3>
                            <p className="mono" style={{ fontSize: '11px', opacity: 0.4, marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
                                {cert.issuer}
                            </p>

                            <div style={{ marginTop: 'auto' }}>
                                <a
                                    href={cert.file}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="interactive mono"
                                    style={{
                                        fontSize: '11px',
                                        color: '#c084fc', // Purple color matching the goal
                                        textDecoration: 'none',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        fontWeight: 900,
                                        width: 'fit-content'
                                    }}
                                >
                                    VIEW CERTIFICATE 
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M7 17l9.2-9.2M17 17V7H7" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Button moved UNDER the certificates */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="interactive mono"
                    style={{
                        background: 'transparent',
                        border: '1px solid var(--brand-orange)',
                        color: 'var(--brand-orange)',
                        padding: '1rem 3rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        fontSize: '13px',
                        cursor: 'pointer',
                        transition: 'all 0.4s ease',
                        textTransform: 'uppercase',
                        fontWeight: 900
                    }}
                >
                    VIEW ALL CREDENTIALS <Plus size={18} />
                </button>
            </div>

            <CertificateModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
}
