import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import GallerySection from './components/GallerySection';
import PhotoGallerySection from './components/PhotoGallerySection';
import ContactSection from './components/ContactSection';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'gallery', 'photos', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layout activeSection={activeSection} scrollToSection={scrollToSection}>
      <Hero id="home" />
      <AboutSection id="about" />
      <GallerySection id="gallery" />
      <PhotoGallerySection id="photos" />
      <ContactSection id="contact" />
    </Layout>
  );
}

export default App;
