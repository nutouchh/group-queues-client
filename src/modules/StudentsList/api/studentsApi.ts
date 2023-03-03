import { Api, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IStudent } from './types';

export const studentsApi = createApi({
	reducerPath: 'studentsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
	endpoints: builder => ({
		getStudents: builder.query<IStudent[], void>({
			query: () => `/students`,
		}),
	}),
});

export const { useGetStudentsQuery } = studentsApi;
