import React from 'react';
import { ReactComponent as MainLogo } from '../../images/logo.svg';
import { ReactComponent as MenuBurger } from '../../images/icon-menu.svg';
import NavMenu from '../NavMenu/NavMenu';

export default function NavBar() {
  return (
    <nav className='navigation'>
        <a href='/' className="logo">
            <MainLogo/>
        </a>
        <NavMenu/>
        <a href="/" className="mob__menu">
            <MenuBurger/>
        </a>
    </nav>
  )
}
