import React from 'react';
import Partners from '../Partners/Partners';
import heroMob from '../../images/image-hero-mobile.png'
import heroDT from '../../images/image-hero-desktop.png'


function Article(){

  const screenSize = window.innerWidth

  return (
    <section className='main__section'>
      <div className="__background-img">
        <img src={screenSize < 1024 ? heroMob : heroDT} alt="man with notebook" />
      </div>
      <article className='__article'>
        <h1 className="__title">Make<br className='dt-break'/> remote work</h1>
        <p className="__descr">Get your team in sync, no matter your location. Streamline process, create team rituals, and watch productivity soar.</p>
        <a href="/#" className="cta-btn __black-btn">Learn more</a>
        <Partners/>
      </article>
    </section>
  )
}

export default Article