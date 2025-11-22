import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import logo from '../assets/images/logo-large.png';

const Hero = ({ id }) => {
    return (
        <section id={id} className="section" style={{
            background: 'radial-gradient(circle at 50% 50%, #1A2F24 0%, #213627 100%)',
            alignItems: 'center',
            textAlign: 'center',
            color: 'var(--color-text-primary)'
        }}>
            {/* Ambient Lights */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '20%',
                width: 'min(300px, 50vw)',
                height: 'min(300px, 50vw)',
                background: 'var(--color-accent-gold)',
                filter: 'blur(150px)',
                opacity: 0.15,
                borderRadius: '50%'
            }} />
            <div style={{
                position: 'absolute',
                bottom: '20%',
                right: '20%',
                width: 'min(400px, 60vw)',
                height: 'min(400px, 60vw)',
                background: 'var(--color-accent-orange)',
                filter: 'blur(180px)',
                opacity: 0.1,
                borderRadius: '50%'
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <h2 style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '1.2rem',
                        letterSpacing: '4px',
                        textTransform: 'uppercase',
                        marginBottom: '2rem',
                        color: 'var(--color-text-secondary)'
                    }}>
                        Where Friends Meet Flavors
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    style={{ marginBottom: '2rem' }}
                >
                    <img src={logo} alt="Chef Lounge" style={{ maxWidth: '400px', width: '100%', height: 'auto' }} />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    style={{
                        maxWidth: '600px',
                        margin: '0 auto',
                        fontSize: '1.1rem',
                        color: 'var(--color-text-secondary)'
                    }}
                >
                    A premium outdoor food court experience featuring unique stalls under the open sky.
                </motion.p>
            </div>

            <motion.div
                initial={{ opacity: 0, x: '-50%' }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{
                    opacity: { duration: 1, delay: 1 },
                    y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
                style={{
                    position: 'absolute',
                    bottom: '2rem',
                    left: '50%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--color-text-secondary)',
                    fontSize: '0.8rem',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    cursor: 'pointer'
                }}
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            >
                Scroll to Explore
                <ChevronDown size={20} />
            </motion.div>
        </section>
    );
};

export default Hero;
