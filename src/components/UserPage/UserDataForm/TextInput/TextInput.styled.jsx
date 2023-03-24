import styled from '@emotion/styled';
import { TextField } from '@mui/material';

export const TextFieldStyled = styled(TextField)(({ theme }) => ({
  '.MuiInput-root': {
    height: '100%',
  },
  '.MuiInput-root:before, .Mui-disabled:before': {
    borderBottomStyle: 'none',
  },
  '.MuiInput-root:after': {},
}));
