import React from 'react';
import i18n from '../i18n'; // Adjust the path if necessary

function LanguageSwitcher() {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('lt')}>Lietuvių</button>
    </div>
  );
}

export default LanguageSwitcher;