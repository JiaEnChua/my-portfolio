import React from 'react';
import './styles.scss';

function DesktopComponent() {
  return (
    <div className='home'>
      <div className='home__container'>
        <p>Hi, my name is</p>
        <br />
        <h1>JiaEn Chua</h1>
        <br />
        <h2>I love building things and solving real world problems.</h2>
        <br />
        <p className='home__containerDesc'>
          I'm a software engineer based in Kansas City, KS specializing on
          building functional and perfomance websites and applications.
        </p>
        <br />
        <div className='home__containerContact'>
          <a href='mailto:chuajiaen23@gmail.com'>Get In Touch</a>
        </div>
      </div>
    </div>
  );
}

export default DesktopComponent;
