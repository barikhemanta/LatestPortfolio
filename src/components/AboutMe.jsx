import React from 'react'
import './AboutMe.css';
import myPhoto from "../assets/keyboard.jpg";

function AboutMe() {

  const downloadResume = () => {
    // Replace 'resume.pdf' with the path to your resume file
    const resumeUrl = 'https://drive.google.com/file/d/1D-7l1VXFDLAug18DYAeamHxmBdjI3X4j/view?usp=drive_link';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.setAttribute('download', 'resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h1>Software Developer</h1>
       </div>
       <div className='about-skill'> 
        <p>
         {'{'}Javascript, React, Next.js, Vue.js, MongoDB, CSS, Node.js, Express.js{'}'}        
         </p>
       </div>
        <div className="achievements">
          <p>Specializing in React & Next.js I leverage cutting-edge technologies to bring web projects to life.</p>
        </div>
        <div className='btn'>
        <button className='btn-dev'><a href="https://github.com/barikhemanta" target='_blank'>See my dev work</a></button>
        <button className='btn-download' onClick={downloadResume}>Download CV</button>
        </div>
        <div className='about-img'>
        <img className='abt-img' src={myPhoto} alt="My Photo" />
       </div>
    </section>
  )
}

export default AboutMe