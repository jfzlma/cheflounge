import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';

const ContactSection = ({ id }) => {
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
                    <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Visit Us</h2>
                    <p style={{ color: 'var(--color-text-secondary)' }}>We are open daily to serve you the best.</p>
                </motion.div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%'
                }}>
                    {/* Info & Map */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        style={{ width: '100%', maxWidth: '1200px' }}
                    >
                        <div className="contact-grid">
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                    <div style={{ color: 'var(--color-accent-gold)', background: 'rgba(212, 175, 55, 0.1)', padding: '1rem', borderRadius: '50%' }}><MapPin size={28} /></div>
                                    <div>
                                        <h4 style={{ color: 'var(--color-text-primary)', marginBottom: '0.25rem' }}>Location</h4>
                                        <p style={{ color: 'var(--color-text-secondary)' }}>Sales Tax Office Rd, Nadakkave, Kozhikode</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                    <div style={{ color: 'var(--color-accent-gold)', background: 'rgba(212, 175, 55, 0.1)', padding: '1rem', borderRadius: '50%' }}><Clock size={28} /></div>
                                    <div>
                                        <h4 style={{ color: 'var(--color-text-primary)', marginBottom: '0.25rem' }}>Opening Hours</h4>
                                        <p style={{ color: 'var(--color-text-secondary)' }}>4:00 PM - Midnight (Daily)</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                    <div style={{ color: 'var(--color-accent-gold)', background: 'rgba(212, 175, 55, 0.1)', padding: '1rem', borderRadius: '50%' }}><Phone size={28} /></div>
                                    <div>
                                        <h4 style={{ color: 'var(--color-text-primary)', marginBottom: '0.25rem' }}>Contact</h4>
                                        <p style={{ color: 'var(--color-text-secondary)' }}>+91 123 456 7890</p>
                                    </div>
                                </div>
                            </div>

                            {/* Map */}
                            <div style={{
                                width: '100%',
                                height: '400px',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                border: '1px solid rgba(255,255,255,0.1)',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
                            }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1732.943133027949!2d75.78319630355105!3d11.271534152429808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65f0010efb19f%3A0x63c3fe1e95b6db22!2sChef%20lounge!5e0!3m2!1sen!2sin!4v1763814460300!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
