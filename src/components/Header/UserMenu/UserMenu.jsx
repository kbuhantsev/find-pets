import ContainedButton from '../../Buttons/ContainedButton';
import OutlinedButton from '../../Buttons/OutlinedButton';
import ButtonWithIcon from '../../Buttons/ButtonWithIcon';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const UserMenu = () => {
  const onLoginClick = () => {
    console.log('LOGIN BUTTON');
  };
  const onRegisterClick = () => {
    console.log('REGISTER BUTTON');
  };
  const onIconBtnClick = () => {
    console.log('ICON BTN BUTTON');
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
