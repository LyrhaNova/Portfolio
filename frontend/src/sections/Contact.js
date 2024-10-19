import '../styles/layout/_contact.scss';
import FormContact from '../components/FormContact.jsx';
import { Typewriter } from 'react-simple-typewriter';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <div className="backText">
          <Typewriter
            words={['Wanna talk ?']}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={70}
            delaySpeed={3000}
          />
        </div>
        <FormContact />
      </div>
    </section>
  );
}
