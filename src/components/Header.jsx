import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/images/logo-small.png';

const Header = ({ activeSection, scrollToSection }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'gallery', label: 'Stalls' },
        { id: 'photos', label: 'Photos' },
        { id: 'contact', label: 'Contact' },
    ];

    const handleNavClick = (id) => {
        scrollToSection(id);
        setIsMenuOpen(false);
    };

    return (
        <>
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{
                    position: 'fixed',
                    top: '1rem',
                    left: 0,
                    right: 0,
                    width: '95%',
                    maxWidth: '1200px',
                    zIndex: 100,
                    padding: isMobile ? '0.5rem 1.5rem' : '0.5rem 2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'rgba(33, 54, 39, 0.8)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(239, 201, 154, 0.1)',
                    borderRadius: '50px',
                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                    margin: '0 auto',
                }}
            >
                <div
                    onClick={() => scrollToSection('home')}
                    style={{ cursor: 'pointer', zIndex: 101, display: 'flex', alignItems: 'center' }}
                >
                    <img src={logo} alt="Chef Lounge" style={{ height: '40px', width: 'auto' }} />
                </div>

                {!isMobile ? (
                    <nav>
                        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
                            {navItems.map((item) => (
                                <li key={item.id}>
                                    <button
                                        onClick={() => scrollToSection(item.id)}
                                        style={{
                                            color: activeSection === item.id ? 'var(--color-accent-gold)' : 'var(--color-text-primary)',
                                            fontFamily: 'var(--font-body)',
                                            fontSize: '0.9rem',
                                            textTransform: 'uppercase',
                                            letterSpacing: '1px',
                                            opacity: activeSection === item.id ? 1 : 0.7,
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        {item.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                ) : (
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        style={{
                            color: 'var(--color-accent-gold)',
                            zIndex: 101,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                )}
            </motion.header>

            <AnimatePresence>
                {isMobile && isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100vh',
                            background: 'rgba(33, 54, 39, 0.98)',
                            backdropFilter: 'blur(16px)',
                            zIndex: 99,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <ul style={{ listStyle: 'none', textAlign: 'center', padding: 0 }}>
                            {navItems.map((item) => (
                                <li key={item.id} style={{ margin: '2rem 0' }}>
                                    <button
                                        onClick={() => handleNavClick(item.id)}
                                        style={{
                                            color: activeSection === item.id ? 'var(--color-accent-gold)' : 'var(--color-text-primary)',
                                            fontFamily: 'var(--font-heading)',
                                            fontSize: '2rem',
                                            textTransform: 'uppercase',
                                            letterSpacing: '2px',
                                            background: 'none',
                                            border: 'none',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        {item.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
