import React, { useState } from 'react';
import { ReactComponent as MainLogo } from '../../images/logo.svg';
import { ReactComponent as MenuBurger } from '../../images/icon-menu.svg';
import NavMenu from '../NavMenu/NavMenu';

export default function NavBar() {

  const [isMenuShown, setIsMenuShown] = useState(false)

  return (
    <nav className='navigation'>
        <a href='/#' className="logo">
          <MainLogo/>
        </a>
          <NavMenu 
            showMenu={isMenuShown}
            setIsMenuShown={setIsMenuShown}
          />
        <a href="/#" className="mob__menu" onClick={() => setIsMenuShown(true)}>
          <MenuBurger/>
        </a>
    </nav>
  )
}
