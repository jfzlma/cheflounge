import React from 'react';
import { Instagram, MapPin } from 'lucide-react';

// Custom WhatsApp Icon Component
const WhatsAppIcon = ({ size = 24 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
);

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
                    <a
                        href="https://www.instagram.com/cheflounge_"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--color-accent-gold)', transition: 'transform 0.2s' }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <Instagram size={24} />
                    </a>
                    <a
                        href="https://wa.me/919846129912?text=hi"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--color-accent-gold)', transition: 'transform 0.2s' }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <WhatsAppIcon size={24} />
                    </a>
                    <a
                        href="https://www.google.com/maps/place/Chef+lounge/@11.271534,75.7831963,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba65f0010efb19f:0x63c3fe1e95b6db22!8m2!3d11.271534!4d75.7857712!16s%2Fg%2F11vr0rvq0v?entry=ttu"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--color-accent-gold)', transition: 'transform 0.2s' }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <MapPin size={24} />
                    </a>
                </div>

                <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>
                    &copy; {new Date().getFullYear()} Chef Lounge. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
