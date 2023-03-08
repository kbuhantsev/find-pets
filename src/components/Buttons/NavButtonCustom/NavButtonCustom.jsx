// import styled from '@emotion/styled';
import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { useMatch, useResolvedPath } from 'react-router-dom';

const NavButtonCustom = ({ children, to, variant, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: false });

  return (
    <div>
      <StyledButton
        variant={variant ? variant : match ? 'contained' : 'outlined'}
        to={to}
        sx={{ width: '100%' }}
        match={match}
        {...props}
      >
        {children}
      </StyledButton>
    </div>
  );
};

const StyledButton = styled(Button)`
  border-bottom: ${p => {
    if (p.variant === 'text' && p.match) {
      return `3px solid ${p.theme.palette.primary.main}`;
    } else return '';
  }};
  border-radius: ${p => (p.variant === 'text' ? '0' : '20px')};
`;

export default NavButtonCustom;
