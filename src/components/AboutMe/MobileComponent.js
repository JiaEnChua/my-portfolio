import React from 'react';
import './styles.scss';

function MobileComponent() {
  return (
    <div className='aboutMeMobile'>
      <h1>About Me</h1>
      <div className='aboutMeMobile__imgContainer'>
        <img
          src='https://github.com/JiaEnChua/JiaEnChua.github.io/blob/master/pic/JiaEn_Chua.jpeg?raw=true'
          alt='profile_pic.jpeg'
        />
      </div>
      <div>
        <p>
          Highly motivated individual, love to develop real world meaningful
          projects through tech
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
    </div>
  );
}

export default MobileComponent;
