import Header from '../components/Header';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Skills from '../sections/Skills';
import Contact from '../sections/Contact';

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
