import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://pets-back-end.vercel.app/api';

export const noticesApi = createApi({
  reducerPath: 'noticesApi',
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
      transformResponse: response => response.data,
      providesTags: result =>
        result
          ? [
              ...result.map(({ _id }) => ({ type: 'Notices', _id })),
              { type: 'Notices', id: 'LIST' },
            ]
          : [{ type: 'Notices', id: 'LIST' }],
    }),
    getNoticesByCategory: builder.query({
      query: query => ({
        url: `/notices/${query}`,
      }),
      transformResponse: response => response.data,
      providesTags: result =>
        result
          ? [
              ...result.map(({ _id }) => ({ type: 'Notices', _id })),
              { type: 'Notices', id: 'LIST' },
            ]
          : [{ type: 'Notices', id: 'LIST' }],
    }),
    getNoticeById: builder.query({
      query: id => `/notices/${id}`,
      transformResponse: response => response.data,
      providesTags: id => [{ type: 'Notices', id }],
    }),
    addToFavorites: builder.mutation({
      query: id => ({
        url: `/notices/favorites/${id}`,
        method: 'POST',
      }),
      invalidatesTags: ({ id }) => [{ type: 'Notices', id }],
    }),
    deleteFromFavorites: builder.mutation({
      query: id => ({
        url: `/notices/favorites/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ({ id }) => [{ type: 'Notices', id }],
    }),
    addNotice: builder.mutation({
      query: payload => {
        const formData = new FormData();
        const { category, ...data } = payload;
        Object.keys(data).forEach(key => formData.append(key, data[key]));
        formData.append('category', category);
        return {
          url: `/notices/category/${category}`,
          method: 'POST',
          body: formData,
        };
      },
      transformResponse: response => response.status,
      invalidatesTags: [{ type: 'Notices', id: 'LIST' }],
    }),
    deleteUserNoticeById: builder.mutation({
      query: id => ({
        url: `/notices/myNotices/${id}`,
        method: 'DELETE',
        body: id,
      }),
      invalidatesTags: ({ id }) => [{ type: 'Notices', id }],
    }),
  }),
});

export const {
  useGetAllNoticesQuery,
  useGetNoticesByCategoryQuery,
  useGetNoticeByIdQuery,
  useAddToFavoritesMutation,
  useDeleteFromFavoritesMutation,
  useDeleteUserNoticeByIdMutation,
} = noticesApi;
