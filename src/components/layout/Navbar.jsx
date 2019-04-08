import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import './css/Navbar.css';

const Navbar = () => {
  return (
    <section className="nav_menu">
      <NavLink activeClassName="active" exact to='/' className='noselect' ><p>Home</p></NavLink>
      <NavLink activeClassName="active" to='/work' className='noselect' ><p>Work</p></NavLink>
      <NavLink activeClassName="active" to='/contact' className='noselect' ><p>Contact</p></NavLink>          
    </section>
  )
}

export default Navbar;