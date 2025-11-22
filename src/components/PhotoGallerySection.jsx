import React from 'react';
import { motion } from 'framer-motion';

// Automatically import all images from the gallery folder
const galleryModules = import.meta.glob('../assets/images/gallery/*.(jpg|jpeg|png|webp|gif)', { eager: true });

// Convert the modules object to an array of image paths
const galleryImages = Object.keys(galleryModules).map(path => galleryModules[path].default);

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
                    {galleryImages.map((imageSrc, index) => (
                        <motion.div
                            key={imageSrc}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            style={{
                                borderRadius: '16px',
                                overflow: 'hidden',
                                height: '320px',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
                            }}
                        >
                            <img
                                src={imageSrc}
                                alt={`Gallery ${index + 1}`}
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
