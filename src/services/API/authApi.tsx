import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LoginRequest, LoginResponse } from '../../interfaces/LoginInterface';

export const authApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://hu-22-angular-mockapi-urtjok3rza-wl.a.run.app/auth/',
  }),

  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
    }),
    protected: builder.mutation<{ message: string }, void>({
      query: () => 'protected',
    }),
  }),
});

export const { useLoginMutation } = authApi;
