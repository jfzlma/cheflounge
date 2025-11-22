import React from 'react';
import { motion } from 'framer-motion';

const StallCard = ({ stall }) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
            }}
            style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                height: '320px',
                cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
            }}
            whileHover="hover"
        >
            {/* Background Image */}
            <motion.img
                src={stall.image}
                alt={stall.name}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                }}
                variants={{
                    hover: { scale: 1.1 }
                }}
                transition={{ duration: 0.6 }}
            />

            {/* Gradient Overlay */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(15, 40, 30, 0.95) 0%, rgba(15, 40, 30, 0.4) 50%, rgba(15, 40, 30, 0) 100%)',
            }} />

            {/* Content */}
            <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end'
            }}>
                <motion.div
                    initial={{ y: 0 }}
                    variants={{
                        hover: { y: -5 }
                    }}
                >
                    <div style={{
                        color: 'var(--color-accent-gold)',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        marginBottom: '0.5rem'
                    }}>
                        {stall.specialty}
                    </div>
                    <h3 style={{
                        color: 'white',
                        fontSize: '1.5rem',
                        marginBottom: '0.5rem',
                        fontFamily: 'var(--font-heading)'
                    }}>
                        {stall.name}
                    </h3>
                    <p style={{
                        color: 'rgba(255,255,255,0.8)',
                        fontSize: '0.9rem',
                        lineHeight: 1.4,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                    }}>
                        {stall.description}
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default StallCard;
