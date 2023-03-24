import React, { useMemo } from 'react';
import { useUser } from 'hooks/useUser';

import { FormStyled, UserFormWrapper } from './UserDataForm.styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import LogoutButton from 'components/Buttons/LogoutButton/LogoutButton';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import TextInput from './TextInput/TextInput';
import DateInput from './DateInput/DateInput';
import { useUpdateUserMutation } from 'redux/user/userApi';

export const userProfileValidation = Yup.object({
  name: Yup.string()
    .min(1, 'Name is too short!')
    .max(70, 'Name is too long!')
    .matches(/^[a-zA-Z]+$/, 'Only letters!'),
  email: Yup.string().matches(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    'Incorrect email address!'
  ),
  birthdate: Yup.string().matches(
    /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
  ),
  phone: Yup.string().matches(/^\+380\d{9}$/, 'must have +380 format'),
  city: Yup.string().matches(
    /[A-Za-z]+, [A-Za-z]+/,
    'Format is "region, city"'
  ),
});

const UserDataForm = () => {
  const { user } = useUser();
  const [updateUser, { isLoading, isError, error }] = useUpdateUserMutation();

  const convertDate = dateString => {
    if (!dateString) return '0000-00-00';
    const date = new Date(dateString);
    return [
      date.toLocaleString('default', { year: 'numeric' }),
      date.toLocaleString('default', { month: '2-digit' }),
      date.toLocaleString('default', { day: '2-digit' }),
    ].join('-');
  };

  const userData = useMemo(() => {
    const {
      name = '',
      email = '',
      birthday = '0000-00-00',
      phone = '',
      city = '',
    } = user;

    return { name, email, birthday: convertDate(birthday), phone, city };
  }, [user]);

  const handleSubmit = async (values, { setSubmitting }) => {
    await updateUser(values).unwrap();
    setSubmitting(false);
    if (isError) {
      console.log(error);
      Notify.failure(JSON.stringify(error.data));
    }
  };

  const formik = useFormik({
    initialValues: { ...userData },
    enableReinitialize: true,
    validationSchema: userProfileValidation,
    onSubmit: handleSubmit,
  });

  return (
    <UserFormWrapper>
      <FormStyled onSubmit={formik.handleSubmit}>
        {Object.entries(formik.initialValues).map(entrie => {
          if (entrie[0] === 'birthday') {
            return (
              <DateInput
                key={entrie[0]}
                formik={formik}
                fieldName={entrie[0]}
                isLoading={isLoading}
              />
            );
          } else {
            return (
              <TextInput
                key={entrie[0]}
                formik={formik}
                fieldName={entrie[0]}
                isLoading={isLoading}
              />
            );
          }
        })}
      </FormStyled>
      <LogoutButton />
    </UserFormWrapper>
  );
};

export default UserDataForm;
