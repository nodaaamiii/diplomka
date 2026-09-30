import ProjectCard from './ProjectCard.jsx';
import { translations } from '../translations.js';

const projectImages = [
  'https://mobirise.com/extensions/shopamp/assets/images/hannah-morgan-39891-unsplash-696x464.jpg', // Clothing Store
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReIchGJiP-K6YFX4rbbKxHTkI5b--XL7JZPB-QWiRd_LK2-7zQLp6octY&s=10', // Porsche
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuPStXzwSU_Xm_dHqrNppKuBJxtf0JB5HPcjSil5tfMA&s', // Stylora
];

const Projects = ({ language }) => {
  return (
    <section id="projects" className="section-block">
      <div className="container">
        <h2 className="section-title">{translations[language].projects.title}</h2>

        <div className="projects-grid">
          
          <a
            key="clothing-store"
            href="https://nodaaamiii.github.io/Clothing/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProjectCard
              title="Clothing Store"
              image={projectImages[0]}
              description="An online store offering modern and stylish clothing."
            />
          </a>


          <a
            key="porsche"
            href="https://nodaaamiii.github.io/porsche/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProjectCard
              title="Porsche"
              image={projectImages[1]}
                           description="A sleek website showcasing the beauty of Porsche."
            />
          </a>

          <a
            key="stylora"
            href="https://stylora.uz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProjectCard
              title="Stylora"
              image={projectImages[2]}
              description="Also I'm a main frontend developer of Stylora."
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;