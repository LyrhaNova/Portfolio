import Head from 'next/head';
import Header from '../components/Header';
import HeroHeader from '../components/HeroHeader';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Skills from '../sections/Skills';
import Contact from '../sections/Contact';
import BackToTop from '../components/BackToTop';

export default function Home() {
  return (
    <div>
      <Head>
        <title>LyrhaNova - Portfolio</title>
        <meta
          name="description"
          content="Portfolio de Céline Bouhafs, développeuse web."
        />
        <meta
          name="keywords"
          content="portfolio, développement web, design, LyrhaNova, Bouhafs Céline"
        />
        <meta name="author" content="Bouhafs Céline" />
        <meta property="og:title" content="LyrhaNova - Portfolio" />
        <meta
          property="og:description"
          content="Description de la page d'accueil"
        />
        <meta property="og:image" content="/assets/logo_poupou_small.webp" />
        <meta property="og:url" content="http://www.b-celine.site/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LyrhaNova - Portfolio" />
        <meta
          name="twitter:description"
          content="Portfolio de Céline Bouhafs, développeuse web."
        />
        <meta name="twitter:image" content="/assets/logo_poupou_small.webp" />
      </Head>
      <Header />
      <HeroHeader />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <BackToTop />
    </div>
  );
}
