import { motion, AnimatePresence } from 'framer-motion';
import { Database, Cpu, Layers } from 'lucide-react';
import { useState } from 'react';

// Minimal Cyber HUD Elements
const CyberHUD = ({ color }) => (
    <>
        {/* Corner Brackets */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="card-hud" 
            style={{ position: 'absolute', inset: '10px', pointerEvents: 'none' }}
        >
            <div style={{ position: 'absolute', top: 0, left: 0, width: '10px', height: '10px', borderLeft: `1px solid ${color}`, borderTop: `1px solid ${color}` }} />
            <div style={{ position: 'absolute', top: 0, right: 0, width: '10px', height: '10px', borderRight: `1px solid ${color}`, borderTop: `1px solid ${color}` }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '10px', height: '10px', borderLeft: `1px solid ${color}`, borderBottom: `1px solid ${color}` }} />
            <div style={{ position: 'absolute', bottom: 0, right: 0, width: '10px', height: '10px', borderRight: `1px solid ${color}`, borderBottom: `1px solid ${color}` }} />
        </motion.div>

        {/* Minimal Scan Line */}
        <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '200%' }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                width: '1px',
                background: `linear-gradient(to bottom, transparent, ${color}, transparent)`,
                opacity: 0.2,
                pointerEvents: 'none',
                zIndex: 1
            }}
        />
    </>
);

export default function AboutSection() {
    const [hoveredIdx, setHoveredIdx] = useState(null);

    const coreValues = [
        { 
            icon: <Database size={18} />, 
            title: "Data Intelligence", 
            desc: "Extracting signal from noise to drive intelligent decisions.",
            status: "ANALYSING_DATA...",
            color: 'var(--brand-orange)',
            glowClass: 'glow-orange'
        },
        { 
            icon: <Cpu size={18} />, 
            title: "Model Engineering", 
            desc: "Architecting predictive systems that learn and adapt.",
            status: "NEURAL_NET_READY",
            color: '#c084fc',
            glowClass: 'glow-purple'
        },
        { 
            icon: <Layers size={18} />, 
            title: "Full Stack Mastery", 
            desc: "Bridging complex backends with seamless human interfaces.",
            status: "STACK_VERIFIED",
            color: '#3b82f6',
            glowClass: 'glow-blue'
        }
    ];

    return (
        <section className="container" id="about" style={{ padding: '8vh 0' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <span className="section-label">IDENTIFIER</span>
                <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 900, textTransform: 'uppercase' }}>
                    ABOUT <span style={{ color: 'var(--brand-orange)' }}>ME</span>
                </h2>
                <div style={{ height: '1px', width: '60px', background: 'var(--brand-orange)', margin: '1rem auto', opacity: 0.5 }} />
            </div>

            <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '8vh', alignItems: 'center' }}>
                
                {/* Left: Phrasing & Narrative */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="section-label">MISSION_STATEMENT</span>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '2rem', lineHeight: 1.1 }}>
                        Combining <span style={{ color: 'var(--brand-orange)' }}>Innovation</span> with <br/>
                        <span style={{ color: '#c084fc' }}>Practical Impact.</span>
                    </h2>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <p className="mono" style={{ fontSize: '13px', lineHeight: 1.8, opacity: 0.7, borderLeft: '2px solid var(--brand-orange)', paddingLeft: '1.5rem' }}>
                            I believe technology is most powerful when it solves real problems. As a Computer Science student, I’m passionate about exploring AI, data science, cloud computing, and modern web technologies to build intelligent and useful applications.
                        </p>
                        <p className="mono" style={{ fontSize: '13px', lineHeight: 1.8, opacity: 0.7, borderLeft: '2px solid #c084fc', paddingLeft: '1.5rem' }}>
                            I enjoy experimenting with ideas, analyzing data, and creating systems that make information more accessible and decisions smarter.
                        </p>
                        <p className="mono" style={{ fontSize: '13px', lineHeight: 1.8, opacity: 0.7, borderLeft: '2px solid #3b82f6', paddingLeft: '1.5rem' }}>
                            When I'm not coding, I'm usually learning new technologies, improving my problem-solving skills, or working on projects that combine innovation with practical impact.
                        </p>
                    </div>
                </motion.div>

                {/* Right: Technical Summary Cards */}
                <div style={{ display: 'grid', gap: '1.5rem' }}>
                    {coreValues.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            onMouseEnter={() => setHoveredIdx(idx)}
                            onMouseLeave={() => setHoveredIdx(null)}
                            className={`data-card ${item.glowClass}`}
                            style={{ 
                                padding: '1.8rem', 
                                background: 'rgba(255,255,255,0.02)',
                                display: 'flex',
                                gap: '1.2rem',
                                alignItems: 'center',
                                position: 'relative',
                                cursor: 'default',
                                '--glow-primary': item.color
                            }}
                        >
                            {/* HUD Effects (Now Permanent) */}
                            <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
                                <CyberHUD color={item.color} />
                                
                                {/* Status Label */}
                                <div
                                    className="mono"
                                    style={{ 
                                        position: 'absolute', 
                                        bottom: '10px', 
                                        right: '15px', 
                                        fontSize: '8px', 
                                        letterSpacing: '0.1em',
                                        color: item.color,
                                        fontWeight: 700,
                                        opacity: 0.4
                                    }}
                                >
                                    {item.status}
                                </div>
                            </div>

                            <div style={{ 
                                width: '45px', 
                                height: '45px', 
                                borderRadius: '8px', 
                                background: 'rgba(255,255,255,0.03)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: `1px solid ${item.color}33`,
                                color: item.color,
                                position: 'relative',
                                zIndex: 2,
                                transition: 'all 0.3s ease'
                            }}>
                                {item.icon}
                            </div>
                            <div style={{ position: 'relative', zIndex: 2 }}>
                                <h4 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '4px', color: hoveredIdx === idx ? item.color : 'inherit', transition: 'color 0.3s' }}>{item.title}</h4>
                                <p className="mono" style={{ fontSize: '11px', opacity: 0.5, maxWidth: '240px' }}>{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

