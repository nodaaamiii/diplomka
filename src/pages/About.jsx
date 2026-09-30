import Hero from '../components/Hero.jsx';
import Skills from '../components/Skills.jsx';
import Projects from '../components/Projects.jsx';
import Contact from '../components/Contact.jsx';

const About = () => {
  return (
    <div>
      <Hero />

      <section className="section-block">
        <div className="container">
          <h2 className="section-title">About me</h2>
          <p className="lead-text">
            I am a passionate web developer focused on building intuitive, responsive, and
            visually polished web experiences. My goal is to combine practical engineering with
            a strong understanding of user needs and modern design.
          </p>
        </div>
      </section>

      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default About;