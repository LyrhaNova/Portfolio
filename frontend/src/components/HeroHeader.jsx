import '../styles/layout/_heroHeader.scss';

export default function HeroHeader() {
  return (
<div className='heroHeader'>
  <img src="/assets/heroHeader_bg.webp" alt="Hero Header background" />
  <div className='heroHeader_logo'>
    <img src="/assets/logo_poupou.webp" alt="Logo" className="png-logo" />
  </div>
</div>
  );
}


