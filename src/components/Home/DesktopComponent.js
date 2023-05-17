import React from 'react';
import { AwesomeButton } from 'react-awesome-button';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss';

import { HOME } from '../constants';
import './styles.scss';

function DesktopComponent() {
  return (
    <div className='home'>
      <div className='home__container'>
        <p>{HOME.GREETINGS}</p>
        <br />
        <h1>{HOME.NAME}</h1>
        <br />
        <h2>{HOME.FIRST_INTRO}</h2>
        <br />
        <p className='home__containerDesc'>{HOME.HOME_INTRO}</p>
        <br />
        <div className='home__containerContact'>
          <AwesomeButton
            type='secondary'
            cssModule={AwesomeButtonStyles}
            href='mailto:chuajiaen23@gmail.com'
          >
            {HOME.GET_IN_TOUCH}
          </AwesomeButton>
        </div>
      </div>
    </div>
  );
}

export default DesktopComponent;
