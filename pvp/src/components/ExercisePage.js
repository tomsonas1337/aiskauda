import React from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n';

const ExercisePage = () => {
  const { t } = useTranslation();

  const exercises = [
    {
      title: t('exercise1'),
      videoId: 'Xc1TuZ_14lQ'
    },
    {
      title: t('exercise2'),
      videoId: 'k9wph_-iKys'
    },
    {
      title: t('exercise3'),
      videoId: 'jskwpSRXTrA'
    }
  ];

  return (
    <div>
      <h1>{t('exercises')}</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {exercises.map((exercise, index) => (
          <div key={index} style={{ flex: '1 1 30%', padding: '16px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h2>{exercise.title}</h2>
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${exercise.videoId}`}
              title={exercise.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExercisePage;