import './index.css';
import HeaderImage from './Images/Header.png';
import Mask from './Images/Mask.png';
import HeaderLogo from './Images/HeaderLogo.png';
import Hamburger from './Images/Hamburger.png';
import Facebook from './Images/HeaderItems/Facebook.png';
import Instagram from './Images/HeaderItems/Instagram.png';
import Twitter from './Images/HeaderItems/Twitter.png';
import In from './Images/HeaderItems/in.png';
export const HeaderSection = () => {
  return (
    <div className='header_section'>
      <header>
        <div className='header_items_wrapper'>
          <img
            src={Facebook}
            className='header_items_facebook'
            alt='facebook'
          />
          <img src={Twitter} className='header_items_twitter' alt='twitter' />
          <img src={In} className='header_items_in' alt='in' />
          <img
            src={Instagram}
            className='header_items_instagram'
            alt='instagram'
          />
        </div>
      </header>
      <img
        className='header_section_logo'
        src={HeaderLogo}
        alt='header_section_logo'
      />
      <img
        className='header_section_hamburger'
        src={Hamburger}
        alt='hamburger'
      />
      <img
        src={HeaderImage}
        alt='header_section_image'
        className='header_section_background_image'
      />
      <img src={Mask} className='header_section_mask' alt='header_mask' />
      <div className='header_section_text'>
        <div className='header_section_text_big'>
          The digital revolution is far more significant
        </div>
        <div className='header_section_text_small'>
          than the invention of writing or even of printing. – Douglas
          Engelbart, inventor of the graphical interface and the mouse
        </div>
      </div>
    </div>
  );
};