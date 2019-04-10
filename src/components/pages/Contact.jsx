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
    attachment: null
  }

  componentDidMount() {
    emailjs.init(EMAILJSUSER);
    setInterval(() => {
      loadContent('.contact_content', '605px');
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
      subject: ''
    })
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
    return errors.length > 0 ? false : true;
  }

  sendMessage = () => {
    if (this.validateForm()) {
      let emailParams  = {
        from_name: `${this.state.name} (${this.state.email})`,
        to_name: 'mgarcia95951@gmail.com',
        subject: this.state.subject,
        message_html: this.state.message
      }
  
      emailjs.send('sendgrid', 'template_Q7oo4Aah', emailParams, EMAILJSUSER).then(response => {
        console.log('message send ', response.status, response.text)
      }, err => {
        console.log(err);
      })
  
      this.clearForm();
    }
  }

  render() {
    const {name, email, subject, message} = this.state;
    return (
      <ContactPageElm className='app contact'>
        <Navbar />
        <section className="contact_content">
          <h1 className='contact_title'>Contact</h1>
          <section className="contact_form">
            <ContactInput name='name' label='Name' onFormChange={this.onFormChange} value={name} />
            <ContactInput name='email' label='Email' onFormChange={this.onFormChange} value={email} />
            <ContactInput name='subject' label='Subject' onFormChange={this.onFormChange} value={subject} />
            <section className="contact_form_section form_textarea">
              <label htmlFor="message">Message</label>
              <textarea name="message" onChange={this.onFormChange} value={message}></textarea>
            </section>
            <button onClick={() => this.sendMessage()}>Send</button>
          </section>
        </section>
      </ContactPageElm>
    )
  }
}

export default Contact;
