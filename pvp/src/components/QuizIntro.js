import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/QuizIntro.css';
import spine from '../assets/spine.png'; // Adjust the path based on where your image is within the src directory

function QuizIntro() {
  return (
    <div className="quiz-intro">
      <div className="quiz-intro-header">
        <h1>Ar turiu skoliozę?</h1>
        <h2>Atlikite testą!</h2>
      </div>
      <div className="quiz-intro-content">
        <p>
          Šiame teste matysite gydytojų specialistų užduodamus klausimus konsultacijose.
          Jums atlikus testą ir užpildžius visus klausimus, bus rodomi rezultatai apie Jūsų GALIMĄ diagnozę.
          Galėsite rinktis registraciją pas pasirinktą gydytoją specialistą bei pasirinkti norimas mankštas.
        </p>
      </div>
      <div className="quiz-intro-footer">
        <div className="quiz-intro-image">
          <img src={spine} alt="Spine X-ray" />
        </div>
      </div>
      <Link to="/quiz">
          <button className="start-button">Pradėti</button>
      </Link>
    </div>
  );
}

export default QuizIntro;
