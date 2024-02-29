import SocialLinks from "./SocialLinks";
import PageLinks from "./PageLinks";
import Copyright from "./Copyright";

export const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks className="footer-links" />
      <SocialLinks className="footer-icons" />
      <Copyright />
    </footer>
  );
};

export default Footer;
