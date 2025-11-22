import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{
            padding: '4rem 2rem',
            backgroundColor: 'var(--color-bg-primary)',
            borderTop: '1px solid rgba(212, 175, 55, 0.2)',
            textAlign: 'center',
            color: 'var(--color-text-secondary)'
        }}>
            <div className="container">
                <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ color: 'var(--color-accent-gold)', marginBottom: '1rem' }}>Chef. Lounge</h3>
                    <p>Where friends meet flavors.</p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
                    <a href="#" style={{ color: 'var(--color-accent-gold)' }}><Instagram size={24} /></a>
                    <a href="#" style={{ color: 'var(--color-accent-gold)' }}><Facebook size={24} /></a>
                    <a href="#" style={{ color: 'var(--color-accent-gold)' }}><Twitter size={24} /></a>
                </div>

                <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>
                    &copy; {new Date().getFullYear()} Chef Lounge. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
