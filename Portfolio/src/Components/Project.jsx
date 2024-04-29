import React from 'react'

function Project(props) {
  return (
    // <div className='container-center'>
        <div >
            <div className='projectBox'>
                <div id='project-img'>
                    <img className='project-img' src={props.img} />
                </div>
                <div className='project-name'>
                    <h1>{props.projectName}</h1>
                    {/* <span>{props.projectDate}</span> */}
                </div>
                <div>
                    <p className='project-para'>{props.projectInfo}</p>
                </div>
                <div>
                    <button className='project-button'>View project</button>
                </div>
            </div>
        </div>
    // </div>
  )
}

export default Project
