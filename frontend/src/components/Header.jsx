import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <h1>LyrhaNova</h1>
        </div>
        <ul className="nav-links">
          <li><Link href="/">À propos</Link></li>
          <li><Link href="/projects">Projets</Link></li>
          <li><Link href="/skills">Compétences</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}