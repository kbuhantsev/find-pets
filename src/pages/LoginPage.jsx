import { useLogInUserMutation } from 'redux/user/userApi';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useNavigate } from '../../node_modules/react-router-dom/dist/index';

const LoginPage = () => {
  const [logInUser] = useLogInUserMutation();
  const navigate = useNavigate();

  const onSubmit = async event => {
    event.preventDefault();
    console.log(event.target.email.value);
    console.log(event.target.password.value);

    try {
      const { user } = await logInUser({
        email: event.target.email.value,
        password: event.target.password.value,
      }).unwrap();

      Notify.success(`Hello, ${user.name}`);

      navigate('/user');
    } catch (error) {
      Notify.failure(error.data.message);
    }
  };

  return (
    <>
      <h2>Login page</h2>
      <form onSubmit={onSubmit}>
        <label>
          Email:
          <input type="text" name="email" value="k.buhantsev@gmail.com" />
        </label>
        <label>
          Password:
          <input type="text" name="password" value="1234567" />
        </label>
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default LoginPage;
