import React from 'react';
import {Link} from 'react-router-dom';
import './css/Navbar.css';

const Navbar = () => {
  return (
    <section className="nav_menu">
      <Link to='/' className='noselect' ><p>Home</p></Link>
      <Link to='/work' className='noselect' ><p>Work</p></Link>
      <Link to='/contact' className='noselect' ><p>Contact</p></Link>          
    </section>
  )
}

export default Navbar;