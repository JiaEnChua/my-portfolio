import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
    <div className='aboutMe'>
      <h1>About Me</h1>
      <div className='aboutMe__container'>
        <div className='aboutMe__containerLeft'>
          <p>
            I always have a passion for building things and it is until my first
            CS class in Purdue University that introduces me to the world of
            programming. During my time in Purdue, I took part in different
            research opportunities and summer internship to learn more about
            software development.
          </p>
          <br />
          <p>
            I am highly motivated to learn and adapt to fast-changing
            technologies and environments. Shortly after graduation, I join
            Cerner Corporation where I work on a wide spectrum of challenging
            projects ranging from front end design to backend dev as well as
            some 3rd party integrations.
          </p>
          <br />
          <p>Here are a few technologies I've been working with recently.</p>
          <ul>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Node.Js</li>
            <li>FireBase</li>
            <li>MERN Stack</li>
          </ul>
        </div>
        <div className='aboutMe__containerRight'>
          <div className='aboutMe__containerRightContainer'>
            <img
              src='https://media-exp1.licdn.com/dms/image/C5603AQEL7VA9j9t9xA/profile-displayphoto-shrink_200_200/0/1517023739025?e=1614816000&v=beta&t=rGyoX0-rcvpKz0hVnQWSQlOhJj9o__yZFsAFT0FfJiU'
              alt='profile_pic.png'
            />
            <span className='aboutMe__containerRightShadow'></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
