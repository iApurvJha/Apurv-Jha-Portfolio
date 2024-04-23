import React, { useState } from 'react';
import './App.css';
import Typewriter from 'typewriter-effect';
import {Link} from "react-router-dom"


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav>
      <div className='container-center spacing '>
        <div className='text-with-brackets cursor-pointer  '>
          &lt;<span style={{"color":"white"}}>APURV</span>/<span style={{"color":"white"}}>JHA</span>&gt;
        </div>
        <div>
        <span className='spacing cursor-pointer onHover'>Home</span>
        <span className='spacing cursor-pointer onHover'>About</span>
        <span className='spacing cursor-pointer onHover'>Project</span>
        </div>
      </div>
      </nav>


      {/* Header */}
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
      }}
    />
        </h2>
        </div>
        <p className='bio-para ine-height-typewriter'>
        I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.
        </p>
        </div>
        <div id = "img" className='spacing' >
        <img className='Aj-img ' src='./src/assets/Aj_img.jpg'></img>
        </div>
      </header>

      <main className='container-center'>
        <div>
          <button className='resume-button'>
              <a className='anchor-style-none' href="https://drive.google.com/file/d/1bcKSqfNPppXljWuaMNb6Y7NLZnGoWH4W/view?usp=sharing" target="_blank" rel="noopener noreferrer">Check Resume</a>
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
