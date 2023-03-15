import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { NavLink } from 'react-router-dom';
import { Box } from '@mui/material';
import { useUser } from 'hooks/useUser';
import NavButtonCustom from 'components/Buttons/NavButtonCustom';

const UserMenu = () => {
  const { isLoggedIn } = useUser();

  return (
    <>
      {isLoggedIn ? (
        <NavButtonCustom to="/user" component={NavLink} variant="contained">
          <AccountCircleIcon sx={{ mr: '5px' }} />
          Account
        </NavButtonCustom>
      ) : (
        <Box display="flex" gap="5px">
          <NavButtonCustom to="/login" component={NavLink} variant="contained">
            Login
          </NavButtonCustom>
          <NavButtonCustom
            to="/register"
            component={NavLink}
            variant="outlined"
          >
            Registration
          </NavButtonCustom>
        </Box>
      )}
    </>
  );
};

export default UserMenu;
