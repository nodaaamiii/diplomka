import { translations } from '../translations.js';

const Hero = ({ language }) => {
  const content = translations[language].hero;

  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">{content.eyebrow}</p>
          <h1>{content.title}</h1>
          <p>{content.description}</p>

          <div className="hero-actions">
            <a href="#projects" className="primary-btn">
              {content.primaryButton}
            </a>
            <a href="#contact" className="secondary-btn">
              {content.secondaryButton}
            </a>
          </div>
        </div>

        <div className="hero-panel">
          <div className="stat-card">
            <strong>24/7</strong>
            <span>Creative mindset</span>
          </div>
          <div className="stat-card">
            <strong>12+</strong>
            <span>{content.stats.projects}</span>
          </div>
          <div className="stat-card">
            <strong>100%</strong>
            <span>{content.stats.usability}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;