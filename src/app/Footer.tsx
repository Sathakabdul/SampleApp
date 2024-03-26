import React from 'react';
import LineComponent from './components/LineComponent';
import SocialIcon from './components/SocialIcon';
import Copyright from './components/Copyright';

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <div className="socialIcons">
          <SocialIcon
            href="https://www.facebook.com/"
            iconclass="fa-brands fa-facebook"
          />
          <SocialIcon
            href="https://www.instagram.com/?hl=en"
            iconclass="fa-brands fa-instagram"
          />
          <SocialIcon
            href="https://myaccount.google.com/?nlr=1"
            iconclass="fa-brands fa-google-plus"
          />
          <SocialIcon
            href="https://twitter.com/?lang=en-in"
            iconclass="fa-brands fa-twitter"
          />
          <SocialIcon
            href="https://www.youtube.com/"
            iconclass="fa-brands fa-youtube"
          />
        </div>
        <div className="footerNav">
          <ul>
            <LineComponent href="/" arealabel="Home link" linklabel="Home" />
            <LineComponent href="#" arealabel="News link" linklabel="News" />
            <LineComponent
              href="#"
              arealabel="Contact us"
              linklabel="Contact us"
            />
            <LineComponent href="#" arealabel="About link" linklabel="About" />
            <LineComponent
              href="#"
              arealabel="Our Team link"
              linklabel="Our Team"
            />
          </ul>
        </div>
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
