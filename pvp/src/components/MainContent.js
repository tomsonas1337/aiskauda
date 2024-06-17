// src/components/MainContent.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/MainContent.css';
import guy from '../assets/guy.png'; // Adjust the path based on where your image is within the src directory
import checkmark from '../assets/checkmark.png'; // Adjust the path based on where your image is within the src directory
import doc from '../assets/doc.png'; // Adjust the path based on where your image is within the src directory

function MainContent() {
  const { t } = useTranslation();

  return (
    <div className="main-content">
      <div className="content-container">
        <div className="text-and-list">
          <h1>{t('main_content_header')}</h1>
          <ul>
            <li>
              <img src={checkmark} alt="Checkmark" />
              {t('reliable_information')}
            </li>
            <li>
              <img src={checkmark} alt="Checkmark" />
              {t('effective_solutions')}
            </li>
            <li>
              <img src={checkmark} alt="Checkmark" />
              {t('quality_exercises')}
            </li>
          </ul>
          <Link to="/quiz-intro">
            <button>{t('take_test_button')}</button>
          </Link>
        </div>
        <div className="image-container">
          <img src={guy} alt="Descriptive Alt Text" />
        </div>
      </div>
      <div className="services">
        <div className="service">
          <img src={doc} alt={t('physiotherapist_consultation')} />
          <p>{t('physiotherapist_consultation')}</p>
        </div>
        <div className="service">
          <img src={doc} alt={t('complex_physiotherapy')} />
          <p>{t('complex_physiotherapy')}</p>
        </div>
        <div className="service">
          <img src={doc} alt={t('physiotherapy')} />
          <p>{t('physiotherapy')}</p>
        </div>
        <div className="service-link">
          <Link to="/exercises">
            <p>{t('exercises')} →</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
