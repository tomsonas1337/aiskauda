import React, { useState, useEffect } from 'react';
import '../styles/QuizPage.css';

const questions = [
  "Ar pastebite nelygumą pečių aukštyje žiūrėdami į veidrodį?",
  "Ar matote akivaizdų išlinkimą nugaros srityje pasilenkus?",
  "Ar jaučiate nugaros skausmą, ypač vienoje kūno pusėje?",
  "Ar jūsų drabužiai dėvisi nevienodai vienoje kūno pusėje lyginant su kita?",
  "Ar pastebėjote, kad vienas klubas atrodo aukštesnis nei kitas?",
  "Ar pastebite simetrijos trūkumą juosmens srityje?",
  "Ar jaučiate standumą ar diskomfortą nugaroje, ypač po ilgo sėdėjimo ar stovėjimo?",
  "Ar pastebėjote pokyčius savo laikysenoje, pvz., polinkį į vieną pusę?",
  "Ar turite šeimos narių, kurie turi diagnozuotą skoliozę?",
  "Ar neseniai patyrėte greitą ūgio augimą ar pastebėjote pokyčius savo kūno proporcijose?"
];

function QuizPage() {
  const [answers, setAnswers] = useState(Array(10).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [allAnswered, setAllAnswered] = useState(false);

  useEffect(() => {
    setAllAnswered(answers.every(answer => answer !== null));
  }, [answers]);

  const handleAnswer = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const calculateScore = () => {
    return answers.reduce((acc, curr) => acc + (curr === 'yes' ? 10 : 5), 0);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (allAnswered) {
      setScore(calculateScore());
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="result-page">
        <h1>Rezultatas:</h1>
        <p>Dainoros kvailumas: {score}%</p>
      </div>
    );
  }

  return (
    <div className="quiz-page">
      <h1>Skoliozės tikrinimo klausimynas</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          {questions.map((question, index) => (
            <li key={index}>
              <div className="question">{question}</div>
              <div className="button-group">
                <button
                  type="button"
                  className={`answer-button ${answers[index] === 'yes' ? 'selected' : ''}`}
                  onClick={() => handleAnswer(index, 'yes')}
                >
                  Taip
                </button>
                <button
                  type="button"
                  className={`answer-button ${answers[index] === 'no' ? 'selected' : ''}`}
                  onClick={() => handleAnswer(index, 'no')}
                >
                  Ne
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="submit-button-container">
          <button
            type="submit"
            disabled={!allAnswered}
            className="submit-button"
          >
            Pateikti atsakymus
          </button>
        </div>
      </form>
    </div>
  );
}

export default QuizPage;
