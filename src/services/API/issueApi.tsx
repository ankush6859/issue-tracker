import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IssueInterface } from '../../interfaces/IssueInterface';
const baseURL = 'https://hu-22-angular-mockapi-urtjok3rza-wl.a.run.app/';

export const issueApi = createApi({
  reducerPath: 'issueApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    getAllIssues: builder.query<Array<IssueInterface>, void>({
      query: () => ({
        url: 'issue',
        method: 'GET',
        headers: {
          userId: '86',
        },
      }),
    }),
  }),
});

export const { useGetAllIssuesQuery } = issueApi;
