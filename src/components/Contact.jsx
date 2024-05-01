import React, { useState } from 'react';
import axios from 'axios';
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://formspree.io/f/xyyrlewy', { name, email, message });
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div id='contact' className="form-container">
      <h2>Let's Work Together</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button type="submit">Send</button>
      </form>
      <p className="form-status">{status === 'success' ? 'Message sent successfully!' : status === 'error' && 'Oops! Something went wrong. Please try again later.'}</p>
    </div>
  );
};


export default Contact;
