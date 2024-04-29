import React, { useState } from 'react';
import './App.css';
import Typewriter from 'typewriter-effect';
import {Link} from "react-router-dom"
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Project from './Components/Project';
import projectData from "./assets/projectData.json"


function App() {
  const [count, setCount] = useState(0);

  return (
    <div >
      <Navbar />
      <Header />  
      <main className='container-center'>
        <div>
          <button className='resume-button'>
              <a className='anchor-style-none' href="https://drive.google.com/file/d/1bcKSqfNPppXljWuaMNb6Y7NLZnGoWH4W/view?usp=sharing" target="_blank" rel="noopener noreferrer">Check Resume</a>
          </button>
        </div>
        
      </main>
      <hr/>
      <div>
        <h1 className='project'>Project</h1>      
      </div> 
      <div className='container-center'>
        {projectData.map((el,ind)=>{
          return <Project key={ind} img={el.img} projectName={el.projectName} projectDate={el.projectDate} projectInfo={el.projectInfo} />
        })}
      </div> 
      
    </div>
  );
}

export default App;
