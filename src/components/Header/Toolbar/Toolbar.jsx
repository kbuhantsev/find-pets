import React from 'react';
import ColorMode from 'components/ColorMode';
import { Box, IconButton } from '@mui/material';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import { ToolbarStyled, UserMenuWrapper } from './Toolbar.styled';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';

export const Toolbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('tablet'));
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
    </Box>
  );
};

export default Toolbar;
