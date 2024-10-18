import '../styles/layout/_about.scss';
import '../styles/main.scss';
import { Typewriter } from 'react-simple-typewriter';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__content">
        <h1>À PROPOS</h1>
        <div className="about__back-text">
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
          Lorem ipsum dolor sit amet. Id enim quod et officia molestiae est
          consequatur maiores nam animi voluptatum sit tempora internos eos
          ducimus officia! Ea galisum vitae 33 porro nostrum id mollitia
          nesciunt eos maiores ullam ut saepe tenetur qui beatae rerum. Eos sunt
          quia ut placeat ducimus ut facilis fuga et ipsam numquam eos aperiam
          minus ut consequuntur alias. Aut amet voluptatem ea aperiam neque et
          totam nemo. Nam dolor fugiat aut commodi dicta qui aliquid
          necessitatibus in corrupti necessitatibus quo sunt repellendus. Non
          deleniti omnis At facilis eaque ut harum reiciendis et commodi
          molestiae. Aut suscipit velit ut enim voluptatem in voluptas magnam
          est voluptatem modi sed beatae rerum. Et temporibus odio et
          exercitationem odio ut mollitia consequatur id consequatur alias est
          minus nisi.
        </p>
      </div>
    </section>
  );
}
