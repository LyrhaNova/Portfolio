import '../styles/layout/_skills.scss';
import '../styles/main.scss';

export default function Skills() {
  return (
    <section id="skills">
      <div className="divSkills">
        <h1>COMPÉTENCES </h1>
        <div className="divSkills_container">
          <h2>Frontend</h2>
          <div className="divSkills_container_box">
            <i className="devicon-html5-plain"></i>
            <i className="devicon-css3-plain"></i>
            <i className="devicon-sass-original"></i>
            <i className="devicon-javascript-plain"></i>
            <i className="devicon-react-original"></i>
            <i className="devicon-nextjs-plain"></i>
            <i className="devicon-vite-original"></i>
          </div>

          <h2>Backend</h2>
          <div className="divSkills_container_box">
            <i className="devicon-nodejs-plain"></i>
            <i className="devicon-express-original"></i>
            <p>RESTful APIs</p>
          </div>

          <h2>Base de données</h2>
          <div className="divSkills_container_box">
            <i className="devicon-mongodb-plain"></i>
            <i className="devicon-mongoose-original"></i>
            <p>NoSQL</p>
          </div>

          <h2>Outils</h2>
          <div className="divSkills_container_box">
            <i className="devicon-vscode-plain"></i>
            <i className="devicon-git-plain"></i>
            <i className="devicon-github-original"></i>
            <p>GitKraken</p>
            <p>Chrome DevTools</p>
            <i className="devicon-postman-plain"></i>
            <i className="devicon-figma-plain"></i>
          </div>
          <h2>Gestion</h2>
          <div className="divSkills_container_box">
            <p>Gestion de Projet</p>
            <p>Optimisation</p>
            <p>Debug</p>
          </div>
        </div>
      </div>
    </section>
  );
}
