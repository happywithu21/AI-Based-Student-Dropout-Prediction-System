import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import harshitaPhoto from '../assets/harshita_photo.png';

export default function Hero() {
    const containerRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!containerRef.current) return;
            const { left, top, width, height } = containerRef.current.getBoundingClientRect();
            const x = (e.clientX - left) / width;
            const y = (e.clientY - top) / height;
            setMousePos({ x, y });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section
            ref={containerRef}
            className="dot-grid"
            style={{
                height: 'calc(100vh - 90px)',
                padding: '3vh 4vw',
                display: 'flex',
                alignItems: 'stretch',
                boxSizing: 'border-box',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* ── The One Big Card ── */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                className="data-card glow-hero"
                style={{
                    flex: 1,
                    borderRadius: '20px',
                    padding: 'clamp(1.2rem, 2.5vw, 2.5rem)',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gridTemplateRows: '1fr 140px',
                    gap: '1rem 3rem',
                    position: 'relative',
                    overflow: 'hidden',
                    '--glow-primary': 'var(--brand-orange)',
                }}
            >
                {/* Floating Particles */}
                <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }}>
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{ y: [0, -50, 0], opacity: [0.05, 0.3, 0.05] }}
                            transition={{ duration: 4 + i * 0.6, repeat: Infinity, delay: i * 0.5 }}
                            style={{
                                position: 'absolute',
                                width: '2px', height: '2px',
                                borderRadius: '50%',
                                background: i % 2 === 0 ? 'var(--brand-orange)' : '#00f2ff',
                                left: `${12 * i + 5}%`,
                                top: `${8 * i + 10}%`
                            }}
                        />
                    ))}
                </div>

                {/* ── TOP-LEFT: Introduction ── */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    style={{ position: 'relative', zIndex: 2 }}
                >
                    <span className="section-label">INTRODUCTION</span>
                    <h1 style={{ marginTop: '0.6rem', marginBottom: '1rem', fontSize: 'clamp(2rem, 4vw, 4rem)' }}>
                        HARSHITA<br />
                        <span style={{ color: 'var(--brand-orange)' }}>GOUR.</span>
                    </h1>
                    <p style={{ fontSize: '1rem', lineHeight: 1.8, maxWidth: '420px', opacity: 0.75 }}>
                        Data Science student &amp; Full Stack Developer at LPU, passionate about building intelligent data solutions and solving complex engineering problems.
                    </p>

                    <div style={{ marginTop: '2.5rem', display: 'flex', gap: '2.5rem', flexWrap: 'wrap' }}>
                        <div>
                            <span className="mono" style={{ fontSize: '10px', opacity: 0.4, display: 'block', marginBottom: '0.4rem' }}>LOCATION</span>
                            <span className="mono" style={{ fontSize: '12px' }}>PUNJAB, INDIA</span>
                        </div>
                        <div>
                            <span className="mono" style={{ fontSize: '10px', opacity: 0.4, display: 'block', marginBottom: '0.4rem' }}>FOCUS</span>
                            <span className="mono" style={{ fontSize: '12px' }}>DATA SCIENCE &amp; ML</span>
                        </div>
                    </div>
                </motion.div>

                {/* ── TOP-RIGHT: Technical Overview ── */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    style={{ position: 'relative', zIndex: 2 }}
                >
                    <span className="section-label">TECHNICAL OVERVIEW</span>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '0.8rem' }}>
                        {[
                            { label: 'STATUS', value: 'OPEN FOR WORK', color: '#00ff00' },
                            { label: 'STACK', value: 'PYTHON / SQL / REACT', color: 'var(--text-main)' },
                            { label: 'DOMAIN', value: 'DATA SCIENCE', color: 'var(--brand-orange)' },
                            { label: 'AVAILABILITY', value: 'REMOTE / HYBRID', color: 'var(--text-main)' }
                        ].map((item, i) => (
                            <div key={i} style={{
                                display: 'flex', justifyContent: 'space-between',
                                borderBottom: '1px solid rgba(238,237,228,0.08)',
                                paddingBottom: '0.7rem', gap: '1rem'
                            }}>
                                <span className="mono" style={{ fontSize: '11px', opacity: 0.5 }}>{item.label}</span>
                                <span className="mono" style={{ fontSize: '11px', color: item.color, textAlign: 'right' }}>{item.value}</span>
                            </div>
                        ))}
                    </div>

                    {/* Neural Log */}
                    <div style={{ marginTop: '1rem', padding: '0.8rem', background: 'rgba(0,0,0,0.5)', borderRadius: '10px', border: '1px solid rgba(255,85,0,0.2)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
                            <span className="mono" style={{ fontSize: '9px', opacity: 0.4 }}>NEURAL_ENGINE_ACTIVE</span>
                            <div style={{ display: 'flex', gap: '4px' }}>
                                <div className="pulse" style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#00ff00' }} />
                                <div className="pulse" style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#ff5500', animationDelay: '0.2s' }} />
                                <div className="pulse" style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#00f2ff', animationDelay: '0.4s' }} />
                            </div>
                        </div>
                        <div className="mono" style={{ fontSize: '10px', height: '45px', overflow: 'hidden', opacity: 0.6 }}>
                            <motion.div
                                animate={{ y: [-180, 0] }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}
                            >
                                {[
                                    '> VECTORIZING_USER_INPUT',
                                    '> CROSS_VALIDATION_ACTIVE',
                                    '> REINFORCEMENT_LEARNING_RUNNING',
                                    '> MODEL_RECALL: 0.982',
                                    '> SCRAPING_REAL_TIME_TRENDS',
                                    '> OPTIMIZING_GRADIENT_DESCENT',
                                    '> NEURAL_WEIGHTS_INITIALIZED'
                                ].map((log, i) => (
                                    <span key={i} style={{ color: i % 3 === 0 ? 'var(--brand-orange)' : i % 3 === 1 ? '#00f2ff' : 'var(--text-main)' }}>{log}</span>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </motion.div>


                {/* ── Photo: absolutely anchored to card bottom ── */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.8 }}
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: '33%',
                        transform: 'translateX(-50%)',
                        width: '230px',
                        height: '68%',
                        zIndex: 3,
                        overflow: 'hidden',
                        maskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)',
                        filter: 'drop-shadow(0 -8px 24px rgba(255,85,0,0.25)) drop-shadow(0 4px 16px rgba(0,0,0,0.5))',
                    }}
                >
                    <img
                        src={harshitaPhoto}
                        alt="Harshita Gour"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'top center',
                            display: 'block',
                            mixBlendMode: 'multiply',
                            filter: 'contrast(1.05) brightness(1.02)',
                        }}
                    />
                </motion.div>


            </motion.div>

            {/* Reactive Glow Follower */}
            <div style={{
                position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
                background: `radial-gradient(700px circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(255, 85, 0, 0.04), transparent 70%)`
            }} />
        </section>
    );
}
