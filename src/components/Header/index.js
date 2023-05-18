import React from 'react';
import { isMobile } from 'react-device-detect';
import MobileComponent from './MobileComponent';
import DesktopComponent from './DesktopComponent';

const Header = () => {
  if (isMobile) {
    return <MobileComponent />;
  }
  return <DesktopComponent />;
};

export default Header;
