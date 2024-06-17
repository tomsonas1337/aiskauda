import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/QuizPage.css';

const questions = [
  { questionIndex: 0, score: 10 },
  { questionIndex: 1, score: 20 },
  { questionIndex: 2, score: 15 },
  { questionIndex: 3, score: 5 },
  { questionIndex: 4, score: 10 },
  { questionIndex: 5, score: 10 },
  { questionIndex: 6, score: 15 },
  { questionIndex: 7, score: 10 },
  { questionIndex: 8, score: 15 },
  { questionIndex: 9, score: 20 }
];

function QuizPage() {
  const { t } = useTranslation();
  const [answers, setAnswers] = useState(Array(10).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    const allAnswered = answers.every(answer => answer !== null);
    if (allAnswered) {
      setScore(calculateScore());
    }
  }, [answers]);

  const handleAnswer = (value) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = value;
    setAnswers(newAnswers);
  };

  const calculateScore = () => {
    return answers.reduce((acc, curr, index) => acc + (curr === 'yes' ? questions[index].score : 0), 0);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (answers.every(answer => answer !== null)) {
      setSubmitted(true);
    }
  };

  const navigateToQuestion = (index) => {
    setCurrentQuestionIndex(index);
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  if (submitted) {
    return (
      <div className="result-page">
        <h1 className="result-title">{t('result_title')}</h1>
        <p className="result-score">{t('points')}: {score}</p>
        {score <= 45 && (
          <p className="result-text">{t('recommendation_1')}</p>
        )}
        {score > 45 && score <= 90 && (
          <p className="result-text">
            {t('recommendation_2')}
            <a href="/exercises" className="result-link">{t('recommendation_2_link')}</a>.
          </p>
        )}
        {score > 90 && (
          <p className="result-text">
            {t('recommendation_3')}
            <a href="https://www.motusvita.lt" className="result-link">{t('recommendation_3_link')}</a>
            {t('consultation_page')}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="quiz-page">
      <h1>{t('quiz_title')}</h1>
      <form onSubmit={handleSubmit}>
        <div className="question-navigation">
          {questions.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`nav-button ${currentQuestionIndex === index ? 'active' : ''} ${answers[index] !== null ? 'answered' : 'unanswered'}`}
              onClick={() => navigateToQuestion(index)}
              style={currentQuestionIndex === index ? { backgroundColor: 'orange' } : {}}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <div className="question-container">
          <div className="question">{t(`questions.${questions[currentQuestionIndex].questionIndex}`)}</div>
          <div className="button-group">
            <button
              type="button"
              className={`answer-button ${answers[currentQuestionIndex] === 'yes' ? 'selected' : ''}`}
              onClick={() => handleAnswer('yes')}
            >
              {t('yes')}
            </button>
            <button
              type="button"
              className={`answer-button ${answers[currentQuestionIndex] === 'no' ? 'selected' : ''}`}
              onClick={() => handleAnswer('no')}
            >
              {t('no')}
            </button>
          </div>
        </div>
        <div className="navigation-buttons">
          <button
            type="button"
            onClick={goToPreviousQuestion}
            disabled={currentQuestionIndex === 0}
            className="answer-button"
          >
            {t('previous')}
          </button>
          <button
            type="button"
            onClick={goToNextQuestion}
            disabled={currentQuestionIndex === questions.length - 1}
            className="answer-button"
          >
            {t('next')}
          </button>
        </div>
        <div className="submit-button-container">
          <button
            type="submit"
            disabled={answers.some(answer => answer === null)}
            className="submit-button"
          >
            {t('submit_answers')}
          </button>
        </div>
      </form>
    </div>
  );
}

export default QuizPage;
