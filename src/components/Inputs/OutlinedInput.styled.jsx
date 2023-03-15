import styled from '@emotion/styled';
import { OutlinedInput } from '@mui/material';

export const OutlinedInputStyled = styled(OutlinedInput)(
  ({ theme, error }) => ({
    borderRadius: '30px',
    height: '40px',
    border: `${error ? '1px solid red' : '1px solid rgba(245, 146, 86, 0.5)'}`,
    [theme.breakpoints.up('tablet')]: {
      height: '52px',
    },

    '&:hover,&:focus': {
      border: '1px solid rgb(245, 146, 86)',
    },

    '& > fieldset': {
      border: 'none',
    },

    '& + p': {
      color: 'red',
    },
  })
);
