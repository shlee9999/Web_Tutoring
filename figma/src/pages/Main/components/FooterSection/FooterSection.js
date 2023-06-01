import FooterLogo from 'assets/Images/Logo.png';
import './index.css';
import { leftNavigationItems } from 'constants/NavigationItems';
import { rightNavigationItems } from 'constants/NavigationItems';
import Facebook from 'assets/Images/Logos/Facebook.png';
import Instagram from 'assets/Images/Logos/Instagram.png';
import Twitter from 'assets/Images/Logos/Twitter.png';
export const FooterSection = () => {
  return (
    <div className='footer_section'>
      <div className='footer_left_container'>
        <img className='footer_logo' src={FooterLogo} alt='footer_logo' />
        <p className='footer_logo_description'>
          Copyright © 2020. LogoIpsum. All rights reserved.
        </p>
        <div className='footer_subscribe_wrapper'>
          <p className='footer_subscribe_typo'>
            Subscribe to our <br />
            newsletter
          </p>
          <div className='footer_email_input_wrapper'>
            <input
              className='footer_email_input'
              placeholder='Email address'
            ></input>
            <button className='footer_submit_button'>&gt;</button>
          </div>
        </div>
      </div>
      <div className='footer_center_container'>
        <div className='footer_navigation_container'>
          <p className='footer_navigation_title'>Services</p>
          {leftNavigationItems.map((item) => (
            <p className='footer_navigation_items'>{item}</p>
          ))}
        </div>
        <div className='footer_navigation_container'>
          <p className='footer_navigation_title'>About</p>
          {rightNavigationItems.map((item) => (
            <p className='footer_navigation_items'>{item}</p>
          ))}
          <p className='footer_navigation_items'></p>
        </div>
      </div>
      <div className='footer_navigation_icons_container'>
        <p>왜 이미지들이 안 나오는지 모르겠습니다</p>
        <img
          src={Facebook}
          className='footer_navigation_icons'
          alt='facebook'
        />
        <img className='footer_navigation_icons' alt='twitter' src={Twitter} />
        <img
          src={Instagram}
          className='footer_navigation_icons'
          alt='instagram'
        />
      </div>
    </div>
  );
};
