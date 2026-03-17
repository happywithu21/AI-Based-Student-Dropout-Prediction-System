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

                {/* Right: Technical Metadata Panel */}
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
                    style={{ marginTop: '2rem', perspective: '1000px', transformStyle: 'preserve-3d' }}
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

            {/* Reactive Glow Follower */}
            <div style={{
                position: 'absolute', inset: 0, zIndex: 5, pointerEvents: 'none',
                background: `radial-gradient(600px circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(255, 85, 0, 0.03), transparent 70%)`
            }} />
        </section>
    );
}
