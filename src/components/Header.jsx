import { translations } from '../translations.js';

const Header = ({ language }) => {
  const navItems = [
    { href: '#home', label: translations[language].nav.home },
    { href: '#projects', label: translations[language].nav.projects },
    { href: '#skills', label: translations[language].nav.skills },
    { href: '#contact', label: translations[language].nav.contact },
  ];

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#home" className="brand">
          Nodira
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;