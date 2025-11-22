import React from 'react';
import { motion } from 'framer-motion';
import StallCard from './StallCard';
import { stalls } from '../data/stalls';

const GallerySection = ({ id }) => {
    return (
        <section id={id} className="section" style={{
            background: 'var(--color-bg-primary)',
            padding: '6rem 0'
        }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{
                        fontSize: '3rem',
                        marginBottom: '1rem',
                        color: 'var(--color-accent-gold)'
                    }}>
                        Our Stalls
                    </h2>
                    <p style={{
                        color: 'var(--color-text-secondary)',
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}>
                        Explore a world of flavors with our unique food stalls, each offering a distinct culinary experience.
                    </p>
                </motion.div>

                <motion.div
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="gallery-grid"
                >
                    {stalls.map((stall, index) => (
                        <StallCard key={stall.id} stall={stall} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default GallerySection;
