import React from 'react'
import './NavBar.css';
import logo from './logo.gif';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='nav'>
            <li><Link to={'/'}><img src={logo} alt='logo' className='nav-logo'/></Link></li>
            <ul className='nav-menu'>
                <li><NavLink to={'/'} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Sucursales</NavLink></li>
                <li><NavLink to={'/foods'} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Comidas</NavLink></li>
            </ul>
        </div>
  )
}

export default NavBar