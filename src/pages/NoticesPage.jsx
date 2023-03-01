import Box from 'components/Box';
import { useMatch, Outlet, Navigate, NavLink } from 'react-router-dom';

const NoticesPage = () => {
  const isBaseUrl = useMatch('/notices');

  return (
    <>
      <div>NOTICES SEARCH</div>
      <div>
        <Box as="ul">
          <li>
            <NavLink to="sell">sell</NavLink>
          </li>
          <li>
            <NavLink to="lost-found">lost-found</NavLink>
          </li>
          <li>
            <NavLink to="in-good-hands">in-good-hands</NavLink>
          </li>
        </Box>
      </div>
      {isBaseUrl && <Navigate to="/notices/sell" />}
      <Outlet />
    </>
  );
};

export default NoticesPage;
