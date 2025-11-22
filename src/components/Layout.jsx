import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, activeSection, scrollToSection }) => {
    return (
        <div style={{ position: 'relative' }}>
            <Header activeSection={activeSection} scrollToSection={scrollToSection} />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
