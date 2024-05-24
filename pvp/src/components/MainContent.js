import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MainContent.css';
import guy from '../assets/guy.png'; // Adjust the path based on where your image is within the src directory
import checkmark from '../assets/checkmark.png'; // Adjust the path based on where your image is within the src directory
import doc from '../assets/doc.png'; // Adjust the path based on where your image is within the src directory
function MainContent() {
  return (
    <div className="main-content">
      <div className="content-container">
        <div className="text-and-list">
          <h1>Nenumokite rankos į nugaros skausmus. Atlikite testą.</h1>
          <ul>
            <li>
              <img src={checkmark} alt="Checkmark" />
              Patikima informacija
            </li>
            <li>
              <img src={checkmark} alt="Checkmark" />
              Efektyvūs sprendimai
            </li>
            <li>
              <img src={checkmark} alt="Checkmark" />
              Kokybiškos mankštos
            </li>
          </ul>
          <Link to="/quiz-intro">
            <button>Atlikti testą</button>
          </Link>
        </div>
        <div className="image-container">
          <img src={guy} alt="Descriptive Alt Text" />
        </div>
      </div>
      <div className="services">
        <div className="service">
          <img src={doc} alt="Kineziterapeuto konsultacija" />
          <p>Kineziterapeuto konsultacija</p>
        </div>
        <div className="service">
          <img src={doc} alt="Kompleksinė kineziterapija" />
          <p>Kompleksinė kineziterapija</p>
        </div>
        <div className="service">
          <img src={doc} alt="Fizioterapija" />
          <p>Fizioterapija</p>
        </div>
        <div className="service-link">
          <Link to="/exercises">
            <p>Mankštos →</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainContent;