import { useState } from 'react';
import '../styles/layout/_skills.scss';
import '../styles/main.scss';
import { Typewriter } from 'react-simple-typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faGitkraken } from '@fortawesome/free-brands-svg-icons';
import { faChrome } from '@fortawesome/free-brands-svg-icons';
import { faDiagramProject } from '@fortawesome/free-solid-svg-icons';
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';
import { faBugSlash } from '@fortawesome/free-solid-svg-icons';

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
              <div className="icon-wrapper">
                <i className="devicon-html5-plain"></i>
                <p>HTML5</p>
              </div>
              <div className="icon-wrapper">
                <i className="devicon-css3-plain"></i>
                <p>CSS3</p>
              </div>
              <div className="icon-wrapper">
                <i className="devicon-sass-original"></i>
                <p>SASS</p>
              </div>
              <div className="icon-wrapper">
                <i className="devicon-javascript-plain"></i>
                <p>JavaScript</p>
              </div>
              <div className="icon-wrapper">
                <i className="devicon-react-original"></i>
                <p>React</p>
              </div>
              <div className="icon-wrapper">
                <i className="devicon-nextjs-plain"></i>
                <p>Next.js</p>
              </div>
              <div className="icon-wrapper">
                <i className="devicon-vite-original"></i>
                <p>Vite</p>
              </div>
              <div className="icon-wrapper">
                <i className="devicon-typescript-plain"></i>
                <p>TypeScript</p>
              </div>
            </div>

            <h2>Backend</h2>
            <div className="divSkills_container_box">
              <div className="icon-wrapper">
                <i className="devicon-nodejs-plain"></i>
                <p>Node.js</p>
              </div>
              <div className="icon-wrapper">
                <i className="devicon-express-original"></i>
                <p>Express</p>
              </div>
              <div className="icon-wrapper">
                <FontAwesomeIcon icon={faGear} className="iconeFont" />
                <p>RESTful APIs</p>
              </div>
            </div>

            <h2>Base de données</h2>
            <div className="divSkills_container_box">
              <div className="icon-wrapper">
                <i className="devicon-mongodb-plain"></i>
                <p>MongoDB</p>
              </div>
              <div className="icon-wrapper">
                <i className="devicon-mongoose-original"></i>
                <p>Mongoose</p>
              </div>
              <div className="icon-wrapper">
                <FontAwesomeIcon icon={faDatabase} className="iconeFont" />
                <p>NoSQL</p>
              </div>
            </div>

            <h2>Outils</h2>
            <div className="divSkills_container_box">
              <div className="icon-wrapper">
                <i className="devicon-vscode-plain"></i>
                <p>VSCode</p>
              </div>
              <div className="icon-wrapper">
                <i className="devicon-git-plain"></i>
                <p>Git</p>
              </div>
              <div className="icon-wrapper">
                <i className="devicon-github-original"></i>
                <p>GitHub</p>
              </div>
              <div className="icon-wrapper">
                <FontAwesomeIcon icon={faGitkraken} className="iconeFont" />
                <p>GitKraken</p>
              </div>
              <div className="icon-wrapper">
                <FontAwesomeIcon icon={faChrome} className="iconeFont" />
                <p>Chrome DevTools</p>
              </div>
              <div className="icon-wrapper">
                <i className="devicon-postman-plain"></i>
                <p>Postman</p>
              </div>
              <div className="icon-wrapper">
                <i className="devicon-figma-plain"></i>
                <p>Figma</p>
              </div>
            </div>

            <h2>Gestion</h2>
            <div className="divSkills_container_box">
              <div className="icon-wrapper">
                <FontAwesomeIcon
                  icon={faDiagramProject}
                  className="iconeFont"
                />
                <p>Gestion de Projets</p>
              </div>
              <div className="icon-wrapper">
                <FontAwesomeIcon icon={faArrowTrendUp} className="iconeFont" />
                <p>Optimisation</p>
              </div>
              <div className="icon-wrapper">
                <FontAwesomeIcon icon={faBugSlash} className="iconeFont" />
                <p>Debug</p>
              </div>
            </div>
          </div>
        </div>
        <div className="divCv">
          <h1>CV</h1>
          <div className="containerCV">
            <img
              src="../assets/CV_Bouhafs-Celine_light.png"
              alt="CV"
              className="CV"
            />
          </div>
          <a
            href="../assets/CV_Bouhafs-Celine_light.png"
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
