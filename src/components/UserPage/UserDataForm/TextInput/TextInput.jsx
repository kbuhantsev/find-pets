import IconButton from '@mui/material/IconButton';
import React, { useMemo, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import { Box } from '@mui/system';
import { TextFieldStyled } from './TextInput.styled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const TextInput = ({ formik, fieldName }) => {
  const [focus, setFocus] = useState(false);

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
      //formik.handleSubmit();
    }
  };

  return (
    <Box display="flex">
      <TextFieldStyled
        variant="standard"
        name={fieldName}
        type="text"
        disabled={!focus}
        value={formik.values[fieldName]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched[fieldName] && Boolean(formik.errors[fieldName])}
        helperText={formik.errors[fieldName]}
      />
      <IconButton onClick={iconButtonClick}>
        {focus ? <CheckIcon color="primary" /> : <EditIcon color="primary" />}
      </IconButton>
    </Box>
  );
};

export default TextInput;
