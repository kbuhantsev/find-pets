import { Box } from '@mui/material';
import NavButtonCustom from 'components/Buttons/NavButtonCustom';
import { NavLink } from 'react-router-dom';
import { NavListStyled } from './Navigation.styled';

const Navigation = () => {
  return (
    <Box as="nav" display="flex" justifyContent="center">
      <NavListStyled>
        <li>
          <NavButtonCustom to="/news" component={NavLink}>
            News
          </NavButtonCustom>
        </li>
        <li>
          <NavButtonCustom to="/notices" component={NavLink}>
            Find pets
          </NavButtonCustom>
        </li>
        <li>
          <NavButtonCustom to="/friends" component={NavLink}>
            Our friends
          </NavButtonCustom>
        </li>
      </NavListStyled>
    </Box>
  );
};

export default Navigation;
