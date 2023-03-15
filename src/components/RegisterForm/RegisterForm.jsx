import React, { useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import {
  useLogInUserMutation,
  useRegisterUserMutation,
} from 'redux/user/userApi';
import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  Typography,
} from '@mui/material';
import { OutlinedInputStyled, RegisterFormStyled } from './RegisterForm.styled';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .matches(
      /^([a-zA-Z0-9])+([a-zA-Z0-9._-]+)@[a-zA-Z0-9]+([.-]?[a-zA-Z0-9]+)\.[a-zA-Z]{2,}$/,
      'Invalid email address'
    )
    .min(10, 'Email must include more tnan 10 characters')
    .max(63, 'Email must be less tnan 63 characters')
    .required('This is a required field'),
  password: Yup.string()
    .matches(/^[^\s]+(^\s.*)?$/, "Password can't include whitespace")
    .min(7, 'Password must include more tnan 7 characters')
    .max(32, 'Password must be less tnan 32 characters')
    .required('This is a required field'),
  confirm_password: Yup.string()
    .oneOf(
      [Yup.ref('password'), null],
      "Password and confirm password don't match"
    )
    .required('This is a required field'),
  name: Yup.string()
    .max(70, 'Name must be less tnan 70 characters')
    .matches(/^[a-zA-Z]+$/, 'Only latin letters')
    .required('This is a required field'),
  city: Yup.string()
    .matches(
      /[A-Za-z]+, [A-Za-z]+/,
      'Please, enter the data in format "region, city" (only latin letters)'
    )
    .required('This is a required field'),
  phone: Yup.string()
    .matches(
      /^\+380\d{9}/,
      'Please, enter the phone number in the following way: +380XXXXXXXXX'
    )
    .length(13, 'Phone must include 13 characters')
    .required('This is a required field'),
});

const RegisterForm = () => {
  const [page, setPage] = useState(1);
  const [registerUser, { isLoading, isFetching }] = useRegisterUserMutation();
  const [loginUser, { isFetching: isLoggingIn }] = useLogInUserMutation();
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const onSubmit = async (values, actions) => {
    const { email, password, name, city, phone } = values;

    try {
      await registerUser({
        email,
        password,
        name,
        city,
        phone,
      }).unwrap();

      const { user } = await loginUser({
        email,
        password,
      }).unwrap();

      Notify.success(`Hello, ${user.name}`);

      navigate('/user');
    } catch (error) {
      console.log(error);
      Notify.failure(error.data.message);
    }

    actions.setSubmitting(false);
  };

  const onPageChange = () => {
    if (page === 1) {
      const {
        email: emailError,
        password: passwordError,
        confirm_password: confirmError,
      } = formik.errors;

      if (emailError || passwordError || confirmError) {
        Notify.warning('Fill all required fields!');
        return;
      }
      setPage(2);
    } else {
      setPage(1);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirm_password: '',
      name: '',
      city: '',
      phone: '',
    },
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  return (
    <>
      {isLoading || isFetching || isLoggingIn ? (
        <Box display="flex" justifyContent="center" marginTop="50px">
          <CircularProgress color="primary" size={75} />
        </Box>
      ) : (
        <RegisterFormStyled onSubmit={formik.handleSubmit}>
          <Typography variant="h3">Registration</Typography>
          {page === 1 && (
            <>
              <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
                <OutlinedInputStyled
                  name="email"
                  type="text"
                  placeholder="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  aria-describedby="component-email-error"
                />
                <FormHelperText id="component-email-error">
                  {formik.errors.email}
                </FormHelperText>
              </FormControl>

              <FormControl
                sx={{ m: 1, width: '50ch', borderRadius: '20px' }}
                variant="outlined"
              >
                <OutlinedInputStyled
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  placeholder="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  aria-describedby="component-password-error"
                />
                <FormHelperText id="component-password-error">
                  {formik.errors.password}
                </FormHelperText>
              </FormControl>

              <FormControl
                sx={{ m: 1, width: '50ch', borderRadius: '20px' }}
                variant="outlined"
              >
                <OutlinedInputStyled
                  name="confirm_password"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  placeholder="Confirm Password"
                  value={formik.values.confirm_password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.confirm_password &&
                    Boolean(formik.errors.confirm_password)
                  }
                  aria-describedby="component-confirm_password-error"
                />
                <FormHelperText id="component-confirm_password-error">
                  {formik.errors.confirm_password}
                </FormHelperText>
              </FormControl>
            </>
          )}
          {page === 2 && (
            <>
              <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
                <OutlinedInputStyled
                  name="name"
                  type="text"
                  placeholder="Name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  aria-describedby="component-name-error"
                />
                <FormHelperText id="component-name-error">
                  {formik.errors.name}
                </FormHelperText>
              </FormControl>

              <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
                <OutlinedInputStyled
                  name="city"
                  type="text"
                  placeholder="City, Region"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.city && Boolean(formik.errors.city)}
                  aria-describedby="component-city-error"
                />
                <FormHelperText id="component-city-error">
                  {formik.errors.city}
                </FormHelperText>
              </FormControl>

              <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
                <OutlinedInputStyled
                  name="phone"
                  type="text"
                  placeholder="Mobile phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                  aria-describedby="component-phone-error"
                />
                <FormHelperText id="component-phone-error">
                  {formik.errors.phone}
                </FormHelperText>
              </FormControl>

              <Button
                variant="contained"
                type="submit"
                size="large"
                sx={{ borderRadius: '20px', width: '100%', mb: '16px' }}
              >
                Register
              </Button>
            </>
          )}
          <Button
            variant={page === 1 ? 'contained' : 'outlined'}
            size="large"
            sx={{ borderRadius: '20px', width: '100%' }}
            onClick={onPageChange}
          >
            {page === 1 ? 'Next' : 'Back'}
          </Button>
        </RegisterFormStyled>
      )}
    </>
  );
};

export default RegisterForm;
