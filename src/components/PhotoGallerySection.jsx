import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Automatically import all images from the gallery folder
const galleryModules = import.meta.glob('../assets/images/gallery/*.(jpg|jpeg|png|webp|gif)', { eager: true });
// Convert the modules object to an array of image paths
const galleryImages = Object.keys(galleryModules).map(path => galleryModules[path].default);

const IMAGES_PER_LOAD = 8;

const PhotoGallerySection = ({ id }) => {
    const [visibleCount, setVisibleCount] = useState(IMAGES_PER_LOAD);

    const handleShowMore = () => {
        setVisibleCount(prev => Math.min(prev + IMAGES_PER_LOAD, galleryImages.length));
    };

    const visibleImages = galleryImages.slice(0, visibleCount);
    const hasMore = visibleCount < galleryImages.length;

    return (
        <section id={id} style={{
            background: 'var(--color-bg-secondary)',
            padding: '4rem 0',
            minHeight: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden'
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
                    {visibleImages.map((imageSrc, index) => (
                        <motion.div
                            key={imageSrc}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: (index % IMAGES_PER_LOAD) * 0.1 }}
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

                {hasMore && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '3rem'
                        }}
                    >
                        <button
                            onClick={handleShowMore}
                            style={{
                                background: 'linear-gradient(135deg, var(--color-accent-gold), #c9a961)',
                                color: 'var(--color-bg-primary)',
                                padding: '1rem 2.5rem',
                                fontSize: '1.1rem',
                                fontWeight: '600',
                                borderRadius: '50px',
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)',
                                fontFamily: 'var(--font-body)'
                            }}
                            onMouseOver={(e) => {
                                e.target.style.transform = 'translateY(-2px)';
                                e.target.style.boxShadow = '0 6px 20px rgba(212, 175, 55, 0.4)';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = '0 4px 15px rgba(212, 175, 55, 0.3)';
                            }}
                        >
                            Show More ({galleryImages.length - visibleCount} remaining)
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default PhotoGallerySection;
