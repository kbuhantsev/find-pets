import { Box } from '@mui/material';
import NavButtonCustom from 'components/Buttons/NavButtonCustom';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <Box as="nav">
      <Box as="ul" display="flex" flexDirection="row">
        <li>
          <NavButtonCustom to="/news" component={NavLink} color="inherit">
            News
          </NavButtonCustom>
        </li>
        <li>
          <NavButtonCustom to="/notices" component={NavLink} color="inherit">
            Find pets
          </NavButtonCustom>
        </li>
        <li>
          <NavButtonCustom to="/friends" component={NavLink} color="inherit">
            Our friends
          </NavButtonCustom>
        </li>
      </Box>
    </Box>
  );
};

export default Navigation;
