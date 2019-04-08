import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <section className="nav_menu">
      <Link to='/'><p>Home</p></Link>
      <Link to='work'><p>Work</p></Link>
      <Link to='contact'><p>Contact</p></Link>          
    </section>
  )
}

export const Navbar;