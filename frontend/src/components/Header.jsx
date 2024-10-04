import Link from 'next/link';
import '../styles/header.scss'

export default function Header() {
  return (
    <header>
      <nav>
        <ul className="nav-links">
          <li><Link href="#about">À propos</Link></li>
          <li><Link href="#projects">Projets</Link></li>
          <li><Link href="#skills">Compétences</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
