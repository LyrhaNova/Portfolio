import { useEffect } from 'react';
import '../styles/layout/_header.scss';

export default function Header() {
  useEffect(() => {
    const nav = document.querySelector('nav');
    const handleScroll = () => {
      if (window.scrollY > 850) {
        nav.classList.add('opaque');
      } else {
        nav.classList.remove('opaque');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <nav>
        <ul className="nav-links">
          <li><a href="#about">À PROPOS</a></li>
          <li><a href="#projects">PROJETS</a></li>
          <li><a href="#skills">COMPÉTENCES</a></li>
          <li><a href="#contact">CONTACT</a></li>
          {/* <li><a href="">ADMIN</a></li> */}
        </ul>
      </nav>
    </header>
  );
}

