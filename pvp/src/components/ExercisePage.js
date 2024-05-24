// src/components/ExercisePage.js
import React from 'react';

const ExercisePage = () => {
  const exercises = [
    {
      title: 'Mankšta 1',
      videoId: 'Xc1TuZ_14lQ' // Replace with your YouTube video ID
    },
    {
      title: 'Mankšta 2',
      videoId: 'k9wph_-iKys' // Replace with your YouTube video ID
    },
    {
      title: 'Mankšta 3',
      videoId: 'jskwpSRXTrA' // Replace with your YouTube video ID
    }
  ];

  return (
    <div>
      <h1>Exercises</h1>
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
