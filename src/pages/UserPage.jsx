import { Button } from '@mui/material';
import { useUser } from 'hooks/useUser';
import { Notify } from 'notiflix';
import { useCallback} from 'react';
import { useLogOutUserMutation } from 'redux/user/userApi';

const UserPage = () => {
  const { user } = useUser();
  const [logOutUser] = useLogOutUserMutation();
  
  const onButtonClick = useCallback(async () => {
    try {
      await logOutUser();
      Notify.success('Success');
    } catch (error) {
      Notify.error(error.message);
    }
  }, [logOutUser]);

  return (
    <>
      <h2>User page</h2>
      <ul></ul>
      {Object.keys(user).map(key => {
        return (
          <li key={key}>
            {key}:{user[key]}
          </li>
        );
      })}
      <Button type="button" variant="contained" onClick={onButtonClick}>
        Log out
      </Button>
    </>
  );
};

export default UserPage;
