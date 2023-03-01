import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';

const UserPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const onButtonClick = () => {
    console.log(isLoggedIn);
  };

  return (
    <>
      <h2>User page</h2>
      <button type="button" onClick={onButtonClick}>
        current user
      </button>
    </>
  );
};

export default UserPage;
