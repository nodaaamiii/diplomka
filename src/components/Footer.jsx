import { translations } from '../translations.js';

const Footer = ({ language }) => {
  const content = translations[language];

  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>
          © {new Date().getFullYear()} Nodira Djalilova. {content.footer.rights}
        </p>

        <div className="social-links">
          <a href="https://github.com/nodaaamiii" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/nodira-jalilova-5555b0438"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:njalilova@494gmail.com">{content.contact.email}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;