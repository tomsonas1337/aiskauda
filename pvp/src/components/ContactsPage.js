import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/ContactsPage.css'; // Ensure the CSS file path is correct

function ContactsPage() {
  const { t } = useTranslation();

  return (
    <div className="contacts-page">
      <h1>{t('contact_us')}</h1>
      <div className="contact-info">
        <h2>{t('our_office')}</h2>
        <p>{t('office_address')}</p>
      </div>
      <form className="contact-form">
        <h2>{t('send_message')}</h2>
        <label>
          {t('name')}:
          <input type="text" name="name" required />
        </label>
        <label>
          {t('email')}:
          <input type="email" name="email" required />
        </label>
        <label>
          {t('message')}:
          <textarea name="message" required />
        </label>
        <button type="submit">{t('send')}</button>
      </form>
    </div>
  );
}

export default ContactsPage;
