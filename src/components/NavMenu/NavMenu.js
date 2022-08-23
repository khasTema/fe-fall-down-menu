import React, { useState } from 'react';
import { ReactComponent as MenuClose } from '../../images/icon-close-menu.svg';
import { ReactComponent as ArrowUP } from '../../images/icon-arrow-up.svg';
import { ReactComponent as ArrowDOWN } from '../../images/icon-arrow-down.svg';

function NavMenu() {
  // reafctor into one function
  const [isFeaturesClicked, setIsFeaturesClicked] = useState(false)
  const [isCompanyClicked, setIsCompanyClicked] = useState(false)

  function handleFeaturesClick() {
    setIsFeaturesClicked(prev => !prev)
  }

  function handleCompanyClick() {
    setIsCompanyClicked(prev => !prev)
  }


  return (
    <div className="menu__wrapper">
      <div className="nav__menu">
        <a href='/#' className="__close">
          <MenuClose/>
        </a>
        <div className="menu__list">
          <a href="/#" className="menu_item" onClick={handleFeaturesClick}>
            Features {isFeaturesClicked ? <ArrowDOWN/> : <ArrowUP/> }
          </a>
          <a href="/#" className="menu_item" onClick={handleCompanyClick}>
            Company {isCompanyClicked ? <ArrowDOWN/> : <ArrowUP/> }
          </a>
          <a href="/#" className="menu_item">
            Careers
          </a>
          <a href="/#" className="menu_item">
            About
          </a>
        </div>
        
        <div className="login">
          <a href="/#" className="login__link">Login</a>
          <a href="/#" className="register__link">Register</a>
        </div>
      </div>
    </div>
  )
}

export default NavMenu