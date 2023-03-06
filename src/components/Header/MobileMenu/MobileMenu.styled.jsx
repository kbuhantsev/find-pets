import styled from '@emotion/styled';
import { Paper } from '@mui/material';

export const MobileMenuStyled = styled(Paper)`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 16px 20px;
  z-index: 1;
`;
