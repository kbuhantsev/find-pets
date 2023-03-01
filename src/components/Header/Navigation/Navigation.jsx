import Box from 'components/Box';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <Box as="nav" display="flex" flexDirection="row">
      <Box as="ul">
        <li>
          <NavLink to="news">News</NavLink>
        </li>
        <li>
          <NavLink to="notices">Find pets</NavLink>
        </li>
        <li>
          <NavLink to="friends">Our friends</NavLink>
        </li>
      </Box>
    </Box>
  );
};

export default Navigation;
