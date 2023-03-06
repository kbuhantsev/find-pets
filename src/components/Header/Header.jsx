import { Box } from '@mui/material';
import { AppBarStyled } from './Header.styled';
import Toolbar from './Toolbar/Toolbar';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBarStyled position="static">
        <Toolbar />
      </AppBarStyled>
    </Box>
  );
};

export default Header;
