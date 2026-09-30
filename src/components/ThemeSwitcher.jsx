import { useState } from 'react';
import { translations } from '../translations.js';

const ThemeSwitcher = ({ language }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    const nextValue = !isDarkTheme;
    setIsDarkTheme(nextValue);
    document.body.classList.toggle('dark-theme', nextValue);
  };

  return (
    <button type="button" onClick={toggleTheme} className="theme-switcher">
      {isDarkTheme ? translations[language].lightMode : translations[language].darkMode}
    </button>
  );
};

export default ThemeSwitcher;