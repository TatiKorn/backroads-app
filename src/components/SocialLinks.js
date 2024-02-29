import { socialLinks } from "../data";

const SocialLinks = ({ className }) => {
  return (
    <ul className={className}>
      {socialLinks.map((link, index) => (
        <li key={index}>
          <a
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className={className.slice(0, -1)}
          >
            <i className={link.icon}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};
export default SocialLinks;
