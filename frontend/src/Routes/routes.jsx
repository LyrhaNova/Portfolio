// src/routes/routes.jsx

import Link from 'next/link';
import Header from '../components/Header';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Skills from '../pages/Skills';
import Contact from '../pages/Contact';

export default function AppRoutes() {
  return (
    <>
      <Header />
      <main>
        {/* Définir les liens de navigation avec next/link */}
        <nav>
          <ul>
            <li><Link href="/">À propos</Link></li>
            <li><Link href="/projects">Projets</Link></li>
            <li><Link href="/skills">Compétences</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>

        {/* Afficher le contenu des pages selon la route */}
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}


