import React, { useState } from 'react';
import { scroller } from 'react-scroll';
import map from 'lodash/map';
import Button from 'react-bootstrap/Button';

import { PAGE_ITEMS } from '../constants';

function MobileComponent() {
  const [isPanelOpen, setPanelOpen] = useState(false);

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 800,
      smooth: 'easeInOutQuart',
    });
    togglePanel();
  };

  const togglePanel = () => {
    setPanelOpen(!isPanelOpen);
  };

  const renderPanel = () => (
    <div className='panel'>
      <ul className='panel-items'>
        {map(PAGE_ITEMS, (eachItem) => (
          <li key={eachItem.label}>
            <p onClick={() => scrollToSection(eachItem.to)}>{eachItem.label}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className='navigation-icon'>
      <Button variant='primary' onClick={togglePanel}>
        Navigation
      </Button>
      {isPanelOpen && renderPanel()}
    </div>
  );
}

export default MobileComponent;
