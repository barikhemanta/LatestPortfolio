import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
      <div className="container-ftr">
        <div className="row">
          <div className="col-md-6 text">
            <p>&copy; 2024 Portfolio</p>
          </div>
          <div className="col-md-6 icons">
            <ul className="social-icons">
              <li><a href="https://facebook.com"><i className="fab fa-facebook"></i></a></li>
              <li><a href="https://twitter.com"><i className="fab fa-twitter"></i></a></li>
              <li><a href="https://linkedin.com"><i className="fab fa-linkedin"></i></a></li>
              <li><a href="https://instagram.com"><i className="fab fa-instagram"></i></a></li>
              {/* Add more social icons as needed */}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
