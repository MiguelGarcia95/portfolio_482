import React from 'react';

const ContactInput = ({name, label, onFormChange, value, type, error}) => {
  if (type === 'textarea') {
    return (
      <section className={`contact_form_section form_textarea ${error ? 'form_error' : ''}`}>
        <label htmlFor={name}>{label}</label>
        <textarea name={name} onChange={onFormChange} value={value}></textarea>
        {error && <small>{error}</small>}
      </section>
    )
  } else {
    return (
      <section className={`contact_form_section ${error ? 'form_error' : ''}`}>
        <label htmlFor={name}>{label}</label>
        <input type={type} name={name} onChange={onFormChange} value={value} />
        {error && <small>{error}</small>}
      </section>
    )
  }
}

export default ContactInput;