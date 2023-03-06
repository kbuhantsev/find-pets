import ColorMode from 'components/ColorMode';
import { Box } from '@mui/material';
import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';
import UserMenu from './UserMenu/UserMenu';
import { AppBarStyled, ToolbarStyled } from './Header.styled';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBarStyled position="static">
        <ToolbarStyled>
          <Logo />
          <Navigation />
          <Box display="flex" flexDirection="row">
            <ColorMode />
            <UserMenu />
          </Box>
        </ToolbarStyled>
      </AppBarStyled>
    </Box>
  );
};

export default Header;
