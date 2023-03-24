import styled from '@emotion/styled';
import { TextField } from '@mui/material';

export const TextFieldStyled = styled(TextField)(() => ({
  '.MuiInput-root': {
    height: '100%',
  },
  '.MuiInput-root:before, .Mui-disabled:before': {
    borderBottomStyle: 'none',
  },
  '.MuiInput-root:after': { borderBottomStyle: 'none' },
  '.MuiInput-root.Mui-disabled:before': {
    borderBottomStyle: 'none',
  },
}));
