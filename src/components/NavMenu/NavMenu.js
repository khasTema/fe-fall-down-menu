import React, { useState } from 'react';
import { ReactComponent as MenuClose } from '../../images/icon-close-menu.svg';
import { ReactComponent as ArrowUP } from '../../images/icon-arrow-up.svg';
import { ReactComponent as ArrowDOWN } from '../../images/icon-arrow-down.svg';
import Features from './FeaturesList/Features';
import Company from './CompanyList/Company';

function NavMenu({showMenu, setIsMenuShown}) {
  // reafctor into one function
  const [isFeaturesClicked, setIsFeaturesClicked] = useState(false)
  const [isCompanyClicked, setIsCompanyClicked] = useState(false)

  function handleFeaturesClick() {
    setIsFeaturesClicked(prev => !prev)
  }

  function handleCompanyClick() {
    setIsCompanyClicked(prev => !prev)
  }

  function handleMenuClose (){
    setIsMenuShown(false)
    setIsFeaturesClicked(false)
    setIsCompanyClicked(false)
  }


  return (
    <div className="menu__wrapper" style={showMenu ? {display: 'flex'} : {display: 'none'}}>
      <div className="nav__menu">
        <div className="__close" >
          <MenuClose onClick={handleMenuClose}/>
        </div>
        <div className="menu__list">
          <a href="/#" className="menu_item" onClick={handleFeaturesClick}>
            Features {isFeaturesClicked ? <ArrowUP/> : <ArrowDOWN/> }
          </a>
          <Features show={isFeaturesClicked}/>
          <a href="/#" className="menu_item" onClick={handleCompanyClick}>
            Company {isCompanyClicked ? <ArrowUP/> : <ArrowDOWN/> }
          </a>
          <Company show={isCompanyClicked}/>
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