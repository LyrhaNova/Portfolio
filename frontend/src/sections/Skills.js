import Image from 'next/image';
import '../styles/layout/_skills.scss';
import '../styles/main.scss';
import { Typewriter } from 'react-simple-typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDatabase,
  faGear,
  faDiagramProject,
  faArrowTrendUp,
  faBugSlash,
} from '@fortawesome/free-solid-svg-icons';
import { faGitkraken, faChrome } from '@fortawesome/free-brands-svg-icons';

export default function Skills() {
  return (
    <section id="skills">
      <div className="backText">
        <Typewriter
          words={['Techs & Tools']}
          loop={false}
          cursor
          cursorStyle="_"
          typeSpeed={50}
          deleteSpeed={70}
          delaySpeed={3000}
        />
      </div>
      <div className="skills-container">
        <div className="divSkills">
          <h1>COMPÉTENCES</h1>

          <div className="divSkills_container">
            <h2>Frontend</h2>
            <div className="divSkills_container_box">
              {[
                'html5',
                'css3',
                'sass',
                'javascript',
                'react',
                'nextjs',
                'vite',
                'typescript',
              ].map((skill) => (
                <div className="icon-wrapper" key={skill}>
                  <i className={`devicon-${skill}-plain`}></i>
                  <p>{skill.charAt(0).toUpperCase() + skill.slice(1)}</p>
                </div>
              ))}
            </div>

            <h2>Backend</h2>
            <div className="divSkills_container_box">
              <div className="icon-wrapper">
                <i className="devicon-nodejs-plain"></i>
                <p>Node.js</p>
              </div>
              <div className="icon-wrapper">
                <i className="devicon-express-original"></i> <p>Express</p>
              </div>
              <div className="icon-wrapper">
                <FontAwesomeIcon icon={faGear} className="iconeFont" />
                <p>RESTful APIs</p>
              </div>
            </div>

            <h2>Base de données</h2>
            <div className="divSkills_container_box">
              <div className="icon-wrapper">
                <i className="devicon-mongodb-plain"></i> {/* Icône MongoDB */}
                <p>MongoDB</p>
              </div>
              <div className="icon-wrapper">
                <i className="devicon-mongoose-original"></i>{' '}
                {/* Vérifie si c'est la bonne icône pour Mongoose */}
                <p>Mongoose</p>
              </div>
              <div className="icon-wrapper">
                <FontAwesomeIcon icon={faDatabase} className="iconeFont" />
                <p>NoSQL</p>
              </div>
            </div>

            <h2>Outils</h2>
            <div className="divSkills_container_box">
              {['vscode', 'git', 'github', 'postman', 'figma'].map((tool) => (
                <div className="icon-wrapper" key={tool}>
                  <i className={`devicon-${tool}-plain`}></i>
                  <p>{tool.charAt(0).toUpperCase() + tool.slice(1)}</p>
                </div>
              ))}
              <div className="icon-wrapper">
                <FontAwesomeIcon icon={faGitkraken} className="iconeFont" />
                <p>GitKraken</p>
              </div>
              <div className="icon-wrapper">
                <FontAwesomeIcon icon={faChrome} className="iconeFont" />
                <p>Chrome DevTools</p>
              </div>
            </div>

            <h2>Gestion</h2>
            <div className="divSkills_container_box">
              {[
                { icon: faDiagramProject, text: 'Gestion de Projets' },
                { icon: faArrowTrendUp, text: 'Optimisation' },
                { icon: faBugSlash, text: 'Debug' },
              ].map(({ icon, text }) => (
                <div className="icon-wrapper" key={text}>
                  <FontAwesomeIcon icon={icon} className="iconeFont" />
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="divCv">
          <h1>CV</h1>
          <div className="containerCV">
            <Image
              src="/assets/CV_Bouhafs-Celine_light.png"
              alt="CV"
              className="CV"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <a
            href="/assets/CV_Bouhafs-Celine_light.png"
            className="cvLink"
            download="CV_Bouhafs-Celine"
          >
            Téléchargez le CV
          </a>
        </div>
      </div>
    </section>
  );
}
