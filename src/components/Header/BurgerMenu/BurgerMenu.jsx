import React from 'react';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButtonWrapper } from './BurgerMenu.styled';

export const BurgerMenu = ({ toggleMenu }) => {
  return (
    <IconButtonWrapper>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ ml: '0px' }}
        onClick={toggleMenu}
      >
        <MenuIcon sx={{ color: 'black' }} />
      </IconButton>
    </IconButtonWrapper>
  );
};
