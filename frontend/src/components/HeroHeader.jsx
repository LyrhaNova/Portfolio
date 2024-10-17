import Image from 'next/image';
import '../styles/layout/_heroHeader.scss';

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
      <div className='heroHeader_logo'>
        <Image 
          src="/assets/logo_poupou.webp" 
          alt="Logo" 
          width={750} 
          height={750}
          className="png-logo" 
          priority
        />
      </div>
    </div>
  );
}


