import { FormControl, FormHelperText, IconButton } from '@mui/material';
import { OutlinedInputStyled } from 'components/Inputs/OutlinedInput.styled';
import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import { Box } from '@mui/system';

const TextInput = ({ formik, fieldName }) => {
  const [focus, setFocus] = useState(false);

  const iconButtonClick = async () => {
    setFocus(prev => !prev);
    if (focus) {
      //formik.handleSubmit();
    }
  };

  return (
    <Box display="flex">
      <FormControl variant="outlined">
        <OutlinedInputStyled
          name={fieldName}
          type="text"
          placeholder={fieldName}
          value={formik.values[fieldName]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched[fieldName] && Boolean(formik.errors[fieldName])}
          aria-describedby="component-name-error"
        />
        <FormHelperText id="component-name-error">
          {formik.errors[fieldName]}
        </FormHelperText>
      </FormControl>
      <IconButton onClick={iconButtonClick}>
        {focus ? <CheckIcon color="primary" /> : <EditIcon color="primary" />}
      </IconButton>
    </Box>
  );
};

export default TextInput;
