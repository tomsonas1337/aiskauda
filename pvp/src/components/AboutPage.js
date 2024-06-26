import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/AboutPage.css'; // Ensure this CSS file is created and styled
import aiskauda from '../assets/aiskauda.png'; // Adjust the path based on where your image is within the src directory

function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="about-page">
      <h1>{t('about_page_title')}</h1>
      <div className="team-description">
        <img src={aiskauda} alt="Team" className="team-image" />
        <p>{t('about_page_description')}</p>
      </div>
    </div>
  );
}

export default AboutPage;
