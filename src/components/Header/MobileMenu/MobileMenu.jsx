import { Box, useMediaQuery, useTheme } from '@mui/material';
import ColorMode from 'components/ColorMode';
import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import CloseIcon from '@mui/icons-material/Close';
import { MobileMenuStyled } from './MobileMenu.styled';

export const MobileMenu = ({ toggleMenu }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('tablet'));

  const onMobileMenuClick = () => {
    toggleMenu();
  };

  return (
    <MobileMenuStyled onClick={onMobileMenuClick}>
      <Box display="flex" justifyContent="space-between" mb="46px">
        <Logo />
        <ColorMode />
        <CloseIcon
          sx={{ width: '40px', height: '40px', cursor: 'pointer' }}
          onClick={toggleMenu}
        />
      </Box>

      {isMobile && (
        <Box display="flex" justifyContent="center" mb="60px">
          <UserMenu />
        </Box>
      )}

      <Navigation variant="text" />
    </MobileMenuStyled>
  );
};
