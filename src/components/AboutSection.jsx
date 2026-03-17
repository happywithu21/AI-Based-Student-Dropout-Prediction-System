import { motion } from 'framer-motion';
import { Database, Cpu, Layers } from 'lucide-react';

export default function AboutSection() {
    const coreValues = [
        { 
            icon: <Database size={18} className="brand-orange-text" />, 
            title: "Data Intelligence", 
            desc: "Extracting signal from noise to drive intelligent decisions." 
        },
        { 
            icon: <Cpu size={18} style={{ color: '#c084fc' }} />, 
            title: "Model Engineering", 
            desc: "Architecting predictive systems that learn and adapt." 
        },
        { 
            icon: <Layers size={18} style={{ color: '#3b82f6' }} />, 
            title: "Full Stack Mastery", 
            desc: "Bridging complex backends with seamless human interfaces." 
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
                <div style={{ display: 'grid', gap: '1rem' }}>
                    {coreValues.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="data-card"
                            style={{ 
                                padding: '1.5rem', 
                                background: 'rgba(255,255,255,0.02)',
                                border: '1px solid rgba(238,237,228,0.05)',
                                display: 'flex',
                                gap: '1.2rem',
                                alignItems: 'center'
                            }}
                        >
                            <div style={{ 
                                width: '45px', 
                                height: '45px', 
                                borderRadius: '8px', 
                                background: 'rgba(255,255,255,0.03)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: '1px solid rgba(255,255,255,0.05)'
                            }}>
                                {item.icon}
                            </div>
                            <div>
                                <h4 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '4px' }}>{item.title}</h4>
                                <p className="mono" style={{ fontSize: '11px', opacity: 0.5 }}>{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
