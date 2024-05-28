import React from 'react';
import '../styles/ContactsPage.css'; // Ensure the CSS file path is correct

function ContactsPage() {
  return (
    <div className="contacts-page">
      <h1>Susisiekite su mumis</h1>
      <div className="contact-info">
        <h2>Mūsų biuras</h2>
        <p>A. Mickevičiaus g. 37, Kaunas, 44244 Kauno m. sav. 110a-110b kab.</p>
      </div>
      <form className="contact-form">
        <h2>Parašykite mums žinutę</h2>
        <label>
          Vardas:
          <input type="text" name="name" required />
        </label>
        <label>
          El. paštas:
          <input type="email" name="email" required />
        </label>
        <label>
          Žinutė:
          <textarea name="message" required />
        </label>
        <button type="submit">Siųsti</button>
      </form>
    </div>
  );
}

export default ContactsPage;
