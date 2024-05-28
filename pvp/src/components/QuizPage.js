import React, { useState, useEffect } from 'react';
import '../styles/QuizPage.css';

const questions = [
  { question: "Ar pastebite nelygumą pečių aukštyje žiūrėdami į veidrodį?", score: 10 },
  { question: "Ar matote akivaizdų išlinkimą nugaros srityje pasilenkus?", score: 20 },
  { question: "Ar jaučiate nugaros skausmą, ypač vienoje kūno pusėje?", score: 15 },
  { question: "Ar jūsų drabužiai dėvisi nevienodai vienoje kūno pusėje lyginant su kita?", score: 5 },
  { question: "Ar pastebėjote, kad vienas klubas atrodo aukštesnis nei kitas?", score: 10 },
  { question: "Ar pastebite simetrijos trūkumą juosmens srityje?", score: 10 },
  { question: "Ar jaučiate standumą ar diskomfortą nugaroje, ypač po ilgo sėdėjimo ar stovėjimo?", score: 15 },
  { question: "Ar pastebėjote pokyčius savo laikysenoje, pvz., polinkį į vieną pusę?", score: 10 },
  { question: "Ar turite šeimos narių, kurie turi diagnozuotą skoliozę?", score: 15 },
  { question: "Ar neseniai patyrėte greitą ūgio augimą ar pastebėjote pokyčius savo kūno proporcijose?", score: 20 }
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
    return answers.reduce((acc, curr, index) => acc + (curr === 'yes' ? questions[index].score : 0), 0);
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
        <h1 className="result-title">Rezultatas:</h1>
        <p className="result-score">Taškai: {score}</p>
        {score <= 45 && (
          <p className="result-text">Norėdami geriau prižiūrėti savo nugarą, apsvarstykite galimybę išlaikyti gerą laikyseną, reguliariai mankštintis ir vengti ilgalaikio sėdėjimo ar stovėjimo.</p>
        )}
        {score > 45 && score <= 90 && (
          <p className="result-text">Manome, kad jums būtų naudinga išbandyti pratimus nugarai. Siūlome apsilankyti mūsų <a href="/exercises" className="result-link">mankštų puslapyje</a>.</p>
        )}
        {score > 90 && (
          <p className="result-text">Labai rekomenduojame apsilankyti <a href="https://www.motusvita.lt">Motus Vita</a> svetainėje konsultacijai su profesionaliais kineziterapeutais.</p>
        )}
      </div>
    );
  }

  return (
    <div className="quiz-page">
      <h1>Skoliozės tikrinimo klausimynas</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          {questions.map((item, index) => (
            <li key={index}>
              <div className="question">{item.question}</div>
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
