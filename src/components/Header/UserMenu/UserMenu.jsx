import ContainedButton from '../../Buttons/ContainedButton';
import OutlinedButton from '../../Buttons/OutlinedButton';
import ButtonWithIcon from '../../Buttons/ButtonWithIcon';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

const UserMenu = () => {
  const navigate = useNavigate();

  const onLoginClick = () => {
    navigate('/login');
  };
  const onRegisterClick = () => {
    navigate('/register');
  };
  const onIconBtnClick = () => {
    navigate('/user');
  };

  return (
    <>
      <OutlinedButton onClick={onLoginClick}>Login</OutlinedButton>
      <ContainedButton onClick={onRegisterClick}>Register</ContainedButton>
      <ButtonWithIcon
        color="primary"
        variant="contained"
        icon={<AccountCircleIcon />}
        onClick={onIconBtnClick}
      >
        Account
      </ButtonWithIcon>
    </>
  );
};

export default UserMenu;
