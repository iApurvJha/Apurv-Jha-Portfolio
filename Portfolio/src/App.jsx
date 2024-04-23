import React, { useState } from 'react';
import './App.css';

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
    </>
  );
}

export default App;
