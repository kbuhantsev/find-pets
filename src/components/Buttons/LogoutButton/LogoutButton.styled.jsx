import styled from '@emotion/styled';
import { IconButton } from '@mui/material';

export const IconButtonStyled = styled(IconButton)`
  width: fit-content;
  color: ${p => p.theme.palette.primary.light};
`;

export const LogoutSpan = styled.span`
  font-size: 12px;
  letter-spacing: 0.04em;
  color: rgba(17, 17, 17, 0.6);
  font-size: 16px;
  font-weight: 500;
`;
