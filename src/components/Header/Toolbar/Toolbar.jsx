import React from 'react';
import ColorMode from 'components/ColorMode';
import { Box, IconButton } from '@mui/material';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import { ToolbarStyled } from '../Header.styled';
import MenuIcon from '@mui/icons-material/Menu';

export const Toolbar = () => {
  return (
    <>
      <ToolbarStyled>
        <Logo />
        <Navigation />
        <Box display="flex" flexDirection="row">
          <ColorMode />
          <UserMenu />
        </Box>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
      </ToolbarStyled>
    </>
  );
};

export default Toolbar;
