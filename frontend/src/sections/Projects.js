import '../styles/layout/_projects.scss';
import ProjectsCarousel from '../components/Slideshow.jsx';
import { Typewriter } from 'react-simple-typewriter';

export default function Projects() {
  return (
    <section id="projects">
      <div className="divProjects">
        <h1>PROJETS</h1>
        <div className="backText">
          <Typewriter
            words={['Code, coffee, repeat']}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={70}
            delaySpeed={3000}
          />
        </div>
        <ProjectsCarousel />
      </div>
    </section>
  );
}
