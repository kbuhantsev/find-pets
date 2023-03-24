import styled from '@emotion/styled';
import { DatePicker } from '@mui/x-date-pickers';

export const DatePickerStyled = styled(DatePicker)(() => ({
  '.MuiOutlinedInput-notchedOutline': { border: 'none' },
  '.MuiTextField-root': {
    display: 'flex',
    justifyContent: 'center',
  },
  '.MuiOutlinedInput-root': {
    width: '200px',
    borderRadius: '0px',
  },
  // '.MuiOutlinedInput-root.Mui-disabled': {
  // },
}));
