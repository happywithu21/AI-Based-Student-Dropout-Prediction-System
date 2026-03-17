import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import animeViz from '../assets/anime_viz.png';

const projects = [
    {
        id: '01',
        title: 'ANIME RECOMMENDER',
        subtitle: 'DATA INTELLIGENCE',
        image: animeViz,
        tech: ['Python', 'Power BI'],
        glow: 'rgba(255, 85, 0, 0.4)'
    },
    {
        id: '02',
        title: 'CPU SCHEDULER',
        subtitle: 'SYSTEMS OPTIMIZATION',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000',
        tech: ['C++', 'Multithreading'],
        glow: 'rgba(0, 242, 255, 0.3)'
    },
    {
        id: '03',
        title: 'NEXUS SHOOTER',
        subtitle: 'INTERACTIVE SIMULATION',
        image: 'https://images.unsplash.com/photo-1614728263952-84ea206f9c45?auto=format&fit=crop&q=80&w=1000',
        tech: ['JS', 'Canvas'],
        glow: 'rgba(192, 132, 252, 0.3)'
    },
    {
        id: '04',
        title: 'BLENDER MOTION',
        subtitle: '3D VISUALIZATION',
        image: 'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&q=80&w=1000',
        tech: ['Blender', 'Python'],
        glow: 'rgba(255, 255, 255, 0.2)'
    }
];

export default function Projects() {
    const [index, setIndex] = useState(0);
    const [isMovingForward, setIsMovingForward] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => {
                if (isMovingForward) {
                    if (prev === projects.length - 1) {
                        setIsMovingForward(false);
                        return prev - 1;
                    }
                    return prev + 1;
                } else {
                    if (prev === 0) {
                        setIsMovingForward(true);
                        return prev + 1;
                    }
                    return prev - 1;
                }
            });
        }, 5000); // 4-5 second pause + 1 second transition total roughly

        return () => clearInterval(interval);
    }, [isMovingForward]);

    return (
        <section id="work" style={{ 
            padding: '10vh 0', 
            background: '#0a0a0a', 
            overflow: 'hidden',
            position: 'relative',
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }}>
            {/* Background Text */}
            <div className="desktop-only" style={{ position: 'absolute', top: '5vh', left: '6vw', opacity: 0.05, zIndex: 0 }}>
                <h2 style={{ fontSize: '20vw', fontWeight: 900, margin: 0, color: '#fff' }}>WORK</h2>
            </div>

            <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ padding: '0 6vw', marginBottom: '4vh', textAlign: 'center' }}>
                    <span className="section-label" style={{ color: 'var(--brand-orange)', letterSpacing: '0.3em', fontSize: '10px' }}>PROUDLY PRESENTING</span>
                    <h2 style={{ 
                        fontSize: '1.2rem', 
                        fontWeight: 900, 
                        marginTop: '0.4rem',
                        color: '#fff',
                        textTransform: 'uppercase',
                        letterSpacing: '0.15em'
                    }}>
                        FEATURED PROJECTS
                    </h2>
                </div>

                <div style={{ 
                    position: 'relative',
                    width: '100%',
                    height: 'clamp(450px, 70vh, 600px)',
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '2vh'
                }}>
                    <motion.div 
                        initial={false}
                        animate={{ 
                            x: `calc(50vw - 150px - ${index * (window.innerWidth < 768 ? 320 : 500)}px)`
                        }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        style={{ 
                            display: 'flex', 
                            gap: window.innerWidth < 768 ? '20px' : '80px',
                            position: 'absolute',
                            left: 0,
                            padding: '40px 0' 
                        }}
                    >
                        {projects.map((project, idx) => (
                            <ProjectCard 
                                key={idx} 
                                project={project} 
                                isActive={idx === index} 
                            />
                        ))}
                    </motion.div>
                </div>

                {/* Pagination / Index Indicator */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '2rem' }}>
                    {projects.map((_, i) => (
                        <div key={i} style={{ 
                            width: '8px', height: '8px', borderRadius: '50%',
                            background: i === index ? 'var(--brand-orange)' : 'rgba(255,255,255,0.1)',
                            transition: 'all 0.5s ease',
                            transform: i === index ? 'scale(1.5)' : 'scale(1)',
                            cursor: 'pointer'
                        }} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project, isActive }) {
    const isMobile = window.innerWidth < 768;
    
    return (
        <motion.div
            animate={{ 
                scale: isActive ? 1.05 : 0.85,
                opacity: isActive ? 1 : 0.15,
                boxShadow: isActive ? `0 0 60px ${project.glow}` : '0 0 0px transparent'
            }}
            transition={{ duration: 0.8, ease: "circOut" }}
            style={{
                width: isMobile ? '300px' : '420px',
                flexShrink: 0,
                background: 'rgba(238, 237, 228, 0.02)',
                border: isActive ? '2px solid var(--brand-orange)' : '1px solid rgba(255,255,255,0.05)',
                borderRadius: '24px',
                padding: '1.5rem',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                backdropFilter: isActive ? 'blur(0px)' : 'blur(10px)',
            }}
        >
            <div style={{ 
                width: '100%', 
                height: isMobile ? '160px' : '230px', 
                borderRadius: '16px', 
                overflow: 'hidden',
                background: '#000'
            }}>
                <motion.img 
                    src={project.image} 
                    alt={project.title} 
                    animate={{ filter: isActive ? 'grayscale(0)' : 'grayscale(1)' }}
                    style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover'
                    }} 
                />
            </div>
            
            <div style={{ marginTop: '0.5rem' }}>
                <span className="mono" style={{ fontSize: '10px', color: 'var(--brand-orange)' }}>
                    {project.subtitle}
                </span>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.4rem' }}>
                    <h3 style={{ fontSize: isMobile ? '1.4rem' : '1.8rem', fontWeight: 900, textTransform: 'uppercase', margin: 0 }}>
                        {project.title}
                    </h3>
                    {!isMobile && <ArrowUpRight size={24} style={{ opacity: isActive ? 1 : 0 }} />}
                </div>

                <div style={{ display: 'flex', gap: '8px', marginTop: '1rem', flexWrap: 'wrap' }}>
                    {project.tech.map((t, i) => (
                        <span key={i} className="mono" style={{ fontSize: '9px', padding: '4px 10px', background: 'rgba(255,255,255,0.05)', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.05)' }}>
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
