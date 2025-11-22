import React from 'react';
import { motion } from 'framer-motion';
import gallery1 from '../assets/images/gallery1.jpg';
import gallery2 from '../assets/images/gallery2.jpg';
import gallery3 from '../assets/images/gallery3.jpg';
import gallery4 from '../assets/images/gallery4.jpg';

const photos = [
    { id: 1, src: gallery1, alt: "Outdoor Ambience" },
    { id: 2, src: gallery2, alt: "Food Court Vibe" },
    { id: 3, src: gallery3, alt: "Evening Lights" },
    { id: 4, src: gallery4, alt: "Seating Area" },
];

const PhotoGallerySection = ({ id }) => {
    return (
        <section id={id} className="section" style={{
            background: 'var(--color-bg-secondary)',
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
                    <h2 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--color-accent-gold)' }}>
                        Captured Moments
                    </h2>
                    <p style={{ color: 'var(--color-text-secondary)' }}>
                        Glimpses of the good times at Chef Lounge.
                    </p>
                </motion.div>

                <div className="gallery-grid">
                    {photos.map((photo, index) => (
                        <motion.div
                            key={photo.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            style={{
                                borderRadius: '16px',
                                overflow: 'hidden',
                                height: '320px', // Match StallCard height
                                boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
                            }}
                        >
                            <img
                                src={photo.src}
                                alt={photo.alt}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 0.5s ease'
                                }}
                                onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PhotoGallerySection;
