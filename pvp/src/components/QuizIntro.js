import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/QuizIntro.css';
import spine from '../assets/spine.png'; // Adjust the path based on where your image is within the src directory

function QuizIntro() {
  const { t } = useTranslation();

  return (
    <div className="quiz-intro">
      <div className="quiz-intro-header">
        <h1>{t('intro_header')}</h1>
        <h2>{t('intro_subheader')}</h2>
      </div>
      <div className="quiz-intro-content">
        <p>{t('intro_paragraph')}</p>
      </div>
      <div className="quiz-intro-footer">
        <div className="quiz-intro-image">
          <img src={spine} alt="Spine X-ray" />
        </div>
      </div>
      <Link to="/quiz">
          <button className="start-button">{t('start_test')}</button>
      </Link>
    </div>
  );
}

export default QuizIntro;
