import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import map from 'lodash/map';
import { Link } from 'react-scroll';
import { Menu as MenuIcon } from '@mui/icons-material';

import { PAGE_ITEMS } from '../constants';

export default function MobileComponent() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div
      style={{
        height: '50px',
        position: 'sticky',
        top: '0',
        background: 'white',
        zIndex: 1000,
      }}
    >
      <Button
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {map(PAGE_ITEMS, (eachItem) => (
          <Link
            activeClass='active'
            to={eachItem.to}
            spy={true}
            smooth={true}
            offset={eachItem.offset}
            duration={500}
            key={eachItem.label}
          >
            <MenuItem onClick={handleClose}>{eachItem.label}</MenuItem>
          </Link>
        ))}
      </Menu>
    </div>
  );
}
