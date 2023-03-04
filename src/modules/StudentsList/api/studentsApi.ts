import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IStudent } from './types';

export const studentsApi = createApi({
	reducerPath: 'studentsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/students' }),
	endpoints: builder => ({
		getStudents: builder.query<IStudent[], void>({
			query: () => ``,
		}),
	}),
});

export const { useGetStudentsQuery } = studentsApi;
