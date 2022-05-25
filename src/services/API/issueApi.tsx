import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IssueInterface } from '../../interfaces/IssueInterface';
import ProjectInterface from '../../interfaces/ProjectInterface';
const baseURL = 'https://hu-22-angular-mockapi-urtjok3rza-wl.a.run.app/';

export const issueApi = createApi({
  reducerPath: 'issueApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    getAllIssuesForProject: builder.query<Array<IssueInterface>, string>({
      query: (id) => ({
        url: `issue?projectID=${id}`,
        method: 'GET',
        headers: {
          userId: '86',
        },
      }),
    }),
    getAllProjects: builder.query<Array<ProjectInterface>, void>({
      query: () => ({
        url: 'project',
        method: 'GET',
        headers: {
          userID: '86',
        },
      }),
    }),
  }),
});

export const { useGetAllIssuesForProjectQuery, useGetAllProjectsQuery } =
  issueApi;
