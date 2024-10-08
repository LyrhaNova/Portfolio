// import '../styles/layout/_skills.scss';
// import '../styles/main.scss';

// export default function Skills() {
//   return (
//     <section id="skills">
//       <div className="divSkills">
//         <h1>COMPÉTENCES </h1>
//         <div className="divSkills_container">
//           <h2>Frontend</h2>
//           <div className="divSkills_container_box">
//             <i className="devicon-html5-plain"></i>
//             <i className="devicon-css3-plain"></i>
//             <i className="devicon-sass-original"></i>
//             <i className="devicon-javascript-plain"></i>
//             <i className="devicon-react-original"></i>
//             <i className="devicon-nextjs-plain"></i>
//             <i className="devicon-vite-original"></i>
//           </div>

//           <h2>Backend</h2>
//           <div className="divSkills_container_box">
//             <i className="devicon-nodejs-plain"></i>
//             <i className="devicon-express-original"></i>
//             <p>RESTful APIs</p>
//           </div>

//           <h2>Base de données</h2>
//           <div className="divSkills_container_box">
//             <i className="devicon-mongodb-plain"></i>
//             <i className="devicon-mongoose-original"></i>
//             <p>NoSQL</p>
//           </div>

//           <h2>Outils</h2>
//           <div className="divSkills_container_box">
//             <i className="devicon-vscode-plain"></i>
//             <i className="devicon-git-plain"></i>
//             <i className="devicon-github-original"></i>
//             <p>GitKraken</p>
//             <p>Chrome DevTools</p>
//             <i className="devicon-postman-plain"></i>
//             <i className="devicon-figma-plain"></i>
//           </div>
//           <h2>Gestion</h2>
//           <div className="divSkills_container_box">
//             <p>Gestion de Projet</p>
//             <p>Optimisation</p>
//             <p>Debug</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState } from 'react'; // Importez useState pour gérer l'état
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
      <i className="fa-solid fa-database"></i>
      <div className="divSkills">
        <h1>COMPÉTENCES</h1>
        <div className="backText">
          <Typewriter
            words={['Technologies & Outils']}
            loop={false}
            cursor
            cursorStyle=""
            typeSpeed={50}
            deleteSpeed={70}
            delaySpeed={3000}
          />
        </div>
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
              <FontAwesomeIcon icon={faDiagramProject} className="iconeFont" />
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
    </section>
  );
}
