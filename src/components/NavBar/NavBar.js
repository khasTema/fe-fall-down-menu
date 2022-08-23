import React from 'react';
import { ReactComponent as MainLogo } from '../../images/logo.svg';
import { ReactComponent as MenuBurger } from '../../images/icon-menu.svg';

export default function NavBar() {
  return (
    <nav className='navigation'>
        <a href='/' className="logo">
            <MainLogo/>
        </a>
        <a href="/" className="mob__menu">
            <MenuBurger/>
        </a>
    </nav>
  )
}
