import React, { useState } from 'react';
import map from 'lodash/map';
import { Spin as Hamburger } from 'hamburger-react';
import { scroller } from 'react-scroll';

import { PAGE_ITEMS } from '../constants';
import './styles.scss';

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
          <div key={eachItem.label} className='panel-item'>
            <p onClick={() => scrollToSection(eachItem.to)}>{eachItem.label}</p>
          </div>
        ))}
      </ul>
    </div>
  );

  return (
    <div className='navigation-container'>
      <div className='navigation-topBar'>
        <Hamburger
          toggled={isPanelOpen}
          toggle={setPanelOpen}
          onToggle={togglePanel}
          size={15}
        />
      </div>
      {isPanelOpen && renderPanel()}
    </div>
  );
}

export default MobileComponent;
