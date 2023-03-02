import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser, selectToken } from '../redux/selectors';

export function useUser() {
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return { user, token, isLoggedIn };
}
