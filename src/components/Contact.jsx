import { translations } from '../translations.js';

const Contact = ({ language }) => {
  const content = translations[language].contact;

  return (
    <section id="contact" className="section-block contact-section">
      <div className="container">
        <h2 className="section-title">{content.title}</h2>

        <p className="contact-copy">{content.description}</p>

        <ul className="contact-list">
          <li>
            {content.email}: <a href="mailto:njalilova@494gmail.com">njalilova@494gmail.com</a>
          </li>
          <li>
            {content.phone}: <a href="tel:+998993408089">+998 99 340 80 89</a>
          </li>
          <li>
            {content.linkedin}:{' '}
            <a
              href="https://www.linkedin.com/in/nodira-jalilova-5555b0438"
              target="_blank"
              rel="noreferrer"
            >
              nodira-Djalilova
            </a>
          </li>
          <li>
            {content.github}:{' '}
            <a href="https://github.com/nodaaamiii" target="_blank" rel="noreferrer">
              nodaaamiii
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;