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
                minHeight: 'calc(100vh - 90px)',
                height: 'auto',
                padding: '3vh 4vw',
                display: 'flex',
                alignItems: 'center',
                boxSizing: 'border-box',
                position: 'relative',
                overflow: 'visible' // Ensure nested elements (HUD) aren't clipped
            }}
        >
            {/* ── The One Big Card ── */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                className="data-card glow-hero hero-card-grid"
                style={{
                    flex: 1,
                    borderRadius: '20px',
                    padding: 'clamp(1.5rem, 5vw, 3.5rem)',
                    position: 'relative',
                    overflow: 'visible', // HUD pop-outs need this
                    minHeight: '80vh',
                    background: 'rgba(10, 10, 10, 0.7)',
                    alignContent: 'center'
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

                {/* Right: Visuals & Technical Metadata Panel */}
                <div className="hero-right-col">
                    
                    {/* Profile Image Highlight: Next-Gen Pop-out Glass HUD */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        style={{ position: 'relative', marginTop: '1rem', display: 'flex', justifyContent: 'center', perspective: '1000px', width: '100%', maxWidth: '420px', margin: '0 auto' }}
                    >
                        
                        {/* The Glassmorphism Pedestal Card with Continuous Hover */}
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                left: '0',
                                right: '0',
                                height: '65%', 
                                borderRadius: '24px',
                                background: 'linear-gradient(135deg, rgba(20,20,20,0.6) 0%, rgba(10,10,10,0.9) 100%)',
                                border: '1px solid rgba(255, 85, 0, 0.3)',
                                borderTopColor: 'rgba(255, 85, 0, 0.8)',
                                backdropFilter: 'blur(16px)',
                                WebkitBackdropFilter: 'blur(16px)',
                                boxShadow: '0 30px 50px rgba(0,0,0,0.8), inset 0 2px 20px rgba(255,85,0,0.1)',
                                zIndex: 1,
                                overflow: 'hidden'
                            }}
                        >
                            {/* Scanning beam effect inside pedestal */}
                            <motion.div
                                animate={{ top: ['-50%', '150%'] }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                                style={{
                                    position: 'absolute',
                                    left: 0, right: 0,
                                    height: '2px',
                                    background: 'linear-gradient(90deg, transparent, rgba(255,85,0,0.8), transparent)',
                                    boxShadow: '0 0 10px rgba(255,85,0,0.5)'
                                }}
                            />
                        </motion.div>

                        {/* Spinning Tech Halo rings behind the person */}
                        <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                            style={{
                                position: 'absolute',
                                top: '15%',
                                width: '180px',
                                height: '180px',
                                borderRadius: '50%',
                                border: '1px dashed rgba(255,85,0,0.4)',
                                borderLeft: '2px solid rgba(0,242,255,0.6)',
                                borderRight: '2px solid rgba(255,85,0,0.6)',
                                boxSizing: 'border-box',
                                zIndex: 1
                            }}
                        />
                        <motion.div 
                            animate={{ rotate: -360 }}
                            transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
                            style={{
                                position: 'absolute',
                                top: '10%',
                                width: '220px',
                                height: '220px',
                                borderRadius: '50%',
                                border: '1px dotted rgba(0,242,255,0.3)',
                                zIndex: 1
                            }}
                        />
                        
                        {/* The Cutout Image (Foreground Pop-out with hover sync) */}
                        <motion.div
                            animate={{ y: [0, -12, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
                            style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'center', width: '100%' }}
                        >
                            <img 
                                src="/profile3.png" 
                                alt="Harshita Gour" 
                                style={{
                                    width: '80%',
                                    maxWidth: '300px',
                                    height: 'auto',
                                    objectFit: 'contain',
                                    objectPosition: 'center top',
                                    filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.8)) drop-shadow(0 0 10px rgba(255,85,0,0.2)) contrast(1.1)',
                                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)',
                                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)'
                                }}
                            />
                        </motion.div>

                        {/* Foreground glowing floating HUD badges */}
                        <motion.div
                            animate={{ y: [0, -10, 0], opacity: [0.6, 1, 0.6] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            className="mono"
                            style={{
                                position: 'absolute',
                                bottom: '10%',
                                right: '-10%',
                                background: 'rgba(0,0,0,0.8)',
                                border: '1px solid var(--brand-orange)',
                                padding: '4px 8px',
                                borderRadius: '4px',
                                fontSize: '10px',
                                color: 'var(--brand-orange)',
                                zIndex: 3,
                                backdropFilter: 'blur(4px)',
                                boxShadow: '0 0 10px rgba(255,85,0,0.2)'
                            }}
                        >
                            SYS_READY
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 10, 0], opacity: [0.6, 1, 0.6] }}
                            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                            className="mono"
                            style={{
                                position: 'absolute',
                                top: '25%',
                                left: '-10%',
                                background: 'rgba(0,0,0,0.8)',
                                border: '1px solid #00f2ff',
                                padding: '4px 8px',
                                borderRadius: '4px',
                                fontSize: '10px',
                                color: '#00f2ff',
                                zIndex: 3,
                                backdropFilter: 'blur(4px)',
                                boxShadow: '0 0 10px rgba(0,242,255,0.2)'
                            }}
                        >
                            DATA_SYNC
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ 
                            rotateY: 5, 
                            rotateX: -5,
                            transition: { duration: 0.3 }
                        }}
                        transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="data-card glow-hero"
                        style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
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
                </div>



            </motion.div>

            {/* Reactive Glow Follower */}
            <div style={{
                position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
                background: `radial-gradient(700px circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(255, 85, 0, 0.04), transparent 70%)`
            }} />
        </section>
    );
}
