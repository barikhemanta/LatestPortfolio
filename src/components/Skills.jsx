import React, { useState } from 'react';
import "./Skills.css"

function Portfolio() {
  const [showAll, setShowAll] = useState(false);
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap' ,
    'Node.js', 'SQL', 'Git', 'MongoDB', 'Express.js'
  ];
  const visibleSkillsCount = 7;
  const visibleSkills = showAll ? skills : skills.slice(0, visibleSkillsCount);

  return (
    <div id='skills' className="portfolio">
      <h1>Skill Repository</h1>
      <p>From simple apps to heavy apps.</p>
      <div className="skills">
        {visibleSkills.map((skill, index) => (
          <div key={index} className="skill">{skill}</div>
        ))}
      </div>
      {!showAll && (
        <button onClick={() => setShowAll(true)}>Show More</button>
      )}
    </div>
  );
}

export default Portfolio;
