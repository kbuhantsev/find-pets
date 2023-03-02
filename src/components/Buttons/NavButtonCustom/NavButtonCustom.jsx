import { Button } from '@mui/material';
import { useMatch, useResolvedPath } from 'react-router-dom';

const NavButtonCustom = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: false });

  return (
    <div>
      <Button variant={match ? 'contained' : 'text'} to={to} {...props}>
        {children}
      </Button>
    </div>
  );
};

export default NavButtonCustom;
