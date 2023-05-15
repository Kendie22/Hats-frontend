import React from 'react';


import './About.css';


const About = () => {
  return (
    <div >
      <h3 className='mtd'>Meet The Devs!</h3>
      <div className='team-about'>
        <div className='FernKerr'>
          <img
            className="team-photo"
            src="https://avatars.githubusercontent.com/u/115031623?s=400&u=55b27304422b725e8e05eb1ba2cba852af2a5462&v=4"
            alt="Fernando Cortez"
          ></img>

          <h4 className="bio-name">
            <em>Fernando Cortez</em>
          </h4>
          <p className="bio-text-fc">
          I'm a Full Stack Developer with a background in medical who lives in Brooklyn, NY.
            My favorite type of hat is the fedora and Beanie.
            Please check out my links below to connect with me.
          </p>
          <a href="https://github.com/CortezFernando">
            <img
              className="icon"
              alt="GitHub"
              title="GitHub"
              src="./icons/github.png"
            />
          </a>
          <a href="https://www.linkedin.com/in/fernando-cortez-61b759250/">
            <img
              className="icon"
              alt="LinkedIn"
              title="LinkedIn"
              src="./icons/linkedin.png"
            />
          </a>
        </div>
        <div className='FernKerr'>
          <img
            className="team-photo"
            src="https://avatars.githubusercontent.com/u/115031259?v=4"
            alt="Kerridene Small"
          ></img>

          <h4 className="bio-name">
            <em>Kerridene Small</em>
          </h4>
          <p className="bio-text-ks">
            I'm a Full Stack Developer with a background in education. I was born in Jamaica, WI  but currently live in Brooklyn, NY.
            My favorite hat is chef's hat because I love cooking for my friends and family.
            Please check out my links below to connect with me.
          </p>
          <a href="https://github.com/Kendie22">
            <img
              className="icon"
              alt="GitHub"
              title="GitHub"
              src="./icons/github.png"
            />
          </a>
          <a href="https://www.linkedin.com/in/kerridene-small/">
            <img
              className="icon"
              alt="LinkedIn"
              title="LinkedIn"
              src="./icons/linkedin.png"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;