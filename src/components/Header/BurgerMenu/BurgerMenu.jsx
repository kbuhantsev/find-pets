import React from 'react';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import styled from '@emotion/styled';

export const IconButtonWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  marginLeft: 'auto',
  [theme.breakpoints.up('tablet')]: {
    marginLeft: '0',
  },
  [theme.breakpoints.up('desktop')]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}));

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
