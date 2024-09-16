import React, { useState } from 'react';
import './index.scss'; 

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [successMessage, setSuccessMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTimeout(() => {
      setIsSubmitted(true); 
      setSuccessMessage('Thank you! Your message has been received. I will get back to you as soon as possible.');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setIsSubmitted(false);
        setSuccessMessage(''); 
      }, 5000);
    }, 1000); 
  };

  return (
    <div className="contact-page">
      <h1>Contact Me</h1>
      <p>Feel free to reach out through the form below:</p>

      {isSubmitted && (
        <div className="success-message">
          {successMessage}
        </div>
      )}

      {!isSubmitted && (
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Send Message</button>
        </form>
      )}

      <div className="clouds">
      <img src="cloud.png" alt="cloud" className="cloud cloud-1" />
            <img src="cloud.png" alt="cloud" className="cloud cloud-2" />
            <img src="cloud.png" alt="cloud" className="cloud cloud-3" />
            <img src="cloud.png" alt="cloud" className="cloud cloud-4" />
            <img src="cloud.png" alt="cloud" className="cloud cloud-5" />
            <img src="cloud.png" alt="cloud" className="cloud cloud-6" />
            <img src="cloud.png" alt="cloud" className="cloud cloud-7" />
        </div>
    </div>
  );
};

export default Contact;
