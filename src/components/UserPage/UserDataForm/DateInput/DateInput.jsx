import React, { useMemo, useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { Box, IconButton, InputLabel, TextField } from '@mui/material';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import { DatePickerStyled } from './DateInput.styled';

const DateInput = ({ formik, fieldName, isLoading }) => {
  const [focus, setFocus] = useState(false);

  const [value, setValue] = React.useState(
    dayjs(new Date(formik.values[fieldName]))
  );

  const handleChange = newValue => {
    setValue(newValue);
    formik.values[fieldName] = dayjs(newValue).format('YYYY-MM-DD');
  };

  const fieldError = useMemo(
    () => formik.errors[fieldName],
    [formik.errors, fieldName]
  );

  const iconButtonClick = async () => {
    if (focus && Boolean(fieldError)) {
      Notify.failure(fieldError);
      return;
    }

    setFocus(prev => !prev);

    if (focus) {
      formik.handleSubmit();
    }
  };

  return (
    <Box display="flex" justifyContent="space-between">
      <InputLabel sx={{ display: 'flex', alignItems: 'center' }}>
        {fieldName.charAt(0).toUpperCase() + fieldName.substr(1)}
      </InputLabel>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePickerStyled
          inputFormat="DD.MM.YYYY"
          value={value}
          onChange={handleChange}
          disabled={!focus}
          renderInput={params => <TextField {...params} />}
        />
      </LocalizationProvider>
      <IconButton onClick={iconButtonClick} disabled={isLoading}>
        {focus ? <CheckIcon color="primary" /> : <EditIcon color="primary" />}
      </IconButton>
    </Box>
  );
};

export default DateInput;
