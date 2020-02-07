import React, { useState, useEffect } from 'react';

import Button from '../button/button.component';

import './contact-form.styles.scss';

const ContactForm = ({plan}) => {
  const [state, setState] = useState({
    name: '',
    email: '',
    subject: ''
  });

  const [message, setMessage] = useState('');

  const { name, email, subject } = state;

  const [encodedState, setEncodedState] = useState(message);
  const uaenvironment = navigator.userAgent;

  useEffect(() => {
    if (!plan[0]) {
      plan.push({name: ''});
    }

    if (plan) {
      setMessage(`${!plan[0].name ? '' : `Saya mau pesan paket ${plan[0].name}`}`);
    }
  },[plan]);

  useEffect(() => {
    setEncodedState(encodeURI(message));

    if (
      uaenvironment.match(/Android/i) ||
      uaenvironment.match(/iPhone/i) ||
      uaenvironment.match(/iPad/i)
      ) {
      setEncodedState(encodeURI(message).replace(/%0A/g, "<br>"));
    }
  },[state, message, uaenvironment]);

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
    setMessage(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let body = '/';

    if (
      uaenvironment.match(/Android/i) ||
      uaenvironment.match(/iPhone/i) ||
      uaenvironment.match(/iPad/i)
      ) {
      body = `mailto:weeber.id@gmail.com?subject=${subject}&body=${encodedState}<br><br>${name}<br>${email}`;
    } else {
      body = `mailto:weeber.id@gmail.com?subject=${subject}&body=${encodedState}%0A%0A${name}%0A${email}`;
    }

      window.location.href = body;

    setTimeout(() => {
      setState({
        name: '',
        email: '',
        subject: ''
      });
      setMessage('');
    }, 2000)
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
      <Button
        className='btn--dark-blue'
        onClick={handleSubmit}
        >
      Send Message</Button>

    </form>
  </div>
)};

export default ContactForm;
