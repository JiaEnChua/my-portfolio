import React, { useState } from 'react';
import map from 'lodash/map';

import {
  CAM2_DESCRIPTION,
  CERNER_DESCRIPTION,
  VISUAL_DESCRIPTION,
} from '../constants';
import './styles.scss';

function DesktopComponent() {
  const descriptionTemplate = ({ imgLink, imgAlt, timeline, bulletPoints }) => (
    <div className='experience__description'>
      <div className='experience__description--top'>
        <img src={imgLink} alt={imgAlt} />
        <h3>Software Engineer</h3>
        <p>
          <small>{timeline}</small>
        </p>
      </div>
      <ul className='experience__descBullet'>
        {map(bulletPoints, (eachPoint, index) => (
          <li key={index}>{eachPoint}</li>
        ))}
      </ul>
    </div>
  );

  const [descBullet, setDescBullet] = useState(
    descriptionTemplate(CERNER_DESCRIPTION)
  );
  const [cerner, setCerner] = useState('selected_comp');
  const [cam2, setCam2] = useState('');
  const [vdgPurdue, setVdgPurdue] = useState('');
  const resetVertBar = () => {
    setCerner('');
    setCam2('');
    setVdgPurdue('');
  };
  const renderCerner = () => {
    setDescBullet(descriptionTemplate(CERNER_DESCRIPTION));
    resetVertBar();
    setCerner('selected_comp');
  };

  const renderCam2 = () => {
    setDescBullet(descriptionTemplate(CAM2_DESCRIPTION));
    resetVertBar();
    setCam2('selected_comp');
  };

  const renderVisual = () => {
    setDescBullet(descriptionTemplate(VISUAL_DESCRIPTION));
    resetVertBar();
    setVdgPurdue('selected_comp');
  };

  return (
    <div className='experience'>
      <h1>Where I've Worked</h1>
      <div className='experience__container'>
        <div className='experience__verticalBar'>
          <p className={`${cerner}`} onClick={renderCerner}>
            Cerner
          </p>
          <p className={`${cam2}`} onClick={renderCam2}>
            CAM2 Research Group
          </p>
          <p className={`${vdgPurdue}`} onClick={renderVisual}>
            Visual Data Analytics Group Purdue
          </p>
        </div>
        {descBullet}
      </div>
    </div>
  );
}

export default DesktopComponent;
