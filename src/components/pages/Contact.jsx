import React from 'react';
import {Link} from 'react-router-dom';
import styled, { keyframes } from "styled-components";

import {EMAILJSUSER} from '../../apiKeys';
import {Page} from '../../utils/styledClasses';
import {slideInRight, slideOutRight} from '../../utils/styledTransitions';
import Navbar from '../layout/Navbar';
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
    attachment: null
  }

  componentDidMount() {
    emailjs.init("user_8o2vUClVi4MeQTPwf50P6");
    setInterval(() => {
      this.loadContent();
    }, 500);
  }

  compoenntWillUnmount() {
    setInterval(() => {
      this.unloadContent();
    }, 500);
  }

  loadContent = () => {
    const contactContent = document.querySelector('.contact_content');
    if (contactContent) {
      contactContent.style.height = '600px';
    }
  }

  unloadContent = () => {
    const contactContent = document.querySelector('.contact_content');
    if (contactContent) {
      contactContent.style.height = '0px';
    }
  }

  onFormChange = e => this.setState({[e.target.name]: e.target.value});

  sendMessage = () => {
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

    this.setState({
      name: '',
      email: '',
      message: '',
      subject: ''
    })
  }

  render() {
    const {name, email, subject, message} = this.state;
    return (
      <ContactPageElm className='app contact'>
        <Navbar />
        <section className="contact_content">
          <h1 className='contact_title'>Contact</h1>
          <section className="contact_form">
            <section className="contact_form_section">
              <label htmlFor="name">Name</label>
              <input type="text" name='name' onChange={this.onFormChange} value={name} />
            </section>
            <section className="contact_form_section">
              <label htmlFor="email">Email</label>
              <input type="email" name='email' onChange={this.onFormChange} value={email} />
            </section>
            <section className="contact_form_section">
              <label htmlFor="subject">Subject</label>
              <input type="text" name='subject' onChange={this.onFormChange} value={subject} />
            </section>
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
