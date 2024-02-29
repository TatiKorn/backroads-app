import { pageLinks } from "../data";

const PageLinks = ({ className }) => {
  return (
    <ul className={className}>
      {pageLinks.map((link, index) => (
        <li key={index} className="nav-link-item">
          <a href={link.href} className={className.slice(0, -1)}>
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  );
};
export default PageLinks;
