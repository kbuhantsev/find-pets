import { Box } from '@mui/material';
import NavButtonCustom from 'components/Buttons/NavButtonCustom';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <Box as="nav">
      <Box as="ul" display="flex" flexDirection="row" gap="20px">
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
      </Box>
    </Box>
  );
};

export default Navigation;
