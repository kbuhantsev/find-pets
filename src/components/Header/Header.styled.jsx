import styled from '@emotion/styled';
import { AppBar, Toolbar } from '@mui/material';

export const AppBarStyled = styled(AppBar)`
  background-color: ${p => p.theme.palette.background.default};
`;

export const ToolbarStyled = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;
