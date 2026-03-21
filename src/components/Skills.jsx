import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: 'PROGRAMMING & LOGIC',
        skills: ['Python / JavaScript', 'Java / C++', 'Data Structures', 'Algorithms']
    },
    {
        title: 'WEB & DATA SYSTEMS',
        skills: ['React / Frontend', 'Node.js / Express', 'SQL / NoSQL (MongoDB)', 'Machine Learning']
    },
    {
        title: 'TOOLS & DATA VIZ',
        skills: ['Vite / Git / GitHub', 'Power BI / Tableau', 'Data Storytelling', 'Technical Writing']
    }
];

export default function Skills() {
    return (
        <section className="container" id="skills" style={{ padding: 'clamp(5vh, 10vh, 15vh) 0' }}>
            <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 6vw, 6rem)' }}>
                <span className="section-label" style={{ marginBottom: '1rem' }}>MY SKILLS</span>
                <h2 style={{ 
                    fontSize: 'clamp(1.5rem, 4vw, 2.8rem)', 
                    margin: '0 auto', 
                    maxWidth: '800px',
                    lineHeight: 1.2
                }}>
                    Bridging the gap between code and <br className="desktop-only" /> <span style={{ color: 'var(--brand-orange)' }}>meaningful insights.</span>
                </h2>
            </div>

            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                gap: '2vw',
                maxWidth: '1200px',
                margin: '0 auto',
                justifyContent: 'center'
            }}>
                {skillCategories.map((cat, idx) => (
                    <motion.div
                        key={cat.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="data-card glow-orange"
                        style={{ height: '100%' }}
                    >
                        <div className="mono" style={{ fontSize: '11px', color: 'var(--brand-orange)', marginBottom: '2rem', display: 'flex', justifyContent: 'space-between' }}>
                            <span>CATEGORY_0{idx + 1}</span>
                            <span style={{ opacity: 0.3 }}>00{idx + 1}</span>
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', letterSpacing: '-0.02em' }}>{cat.title}</h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {cat.skills.map((s) => (
                                <div key={s} className="mono" style={{ fontSize: '13px', display: 'flex', alignItems: 'center', gap: '10px', opacity: 0.8 }}>
                                    <div style={{ width: '4px', height: '4px', background: 'var(--brand-orange)' }} />
                                    {s}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
