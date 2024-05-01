import React ,{useState} from 'react';
import project1 from "../assets/Todolist1.jpg";
import project2 from "../assets/Todolist2.jpg";

import './Projects.css'; 

const projects = [
  {
    id: 1,
    image: project1,
    skills: ['React', 'JavaScript', 'HTML', 'CSS'],
    name: 'Project 1',
    description: 'The aim of this project is to develop a robust and user-friendly digital to-do list application. The application will provide users with the ability to create, manage, and prioritize tasks effectively, enhancing productivity and organization.',
    liveLink: 'https://barikhemanta.github.io/To-Do-List-Simple/',
    githubLink: 'https://github.com/barikhemanta/To-Do-List-Simple'
  },
  {
    id: 2,
    image: project2,
    skills: ['React', 'Node.js', 'Express', 'MongoDB'],
    name: 'Project 2',
    description: 'The aim of this project is to develop a robust and user-friendly digital to-do list application. The application will provide users with the ability to create, manage, and prioritize tasks effectively, enhancing productivity and organization.',
    liveLink: 'https://barikhemanta.github.io/To-Do-List-Adv/',
    githubLink: 'https://github.com/barikhemanta/To-Do-List-Adv'
  },
  {
    id: 3,
    image: project2,
    skills: ['React', 'Node.js', 'Express', 'MongoDB'],
    name: 'Project 2',
    description: 'The aim of this project is to develop a robust and user-friendly digital to-do list application. The application will provide users with the ability to create, manage, and prioritize tasks effectively, enhancing productivity and organization.',
    liveLink: 'https://barikhemanta.github.io/To-Do-List-Adv/',
    githubLink: 'https://github.com/barikhemanta/To-Do-List-Adv'
  },
  {
    id: 4,
    image: project2,
    skills: ['React', 'Node.js', 'Express', 'MongoDB'],
    name: 'Project 2',
    description: 'The aim of this project is to develop a robust and user-friendly digital to-do list application. The application will provide users with the ability to create, manage, and prioritize tasks effectively, enhancing productivity and organization.',
    liveLink: 'https://barikhemanta.github.io/To-Do-List-Adv/',
    githubLink: 'https://github.com/barikhemanta/To-Do-List-Adv'
  },
  
];

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  return (
    <div id='project' className='project'>
      <h1>My {"<dev/>"} projects</h1>
      <p>From simple apps to heavy apps.</p>
      <div className="project-card">
        {projects.slice(0, showAllProjects ? projects.length : 2).map(project => (
          <div key={project.id} className="card">
            <img src={project.image} alt={project.name} className="project-image" />
            <div className="skills">
              {project.skills.map(skill => (
                <span key={skill} className="skill">{skill}</span>
              ))}
            </div>
            <h2 className="project-name">{project.name}</h2>
            <p className="project-description">{project.description}</p>
            <div className="buttons">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn-live">See Live</a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn-github">See on GitHub</a>
            </div>
          </div>
        ))}
      </div>
      {!showAllProjects && (
         <div className="see-all-container">
         <button className="see-all-btn" onClick={() => setShowAllProjects(true)}>See All Apps</button>
       </div>
      )}
    </div>
  );
};

export default Projects;