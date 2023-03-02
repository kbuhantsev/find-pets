import Box from '@mui/material/Box';
import { useMatch, Outlet, Navigate, NavLink } from 'react-router-dom';

const NoticesPage = () => {
  const isBaseUrl = useMatch('/notices');

  return (
    <>
      <div>
        <h3>NOTICES SEARCH</h3>
        <input type="text" placeholder="search text" />
        <button type="button">Search</button>
      </div>
      <div>
        <Box as="ul" display="flex" flexDirection="row" gridGap="30px">
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
