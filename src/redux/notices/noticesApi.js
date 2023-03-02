import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://pets-back-end.vercel.app/api';

export const noticesApi = createApi({
  reducerPat: 'noticesApi',
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
  tagTypes: ['Notices'],
  endpoints: builder => ({
    getAllNotices: builder.query({
      query: () => '/notices',
      method: 'GET',
      providesTags: ['Notices'],
    }),
    getNoticesByCategory: builder.query({
      query: category => `/notices/category/${category}`,
    }),
  }),
});

export const { useGetAllNoticesQuery, useGetNoticesByCategoryQuery } =
  noticesApi;
