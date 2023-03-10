import React from 'react';
import { useLogInUserMutation } from 'redux/user/userApi';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import {
  Button,
  CircularProgress,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  Typography,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box } from '@mui/system';
import { LoginFormStyled, OutlinedInputStyled } from './LoginForm.styled';

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
});

export const LoginForm = () => {
  const [logInUser, { isLoading, isFetching }] = useLogInUserMutation();
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const onSubmit = async (values, actions) => {
    const { email, password } = values;

    try {
      const { user } = await logInUser({
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

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  return (
    <>
      {isLoading || isFetching ? (
        <Box display="flex" justifyContent="center" marginTop="50px">
          <CircularProgress color="primary" size={75} />
        </Box>
      ) : (
        <LoginFormStyled onSubmit={formik.handleSubmit}>
          <Typography variant="h3">Login</Typography>
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
              error={formik.touched.password && Boolean(formik.errors.password)}
              aria-describedby="component-password-error"
            />
            <FormHelperText id="component-password-error">
              {formik.errors.password}
            </FormHelperText>
          </FormControl>
          <FormControl sx={{ m: 1, width: '50ch' }}>
            <Button
              variant="contained"
              type="submit"
              size="large"
              sx={{ borderRadius: '20px', width: '100%' }}
            >
              Login
            </Button>
          </FormControl>
        </LoginFormStyled>
      )}
    </>
  );
};
