import { useEffect, useState } from 'react';
import Link from 'next/link';
import '../styles/layout/_header.scss';

export default function Header() {
  useEffect(() => {
    const nav = document.querySelector('nav');
    const handleScroll = () => {
      if (window.scrollY > 100) { // Par exemple, à partir de 100px de scroll
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
          <li><a href="#about">À propos</a></li>
          <li><a href="#projects">Projets</a></li>
          <li><a href="#skills">Compétences</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="">Admin</a></li>
        </ul>
      </nav>
    </header>
  );
}

