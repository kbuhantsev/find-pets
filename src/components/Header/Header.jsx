import Box from 'components/Box';
import ColorMode from 'components/ColorMode';
import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';
import UserMenu from './UserMenu/UserMenu';

const Header = () => {
  return (
    <Box as="header" display="flex" flexDirection="row">
      <Logo />
      <Navigation />
      <ColorMode />
      <UserMenu />
    </Box>
  );
};

export default Header;
