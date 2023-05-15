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
      I'm a full stack developer with a background in medical field from Brooklyn,NY.
       {/* {describe project focus} */}
       I am working on becoming a video game developer and my favorite type of hat is the fedora. 
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
       I'm a full stack developer with a background in from Queens,NY.
       {/* {describe project focus} */}
       My favorite snacks are chocolate covered pretzels and onigiri. 
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