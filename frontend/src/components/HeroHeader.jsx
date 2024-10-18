import Image from 'next/image';
import '../styles/layout/_heroHeader.scss';
import { Typewriter } from 'react-simple-typewriter';

export default function HeroHeader() {
  return (
    <div className='heroHeader'>
      <div className="heroHeader_bg">
        <Image 
          src="/assets/heroHeader_bg.webp" 
          alt="Hero Header background"
          fill
          quality={100}
          sizes="100vw"
          priority
        />
      </div>
      <div className='heroHeader__logo'>
        <Image 
          src="/assets/logo_poupou.webp" 
          alt="Logo" 
          width={500} 
          height={500}
          className="png-logo" 
          priority
          sizes="(max-width: 480px) 40vw, (max-width: 1024px) 30vw, (max-width: 1200px) 20vw, 15vw" 
        />
      </div>
      <div className="heroHeader__text">
        <h1 className="heroHeader__text__name">CÉLINE BOUHAFS</h1>
        <div>
          <Typewriter
            words={['Développeuse Web']}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={70}
            delaySpeed={3000}
          />
        </div>
      </div>
    </div>
  );
}


