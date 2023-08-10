import React from 'react';
import UserImg from '../data/pngwing.com.png'

const About = () => {
  return (
    <section id='about' className="about">
      <div className="about-img">
        <img src={UserImg} alt="img" />
      </div>
      <div className="about-details">
        <h1 className="about-title">About Me</h1>
        <h3 className="about-subtitle">I am Divyani Patil...!</h3>
        <p className="about-description">
          I'm a dedicated Frontend Developer with a strong focus on ReactJS. Skilled in HTML, CSS, and JavaScript, I thrive on creating captivating user experiences through dynamic and responsive web applications. I love learning and staying up-to-date with the latest trends in ReactJS to deliver innovative and impactful solutions. Let's connect and explore exciting opportunities in the world of frontend development!
        </p>
      </div>
    </section>
  )
}

export default About