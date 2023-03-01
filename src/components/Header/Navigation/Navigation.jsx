import Box from 'components/Box';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <Box as="nav">
      <Box as="ul" display="flex" flexDirection="row">
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
