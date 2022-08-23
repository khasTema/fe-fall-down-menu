import React from 'react'

function Company({show}) {
  return (
    <ul className="menu__block" style={show ? {display: 'block'} : {display: 'none'}}>
      <li className="block__item">
        <a href="/#" className="item__link">
          History
        </a>
      </li>
      <li className="block__item">
        <a href="/#" className="item__link">
          Our Team
        </a>
      </li>
      <li className="block__item">
        <a href="/#" className="item__link">
          Blog
        </a>
      </li>
      <li className="block__item">
        <a href="/#" className="item__link">
          
        </a>
      </li>
    </ul>
  )
}

export default Company