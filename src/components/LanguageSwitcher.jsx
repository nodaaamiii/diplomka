import { translations } from '../translations.js';

const LanguageSwitcher = ({ language, setLanguage }) => {
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="switcher-box">
      <label htmlFor="language-select">{translations[language].language}:</label>
      <select id="language-select" value={language} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="ru">Русский</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;