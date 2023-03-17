import React, { useCallback } from 'react';
import { useLogOutUserMutation } from 'redux/user/userApi';
import { IconButtonStyled, LogoutSpan } from './LogoutButton.styled';
import { Notify } from 'notiflix';
import LogoutIcon from '@mui/icons-material/Logout';

const LogoutButton = () => {
  const [logOutUser] = useLogOutUserMutation();

  const onBtnLogOutClick = useCallback(async () => {
    try {
      await logOutUser().unwrap();
      Notify.success('Success');
    } catch (error) {
      Notify.error(error.message);
    }
  }, [logOutUser]);
  return (
    <IconButtonStyled onClick={onBtnLogOutClick}>
      <LogoutIcon />
      <LogoutSpan>Log Out</LogoutSpan>
    </IconButtonStyled>
  );
};

export default LogoutButton;
