import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import animeViz from '../assets/anime_viz.png';

const projects = [
    {
        id: '01',
        title: 'AI DROPOUT PREDICTOR',
        subtitle: 'Advanced early warning system for universities using Random Forest models to identify students at risk of dropout with 92% accuracy.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
        tech: ['Python', 'Flask', 'React', 'Scikit-Learn'],
        glow: 'rgba(255, 170, 0, 0.4)',
        link: 'https://akshie21-student-dropout-predictor.hf.space/'
    },
    {
        id: '02',
        title: 'YOJANAMITRA',
        subtitle: 'Smart full-stack platform for Indian citizens to discover and match with eligible government schemes using AI-driven matching.',
        image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1000',
        tech: ['FastAPI', 'React', 'PostgreSQL', 'Docker'],
        glow: 'rgba(0, 242, 255, 0.3)',
        link: 'https://github.com/happywithu21/gov-scheme-recommender'
    },
    {
        id: '03',
        title: 'ANIME RECOMMENDER',
        subtitle: 'Tactical anime discovery engine driven by advanced data filtering and collaborative filtering models.',
        image: animeViz,
        tech: ['Python', 'Power BI', 'Scikit-Learn'],
        glow: 'rgba(255, 85, 0, 0.4)',
        link: 'https://github.com/happywithu21/Anime-Recommender'
    }
];

export default function Projects() {
    return (
        <section id="work" style={{ 
            padding: '10vh 0', 
            background: '#0a0a0a', 
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            {/* Background Aesthetic */}
            <div className="desktop-only" style={{ position: 'absolute', top: '2vh', right: '6vw', opacity: 0.03, zIndex: 0 }}>
                <h2 style={{ fontSize: '15vw', fontWeight: 900, margin: 0, color: '#fff' }}>PROJECTS</h2>
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '1200px' }}>
                <div style={{ marginBottom: '6vh', textAlign: 'left' }}>
                    <span className="section-label" style={{ color: 'var(--brand-orange)', letterSpacing: '0.3em', fontSize: '10px' }}>INTEL_COLLECTION</span>
                    <h2 style={{ 
                        fontSize: '2.5rem', 
                        fontWeight: 900, 
                        marginTop: '0.5rem',
                        color: '#fff',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                    }}>
                        FEATURED <span style={{ color: 'var(--brand-orange)' }}>FIELD WORKS</span>
                    </h2>
                </div>

                <div style={{ 
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4rem',
                    width: '100%'
                }}>
                    {projects.map((project, idx) => (
                        <ProjectCard 
                            key={idx} 
                            project={project} 
                            isEven={idx % 2 === 0}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project, isEven }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
                width: '100%',
                background: 'rgba(15, 15, 15, 0.6)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '32px',
                padding: 'clamp(1rem, 4vw, 3rem)',
                display: 'flex',
                alignItems: 'center',
                flexDirection: isEven ? 'row' : 'row-reverse',
                gap: 'clamp(1.5rem, 5vw, 4rem)',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: `0 40px 100px -20px rgba(0,0,0,0.5), 0 0 40px ${project.glow.replace('0.4', '0.05')}`
            }}
            className={`project-horizontal-card mobile-stack`}
        >
            {/* Left/Content Side */}
            <div style={{ flex: 1.2, zIndex: 2 }}>
                <div style={{ marginBottom: '1.5rem' }}>
                    <h3 className="mono" style={{ 
                        fontSize: 'clamp(2rem, 4vw, 3.5rem)', 
                        fontWeight: 900, 
                        textTransform: 'uppercase', 
                        margin: 0,
                        color: project.glow.includes('255, 85, 0') ? 'var(--brand-orange)' : project.glow.includes('0, 242, 255') ? '#00f2ff' : '#c084fc',
                        textShadow: `0 0 20px ${project.glow}`,
                        fontStyle: 'italic',
                        lineHeight: 1
                    }}>
                        {project.title}
                    </h3>
                    <p style={{ 
                        fontSize: '1.1rem', 
                        lineHeight: 1.6, 
                        color: 'rgba(238, 237, 228, 0.7)', 
                        marginTop: '1.5rem',
                        maxWidth: '500px'
                    }}>
                        {project.subtitle}
                    </p>
                </div>

                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                    {project.tech.map((t, i) => (
                        <span key={i} className="mono" style={{ 
                            fontSize: '10px', 
                            padding: '6px 14px', 
                            background: 'rgba(255,255,255,0.03)', 
                            borderRadius: '100px', 
                            border: `1px solid ${project.glow.replace('0.4', '0.3')}`,
                            color: '#fff',
                            textTransform: 'uppercase'
                        }}>
                            {t}
                        </span>
                    ))}
                </div>

                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="interactive mono"
                    style={{
                        fontSize: '11px',
                        color: '#fff',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        fontWeight: 900,
                        letterSpacing: '0.1em',
                        borderBottom: '1px solid rgba(255,255,255,0.2)',
                        paddingBottom: '4px',
                        width: 'fit-content'
                    }}
                >
                    DATA-LINK TO VIEW <ExternalLink size={14} />
                </a>
            </div>

            {/* Right/Image Side */}
            <div style={{ 
                flex: 1, 
                height: '400px', 
                borderRadius: '24px', 
                overflow: 'hidden',
                position: 'relative',
                boxShadow: `0 0 50px ${project.glow.replace('0.4', '0.2')}`
            }}>
                <img 
                    src={project.image} 
                    alt={project.title} 
                    style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover'
                    }} 
                />
                <div style={{ 
                    position: 'absolute', 
                    inset: 0, 
                    border: '1px solid rgba(255,255,255,0.1)', 
                    borderRadius: '24px',
                    pointerEvents: 'none'
                }} />
            </div>

            {/* Background Accent */}
            <div style={{
                position: 'absolute',
                top: '-20%',
                right: isEven ? '-10%' : 'auto',
                left: isEven ? 'auto' : '-10%',
                width: '40%',
                height: '140%',
                background: `radial-gradient(circle at center, ${project.glow.replace('0.4', '0.08')}, transparent 70%)`,
                zIndex: 0,
                pointerEvents: 'none'
            }} />
        </motion.div>
    );
}
