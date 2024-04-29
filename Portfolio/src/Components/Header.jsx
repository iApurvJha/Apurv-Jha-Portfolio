import React from 'react'
import Typewriter from 'typewriter-effect';

function Header() {
  return (
    <header className='container-center'>
        <div id='intro'  >
        <h1 className='line-height' >Hi, I am</h1>
        <h1 className='line-height'>Apurv Jha</h1>
        <h2 className='display-inline-block '> I am</h2>
        <div className='display-inline-block intro-div color' >
        <h2 className='line-height-typewriter'>
        <Typewriter
        options={{
            strings: ['Programmer', 'full Stack Devloper'],
            autoStart: true,
            loop: true,
        }}/>
      </h2>
        </div>
        <p className='bio-para ine-height-typewriter'>
        I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.
        </p>
        </div>
        <div id = "img" className='spacing' >
        <img className='Aj-img ' src='https://avatars.githubusercontent.com/u/129882332?v=4'></img>
        </div>
      </header>
  )
}

export default Header
