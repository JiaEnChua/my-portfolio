import React from 'react';
import map from 'lodash/map';
import { Link } from 'react-scroll';

import { HEAD_LIST } from '../constants';
import './styles.scss';

function DesktopComponent() {
  return (
    <div className='header'>
      <ul className='header__list'>
        {map(HEAD_LIST, (eachItem) => (
          <li key={eachItem.linkTo}>
            <Link
              activeClass='active'
              to={eachItem.linkTo}
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className='header__list_eachItem'
            >
              {eachItem.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DesktopComponent;
