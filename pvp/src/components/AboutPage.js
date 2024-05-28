import React from 'react';
import '../styles/AboutPage.css'; // Ensure this CSS file is created and styled
import aiskauda from '../assets/aiskauda.png'; // Adjust the path based on where your image is within the src directory

function AboutPage() {
  return (
    <div className="about-page">
      <h1>AI, Skauda...</h1>
      <div className="team-description">
        <img src={aiskauda} alt="Team" className="team-image" />
        <p>Mes esame KTU trečiojo kurso studentai, ir ši svetainė yra mūsų produkto vystymo projektas. Mūsų tikslas - padėti žmonėms skleisdami  žinią apie skoliozę ir jos padarinius, nes jos atvejų skaičius sparčiai auga.</p>
      </div>
    </div>
  );
}

export default AboutPage;
