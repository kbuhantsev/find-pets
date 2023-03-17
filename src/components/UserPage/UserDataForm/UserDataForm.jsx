import React from 'react';
import { useUser } from 'hooks/useUser';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { Notify } from 'notiflix';
import { useCallback } from 'react';
import { useLogOutUserMutation } from 'redux/user/userApi';

const UserDataForm = () => {
  const { user } = useUser();
  const [logOutUser] = useLogOutUserMutation();

  const onBtnLogOutClick = useCallback(async () => {
    try {
      await logOutUser();
      Notify.success('Success');
    } catch (error) {
      Notify.error(error.message);
    }
  }, [logOutUser]);

  return (
    <>
      <form>
        <label>
          Name:
          <input type="text"></input>
        </label>
        <label>
          Email:
          <input type="text"></input>
        </label>
        <label>
          Birthday:
          <input type="text"></input>
        </label>
        <label>
          Phone:
          <input type="text"></input>
        </label>
        <label>
          City:
          <input type="text"></input>
        </label>
      </form>
      <Button
        variant="text"
        onClick={onBtnLogOutClick}
        startIcon={<LogoutIcon />}
      >
        Log out
      </Button>
    </>
  );
};

export default UserDataForm;
