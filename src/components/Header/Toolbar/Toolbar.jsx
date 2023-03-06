import React from 'react';
import { Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ColorMode from 'components/ColorMode';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import { ToolbarStyled, UserMenuWrapper } from './Toolbar.styled';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { MobileMenu } from '../MobileMenu/MobileMenu';

export const Toolbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const theme = useTheme();
  const isTablet = useMediaQuery(
    theme.breakpoints.between('tablet', 'desktop')
  );
  const isDesktop = useMediaQuery(theme.breakpoints.up('desktop'));

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Box display="flex">
      <ToolbarStyled>
        <Logo />
        {isDesktop && <Navigation />}
        {(isTablet || isDesktop) && (
          <UserMenuWrapper>
            <ColorMode />
            <UserMenu />
          </UserMenuWrapper>
        )}
        {!isDesktop && <BurgerMenu toggleMenu={toggleMenu} />}
      </ToolbarStyled>
      {menuOpen && <MobileMenu toggleMenu={toggleMenu} />}
    </Box>
  );
};

export default Toolbar;
