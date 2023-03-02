import { Navigate } from 'react-router-dom';
import { useUser } from 'hooks/useUser';

export default function PrivateRoute({
  redirectTo = '/',
  component: Component,
}) {
  const { isLoggedIn } = useUser();
  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
}
