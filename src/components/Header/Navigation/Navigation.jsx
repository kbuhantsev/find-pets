import styled from '@emotion/styled';
import { Box } from '@mui/material';
import NavButtonCustom from 'components/Buttons/NavButtonCustom';
import { NavLink } from 'react-router-dom';

const NavListStyled = styled('ul')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '20px',
  [theme.breakpoints.up('desktop')]: {
    marginTop: '0px',
    marginBottom: '0px',
  },
}));

const Navigation = () => {
  return (
    <Box as="nav">
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
