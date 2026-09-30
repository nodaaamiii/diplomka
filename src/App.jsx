import { useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import LanguageSwitcher from './components/LanguageSwitcher.jsx';
import ThemeSwitcher from './components/ThemeSwitcher.jsx';
import './styles/global.css';

const App = () => {
  const [language, setLanguage] = useState('en');

  return (
    <div className="app-shell">
      <Header language={language} />

      <div className="top-actions container">
        <LanguageSwitcher language={language} setLanguage={setLanguage} />
        <ThemeSwitcher language={language} />
      </div>

      <main>
        <Hero language={language} />
        <Projects language={language} />
        <Skills language={language} />
        <Contact language={language} />
      </main>

      <Footer language={language} />
    </div>
  );
};

export default App;