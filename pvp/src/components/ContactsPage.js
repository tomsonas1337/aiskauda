import React from 'react';
import '../styles/ContactsPage.css'; // Ensure the CSS file path is correct

function ContactsPage() {
  return (
    <div className="contacts-page">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <h2>Our Office</h2>
        <p>1234 Health St., Wellness City, HC 12345</p>
        <h2>Email</h2>
        <p>info@healthcare.com</p>
        <h2>Phone</h2>
        <p>(123) 456-7890</p>
      </div>
      <form className="contact-form">
        <h2>Send Us a Message</h2>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Message:
          <textarea name="message" required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactsPage;
