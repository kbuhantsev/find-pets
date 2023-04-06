import styled from '@emotion/styled';
import { IconButton } from '@mui/material';

export const ButtonAddStyled = styled(IconButton)`
  background-color: ${p => p.theme.palette.primary.main};

  &:hover {
    background-color: ${p => p.theme.palette.primary.light};
  }
`;

export const ButtonAddWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
