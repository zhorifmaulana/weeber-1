import React, { useState, useEffect } from 'react';

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

  const [encodedState, setEncodedState] = useState({
    encodedName: name,
    encodedEmail: email,
    encodedSubject: subject,
    encodedMessage: message
  });

  const { encodedName, encodedEmail, encodedSubject, encodedMessage } = encodedState;
  const uaenvironment = navigator.userAgent;

  useEffect(() => {
    setEncodedState({
      encodedEmail: encodeURI(email),
      encodedName: encodeURI(name),
      encodedSubject: encodeURI(subject),
      encodedMessage: encodeURI(message)
    });

    if (
      uaenvironment.match(/Android/i) ||
      uaenvironment.match(/iPhone/i) || 
      uaenvironment.match(/iPad/i)
      ) {
      setEncodedState({
        encodedEmail: encodeURI(email),
        encodedName: encodeURI(name),
        encodedSubject: encodeURI(subject),
        encodedMessage: encodeURI(message).replace(/%0A/g, "<br>")
      })
    }
  },[state]);

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

    let body = '/';

    if (
      uaenvironment.match(/Android/i) ||
      uaenvironment.match(/iPhone/i) ||
      uaenvironment.match(/iPad/i)
      ) {
      body = `mailto:weeber.id@gmail.com?subject=${encodedSubject}&body=${encodedMessage}<br><br>${encodedName}<br>${encodedEmail}`;
    } else {
      body = `mailto:weeber.id@gmail.com?subject=${encodedSubject}&body=${encodedMessage}%0A%0A${encodedName}%0A${encodedEmail}`;
    }

      window.location.href = body;

    setTimeout(() => {
      setState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
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
