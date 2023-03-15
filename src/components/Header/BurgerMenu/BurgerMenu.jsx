import React from 'react';

import { IconButton } from '@mui/material';
import { IconButtonWrapper } from './BurgerMenu.styled';
import MenuIcon from '@mui/icons-material/Menu';

export const BurgerMenu = ({ toggleMenu }) => {
  return (
    <IconButtonWrapper>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ ml: '0px', padding: 0, width: '40px', height: '40px' }}
        onClick={toggleMenu}
      >
        <MenuIcon sx={{ color: 'black', fontSize: '40px' }} />
      </IconButton>
    </IconButtonWrapper>
  );
};
