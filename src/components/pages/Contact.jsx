import React from 'react';
// import styled, { keyframes } from "styled-components";
import styled from "styled-components";

import {EMAILJSUSER} from '../../apiKeys';
import {Page} from '../../utils/styledClasses';
import {loadContent, unloadContent} from '../../utils/functions';
import {slideInRight, slideOutRight} from '../../utils/styledTransitions';
import Navbar from '../layout/Navbar';
import ContactInput from '../layout/ContactInput';
import './css/Contact.css';

const emailjs = window.emailjs;

const ContactPageElm = styled(Page)`
  &.page-enter {
    animation: ${slideInRight} 0.5s ease forwards;
  }
  &.page-exit {
    animation: ${slideOutRight} 0.5s ease forwards;
  }
`;

class Contact extends React.Component {
  state = {
    name: '',
    email: '',
    message: '',
    subject: '',
    errors: [],
    messageSent: '',
    attachment: null
  }

  componentDidMount() {
    emailjs.init(EMAILJSUSER);
    setInterval(() => {
      loadContent('.contact_content', '620px');
    }, 500);
  }

  compoenntWillUnmount() {
    setInterval(() => {
      unloadContent('.contact_content');
    }, 500);
  }

  onFormChange = e => this.setState({[e.target.name]: e.target.value});

  clearForm = () => {
    this.setState({
      name: '',
      email: '',
      message: '',
      subject: '',
      errors: []
    });

    setInterval(() => {
      this.setState({messageSent: ''});
    }, 5000);
  }

  validateForm = () => {
    let errors = [];
    if (!this.state.email) {
      errors.push({name: 'email', message: 'Enter an Email'})
    }
    if (!this.state.name) {
      errors.push({name: 'name', message: 'Enter A Name'})
    }
    if (!this.state.subject) {
      errors.push({name: 'subject', message: 'Enter a Subject'})
    }
    if (!this.state.message) {
      errors.push({name: 'message', message: 'Enter a Message'})
    }
    this.setState({errors: errors});
    return errors.length > 0 ? false : true;
  }

  sendMessage = () => {
    if (this.validateForm()) {
      let senderName = this.state.name;

      let emailParams  = {
        from_name: `${this.state.name} (${this.state.email})`,
        to_name: 'mgarcia95951@gmail.com',
        subject: this.state.subject,
        message_html: this.state.message
      }
  
      emailjs.send('sendgrid', 'template_Q7oo4Aah', emailParams, EMAILJSUSER).then(() => {
        this.setState({messageSent: `Message sent by ${senderName}`});
      });
  
      this.clearForm();
    }
  }

  fetchError = (errors, name) => {
    return errors.reduce((selectedError, error) => {
      if (error.name === name) {
        selectedError = error.message
      }
      return selectedError;
    }, null);
  }

  render() {
    const {name, email, subject, message, errors, messageSent} = this.state;
    return (
      <ContactPageElm className='app contact'>
        <Navbar />
        <section className="contact_content">
          {messageSent && <h2 className='contact_notice'>{messageSent}</h2>}

          <h1 className='contact_title'>Contact</h1>

          <section className="contact_form">
            <ContactInput 
              name='name' label='Name' value={name} type='text'
              onFormChange={this.onFormChange} error={this.fetchError(errors, 'name')} 
            />
            <ContactInput 
              name='email' label='Email' value={email} type='email' 
              onFormChange={this.onFormChange} error={this.fetchError(errors, 'email')} 
            />
            <ContactInput 
              name='subject' label='Subject' value={subject} type='text'
              onFormChange={this.onFormChange} error={this.fetchError(errors, 'subject')} 
            />
            <ContactInput 
              name='message' label='Message' value={message} type='textarea'
              onFormChange={this.onFormChange} error={this.fetchError(errors, 'message')} 
            />
            <button onClick={() => this.sendMessage()}>Send</button>
          </section>
        </section>
      </ContactPageElm>
    )
  }
}

export default Contact;
