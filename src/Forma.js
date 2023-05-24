import React, { useState } from 'react';
import './Forma.css';

const ContactForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [errors, setErrors] = useState({ email: '', comment: '' });

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate email
    if (!validateEmail(email)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Invalid email address' }));
      return;
    }

    // Validate comment length
    if (comment.length < 8) {
      setErrors((prevErrors) => ({ ...prevErrors, comment: 'Comment should be at least 8 characters' }));
      return;
    }

    // Form is valid, perform submission logic
    console.log('Email:', email);
    console.log('Comment:', comment);

    // Reset form fields and errors
    setEmail('');
    setComment('');
    setErrors({ email: '', comment: '' });
  };

  const validateEmail = (email) => {
    // Simple email validation regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div>
      <button className="round-button" onClick={() => setShowForm(!showForm) }>
        
      </button>
      
      {showForm && (
        
        <div className='Forma'>
        <form onSubmit={handleSubmit} noValidate>
            
          <p>
            Email:
            </p>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          
          {errors.email && <div className="error">{errors.email}</div>}
          <br />
          <p>
            Comment:
            </p>
            <textarea
              value={comment}
              onChange={(event) => setComment(event.target.value)}
              required
            />
          
          {errors.comment && <div className="error">{errors.comment}</div>}
          <br />
          <button className='submitbtn' type="submit">Submit</button>
        </form>
        </div>
      )}
      
    </div>
  );
};

export default ContactForm;