import * as React from 'react';
import { Link } from 'react-scroll';
import { Box, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';

export default function MobileComponent() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label='Home' icon={<AccessAlarm />} />
        <BottomNavigationAction label='AboutMe' icon={<ThreeDRotation />} />
      </BottomNavigation>
    </Box>
  );
}
