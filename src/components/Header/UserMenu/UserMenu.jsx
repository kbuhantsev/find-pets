import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { useUser } from 'hooks/useUser';

const UserMenu = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useUser();

  return (
    <>
      {isLoggedIn ? (
        <Button
          variant="contained"
          startIcon={<AccountCircleIcon />}
          onClick={() => navigate('/user')}
        >
          Account
        </Button>
      ) : (
        <>
          <Button
            variant="outlined"
            color="inherit"
            onClick={() => navigate('/login')}
          >
            Login
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            onClick={() => navigate('/register')}
          >
            Register
          </Button>
        </>
      )}
    </>
  );
};

export default UserMenu;
