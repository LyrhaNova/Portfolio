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
