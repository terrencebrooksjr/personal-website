import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const emailData = {
      to: email,
      subject: subject,
      text: message,
    };

    try {
      const response = await axios.post('http://localhost:8080/api/send-email', emailData);
      setSuccess('Email sent successfully!');
      setError(null);
    } catch (error) {
      setError('Failed to send email.');
      setSuccess(null);
    }
  };

  return (
    <div>
      <h1>Contact Me</h1>
      <p>Get in touch with me through this page.</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Subject:</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Send Email</button>
      </form>
      {success && <p>{success}</p>}
      {error && <p>{error}</p>}
      <a href="https://www.linkedin.com/in/terrencebrooksjr" target="_blank" rel="noopener noreferrer">Visit my LinkedIn</a>
    </div>
  );
}

export default Contact;
