import '../styles/layout/_about.scss';
import '../styles/main.scss';
import { Typewriter } from 'react-simple-typewriter';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__content">
        <h1>À PROPOS</h1>
        <div className="backText">
          <Typewriter
            words={['Who ?']}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={70}
            delaySpeed={3000}
          />
        </div>
        <p className="about__description">
          Attirée par les possibilités infinies de la technologie et ayant déjà
          exploré le graphisme à travers des collaborations en design pour des
          vidéastes, j'ai décidé de me former au développement web, avec une
          spécialisation en front-end. Mon objectif est désormais de maîtriser
          pleinement le front-end tout en consolidant mes compétences en
          back-end. Créative, patiente et autonome, je suis toujours curieuse
          d’apprendre et d’enrichir mes compétences techniques et humaines.
        </p>
      </div>
    </section>
  );
}
