import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://pets-back-end.vercel.app/api';

export const userApi = createApi({
  reducerPat: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      } else {
        headers.set('Authorization', '');
      }
      return headers;
    },
  }),
  tagTypes: ['User'],
  endpoints: builder => ({
    logInUser: builder.mutation({
      query: payload => ({
        url: '/users/login',
        method: 'POST',
        body: payload,
      }),
      providesTags: ['User'],
    }),
    logOutUser: builder.mutation({
      query: () => '/users/logout',
      invalidatesTags: ['User'],
    }),
    registerUser: builder.mutation({
      query: payload => ({
        url: '/users/register',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['User'],
    }),
    getCurrentUser: builder.query({
      query: () => '/users/current',
      transformResponse: response => response.data,
      providesTags: ['User'],
    }),
    updateUser: builder.mutation({
      query: payload => ({
        url: '/users/update',
        method: 'PATCH',
        body: payload,
      }),
      invalidatesTags: ['User'],
    }),
    updateUserAvatar: builder.mutation({
      query: file => {
        const formData = new FormData();
        formData.append('avatar', file);
        return {
          url: '/users/avatars',
          method: 'PATCH',
          body: formData,
        };
      },
      invalidatesTags: ['User'],
    }),
  }),
});

export const {
  useLogInUserMutation,
  useLogOutUserMutation,
  useRegisterUserMutation,
  useGetCurrentUserQuery,
  useUpdateUserMutation,
  useUpdateUserAvatarMutation,
} = userApi;
