import React from 'react'
import './Education.css';

function Education() {
  return (
    <section id='education' className="education">
      <h2 className='edu-hd'>Problem Solver {"<Coder/>"}</h2>
      <p className='edu-hd-des'>Frontend Developer with over 1 year of experience.</p>
      <div className="education-container">
        <div className='edu-item'>
          <p><strong>Master of Computer Application. </strong>Post Graduated at Fakir Mohan University, Odisha.</p>
        </div>
        <div className='edu-item'>
          <p><strong>Bachelor of Computer Application. </strong>Graduated at Fakir Mohan University, Odisha.</p>
        </div>
        <div className='edu-item'>
          <p><strong>Intermediate of  Science. </strong>Completed at RCST, Odisha.</p>
        </div>
        <div className='edu-item'>
          <p><strong>Secondary Education. </strong>Completed at GPHS, Odisha.</p>
        </div>
      </div> 
    </section>
  )
}

export default Education