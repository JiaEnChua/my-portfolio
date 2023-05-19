import React from 'react';
import { isMobile } from 'react-device-detect';
import MobileComponent from './MobileComponent';
import DesktopComponent from './DesktopComponent';

const OtherProjects = () => {
  return <div>{isMobile ? <MobileComponent /> : <DesktopComponent />}</div>;
};

export default OtherProjects;
