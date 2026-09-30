import { translations } from '../translations.js';

const Skills = ({ language }) => {
  const skills = translations[language].skills.items;

  return (
    <section id="skills" className="section-block">
      <div className="container">
        <h2 className="section-title">{translations[language].skills.title}</h2>
        <ul className="skill-list">
          {skills.map((skill) => (
            <li key={skill} className="skill-item">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;