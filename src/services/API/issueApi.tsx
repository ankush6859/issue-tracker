import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IssueInterface, User } from '../../interfaces/IssueInterface';
import NewIssueInterface, {
  NewIssueResponseInterface,
} from '../../interfaces/NewIssueInterface';
import NewProjectInterface, {
  NewProjectResponseInterface,
} from '../../interfaces/NewProjectInterface';
import ProjectInterface from '../../interfaces/ProjectInterface';
const baseURL = 'https://hu-22-angular-mockapi-urtjok3rza-wl.a.run.app/';

export const issueApi = createApi({
  reducerPath: 'issueApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  tagTypes: ['Issue', 'Project'],
  endpoints: (builder) => ({
    getAllIssuesForProject: builder.query<Array<IssueInterface>, string>({
      query: (id) => ({
        url: `issue?projectID=${id}`,
        method: 'GET',
        headers: {
          userId: '86',
        },
      }),
      providesTags: ['Issue'],
    }),
    getAllProjects: builder.query<Array<ProjectInterface>, void>({
      query: () => ({
        url: 'project',
        method: 'GET',
        headers: {
          userID: '86',
        },
      }),
      providesTags: ['Project'],
    }),
    getAllUsers: builder.query<Array<User>, void>({
      query: () => ({
        url: 'user',
        method: 'GET',
      }),
    }),
    addIssue: builder.mutation<NewIssueResponseInterface, NewIssueInterface>({
      query: (body) => ({
        url: 'issue',
        method: 'POST',
        body: body,
        headers: {
          userID: '86',
        },
      }),
      invalidatesTags: ['Issue'],
    }),
    addProject: builder.mutation<
      NewProjectResponseInterface,
      NewProjectInterface
    >({
      query: (body) => ({
        url: 'project',
        method: 'POST',
        body: body,
        headers: {
          userid: '86',
        },
      }),
      invalidatesTags: ['Project'],
    }),
  }),
});

export const {
  useGetAllIssuesForProjectQuery,
  useGetAllProjectsQuery,
  useGetAllUsersQuery,
  useAddIssueMutation,
  useAddProjectMutation,
} = issueApi;
