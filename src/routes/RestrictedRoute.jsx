import { useUser } from '../hooks/useUser';
import { Navigate } from 'react-router-dom';

export default function RestrictedRoute({
  redirectTo = '/',
  component: Component,
}) {
  const { isLoggedIn } = useUser();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
}
