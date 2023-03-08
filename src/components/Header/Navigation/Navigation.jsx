import { Box } from '@mui/material';
import NavButtonCustom from 'components/Buttons/NavButtonCustom';
import { NavLink } from 'react-router-dom';
import { NavListStyled } from './Navigation.styled';

const links = [
  { title: 'News', to: '/news' },
  { title: 'Find pets', to: '/notices' },
  { title: 'Our friends', to: '/friends' },
];

const Navigation = ({ variant }) => {
  return (
    <Box as="nav" display="flex" justifyContent="center">
      <NavListStyled>
        {links.map(({ title, to }) => (
          <li key={title}>
            <NavButtonCustom to={to} component={NavLink} variant={variant}>
              {title}
            </NavButtonCustom>
          </li>
        ))}
      </NavListStyled>
    </Box>
  );
};

export default Navigation;
