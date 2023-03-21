import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs from 'dayjs';
//import { OutlinedInputStyled } from 'components/Inputs/OutlinedInput.styled';
import { TextField } from '@mui/material';

const DateInput = ({ formik, fieldName }) => {
  const [value, setValue] = React.useState(
    dayjs(new Date(formik.values[fieldName]))
  );

  const handleChange = newValue => {
    setValue(newValue);
    formik.values[fieldName] = dayjs(newValue).format('YYYY-MM-DD');
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        label="Birthday"
        inputFormat="DD.MM.YYYY"
        value={value}
        onChange={handleChange}
        renderInput={params => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default DateInput;
