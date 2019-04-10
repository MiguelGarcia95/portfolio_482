import React from 'react';

const ContactInput = ({name, label, onFormChange, value, type}) => {
  return (
    <section className="contact_form_section">
      <label htmlFor="subject">Subject</label>
      <input type={type} name={name} onChange={onFormChange} value={value} />
    </section>
  )
}

export default ContactInput;