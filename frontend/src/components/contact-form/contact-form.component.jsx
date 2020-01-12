import React, { useState } from 'react';

import Button from '../button/button.component';

import './contact-form.styles.scss';

const ContactForm = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const { name, email, subject, message } = state;

  const handleChange = event => {
    const {name, value} = event.target;
    event.preventDefault();
    setState({
      ...state, [name] : value
    });
  };

  const handleMessageChange = event => {
    const {value} = event.target;
    event.preventDefault();
    setState({
      ...state, message: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
  };

  return (
  <div className='contact-form'>
    <div className='form-header'>
      <h4>SEND US MESSAGE!</h4>
      <p>Let's discuss and decide what kind of solutions that we can give in order to maximize your organization performance.</p>
    </div>
    <form onSubmit={handleSubmit} className='form-input'>
      <input onChange={handleChange} type='text' placeholder='Your Name' name='name' value={name} />
      <input onChange={handleChange} type='email' placeholder='Your Email' name='email' value={email} />
      <input onChange={handleChange} type='text' placeholder='Subject' name='subject' value={subject} />
      <textarea onChange={handleMessageChange} rows='6' placeholder='Message' value={message} />
      <Button color='btn-dark-blue'>Send Message</Button>
    </form>
  </div>
)};

export default ContactForm;
