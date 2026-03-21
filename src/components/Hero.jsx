import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

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
        <section ref={containerRef} className="dot-grid" style={{ minHeight: '85vh', display: 'flex', alignItems: 'flex-start', padding: '0 0 5vh 0' }}>

            <div className="container" style={{
                zIndex: 10,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '8vh',
                alignItems: 'center',
                paddingTop: 'clamp(2rem, 10vh, 12vh)', 
                paddingBottom: '2vh'
            }}>

                {/* Left: Professional Bio & Identity */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="section-label">INTRODUCTION</span>
                    <h1 style={{ marginBottom: '2rem' }}>
                        HARSHITA<br />
                        <span style={{ color: 'var(--brand-orange)' }}>GOUR.</span>
                    </h1>
                    <p style={{ fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '500px', opacity: 0.8 }}>
                        Data Science student & Full Stack Developer at LPU, passionate about building intelligent data solutions and solving complex engineering problems.
                    </p>

                    <div style={{ marginTop: '3rem', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                        <div>
                            <span className="mono" style={{ fontSize: '10px', opacity: 0.4, display: 'block', marginBottom: '0.5rem' }}>LOCATION</span>
                            <span className="mono" style={{ fontSize: '12px' }}>PUNJAB, INDIA</span>
                        </div>
                        <div>
                            <span className="mono" style={{ fontSize: '10px', opacity: 0.4, display: 'block', marginBottom: '0.5rem' }}>FOCUS</span>
                            <span className="mono" style={{ fontSize: '12px' }}>DATA SCIENCE & ML</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right: Visuals & Technical Metadata Panel */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    
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

                    {/* Interactive Background Particles */}
                    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }}>
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                animate={{ 
                                    y: [0, -40, 0],
                                    x: [0, Math.random() * 20 - 10, 0],
                                    opacity: [0.1, 0.4, 0.1] 
                                }}
                                transition={{ 
                                    duration: 3 + Math.random() * 2, 
                                    repeat: Infinity,
                                    delay: Math.random() * 2
                                }}
                                style={{ 
                                    position: 'absolute',
                                    width: '2px', height: '2px',
                                    borderRadius: '50%',
                                    background: i % 2 === 0 ? 'var(--brand-orange)' : '#00f2ff',
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`
                                }}
                            />
                        ))}
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', position: 'relative', zIndex: 2 }}>
                        {[
                            { label: 'STATUS', value: 'OPEN FOR WORK', color: '#00ff00' },
                            { label: 'STACK', value: 'PYTHON / SQL / REACT', color: 'var(--text-main)' },
                            { label: 'DOMAIN', value: 'DATA SCIENCE', color: 'var(--brand-orange)' },
                            { label: 'AVAILABILITY', value: 'REMOTE / HYBRID', color: 'var(--text-main)' }
                        ].map((item, i) => (
                            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(238,237,228,0.1)', paddingBottom: '0.5rem', gap: '1rem' }}>
                                <span className="mono" style={{ fontSize: '10px', opacity: 0.5 }}>{item.label}</span>
                                <span className="mono" style={{ fontSize: '10px', color: item.color, textAlign: 'right' }}>{item.value}</span>
                            </div>
                        ))}
                    </div>

                    {/* Live Data Science Visualizer */}
                    <div style={{ marginTop: '2rem', padding: '1rem', background: 'rgba(0,0,0,0.5)', borderRadius: '8px', border: '1px solid rgba(255,85,0,0.2)', position: 'relative', zIndex: 2 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                            <span className="mono" style={{ fontSize: '9px', opacity: 0.4 }}>NEURAL_ENGINE_ACTIVE</span>
                            <div style={{ display: 'flex', gap: '4px' }}>
                                <div className="pulse" style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#00ff00' }}></div>
                                <div className="pulse" style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#ff5500', animationDelay: '0.2s' }}></div>
                                <div className="pulse" style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#00f2ff', animationDelay: '0.4s' }}></div>
                            </div>
                        </div>

                        <div className="mono" style={{ fontSize: '10px', height: '60px', overflow: 'hidden', opacity: 0.6, position: 'relative' }}>
                            <motion.div
                                animate={{ y: [-150, 0] }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}
                            >
                                {[
                                    '> INITIALIZING_NEURAL_WEIGHTS...',
                                    '> FETCHING_DATASET_CLUSTER_09',
                                    '> OPTIMIZING_GRADIENT_DESCENT',
                                    '> MODEL_RECALL: 0.982',
                                    '> SCRAPING_REAL_TIME_TRENDS',
                                    '> UPDATING_BRAIN_LATENCY...',
                                    '> PARSING_SYNTACTIC_SCHEMA',
                                    '> VECTORIZING_USER_INPUT',
                                    '> CROSS_VALIDATION_ACTIVE',
                                    '> REINFORCEMENT_LEARNING_RUNNING'
                                ].map((log, i) => (
                                    <span key={i} style={{ color: i % 3 === 0 ? 'var(--brand-orange)' : i % 3 === 1 ? '#00f2ff' : 'var(--text-main)' }}>{log}</span>
                                ))}
                            </motion.div>
                        </div>
                    </div>

                </motion.div>
                </div>

            </div>

            {/* Reactive Glow Follower */}
            <div style={{
                position: 'absolute', inset: 0, zIndex: 5, pointerEvents: 'none',
                background: `radial-gradient(600px circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(255, 85, 0, 0.03), transparent 70%)`
            }} />
        </section>
    );
}
