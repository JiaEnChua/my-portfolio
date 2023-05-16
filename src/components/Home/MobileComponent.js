import React from 'react';
import { AwesomeButton } from 'react-awesome-button';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss';

import { HOME } from '../strings';
import './styles.scss';

function MobileComponent() {
  return (
    <div className='home'>
      <div className='home__container__mobile'>
        <p>{HOME.GREETINGS}</p>
        <br />
        <h1>{HOME.NAME}</h1>
        <br />
        <h2>{HOME.FIRST_INTRO}</h2>
        <br />
        <p className='home__containerDesc__mobile'>{HOME.HOME_INTRO}</p>
        <br />
        <div className='home__containerContact__mobile'>
          <AwesomeButton
            type='secondary'
            cssModule={AwesomeButtonStyles}
            onPress={() => {
              window.location.href = 'mailto:chuajiaen23@gmail.com';
            }}
          >
            {HOME.GET_IN_TOUCH}
          </AwesomeButton>
        </div>
      </div>
    </div>
  );
}

export default MobileComponent;
