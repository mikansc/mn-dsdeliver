import "./styles.css";
import { ReactComponent as YoutubeIcon } from "./youtube.svg";
import { ReactComponent as LinkedInIcon } from "./linkedin.svg";
import { ReactComponent as InstagramIcon } from "./instagram.svg";

const Footer = () => {
  return (
    <footer className="main-footer">
      App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
      <div className="footer-icons">
        <a href="http://www.youtube.com/c/DevSuperior" target="_new">
          <YoutubeIcon />
        </a>
        <a href="http://www.linkedin.com/school/devsuperior" target="_new">
          <LinkedInIcon />
        </a>
        <a href="http://www.instagram.com/devsuperior.ig" target="_new">
          <InstagramIcon />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
