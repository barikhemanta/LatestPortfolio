import React from 'react';
import './Header.css';

function Header() {

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="left-logo">Hemanta Barik</div>
        <nav className="nav">
          <ul>
            <li><a href="#home" onClick={scrollToTop}>Home</a></li>
            <li><a href="#portfolio" onClick={() => scrollToSection('education')}>Education</a></li>
            <li><a href="#skills" onClick={() => scrollToSection('skills')}>Skill</a></li>
            <li><a href="#project" onClick={() => scrollToSection('project')}>Project</a></li>
            <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
