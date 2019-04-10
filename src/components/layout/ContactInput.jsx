import React from 'react';

const ContactInput = ({name, label, onFormChange, value, type}) => {
  if (type === 'textarea') {
    return (
      <section className="contact_form_section form_textarea">
        <label htmlFor={name}>{label}</label>
        <textarea name={name} onChange={onFormChange} value={value}></textarea>
      </section>
    )
  } else {
    return (
      <section className="contact_form_section">
        <label htmlFor={name}>{label}</label>
        <input type={type} name={name} onChange={onFormChange} value={value} />
      </section>
    )
  }
}

export default ContactInput;