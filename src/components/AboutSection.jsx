import React from 'react';
import { motion } from 'framer-motion';
import { Wind, Music, Coffee, Car } from 'lucide-react';

const FeatureItem = ({ icon: Icon, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        viewport={{ once: true }}
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            padding: '2rem',
            background: 'rgba(255,255,255,0.03)',
            borderRadius: '16px',
            border: '1px solid rgba(212, 175, 55, 0.1)'
        }}
    >
        <div style={{
            color: 'var(--color-accent-gold)',
            marginBottom: '1rem',
            background: 'rgba(212, 175, 55, 0.1)',
            padding: '1rem',
            borderRadius: '50%'
        }}>
            <Icon size={32} />
        </div>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>{title}</h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>{description}</p>
    </motion.div>
);

const AboutSection = ({ id }) => {
    return (
        <section id={id} className="section" style={{
            background: 'var(--color-bg-secondary)',
            padding: '6rem 0'
        }}>
            <div className="container">
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '4rem'
                }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        style={{ textAlign: 'center', maxWidth: '800px' }}
                    >
                        <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>The Concept</h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
                            Chef Lounge is more than just a food court; it's a culinary destination designed for connection.
                            Nestled under the open sky, we bring together diverse food stalls to create a vibrant
                            community space where friends meet flavors.
                        </p>
                    </motion.div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '2rem',
                        width: '100%'
                    }}>
                        <FeatureItem
                            icon={Wind}
                            title="Open Air Ambience"
                            description="Enjoy your meal in our breezy, beautifully lit outdoor seating area."
                            delay={0.2}
                        />
                        <FeatureItem
                            icon={Music}
                            title="Vibrant Vibes"
                            description="Curated playlists and live music sessions to set the perfect mood."
                            delay={0.4}
                        />
                        <FeatureItem
                            icon={Coffee}
                            title="Casual Hangout"
                            description="The perfect spot for evening catch-ups, late-night snacks, and coffee runs."
                            delay={0.6}
                        />
                        <FeatureItem
                            icon={Car}
                            title="Ample Parking"
                            description="Hassle-free parking space available for all our guests."
                            delay={0.8}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
