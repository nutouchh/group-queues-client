import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { ISubject } from './types';

export const subjectsApi = createApi({
	reducerPath: 'subjectsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/subjects' }),
	endpoints: builder => ({
		getSubjects: builder.query<ISubject[], void>({
			query: () => '',
		}),

		getSubjectById: builder.query<ISubject, number>({
			query: id => `/${id}`,
		}),

		putSubjectById: builder.mutation<void, ISubject>({
			query: data => ({
				url: `/${data.id}`,
				method: 'PUT',
				body: data,
			}),
		}),
	}),
});

export const {
	useGetSubjectsQuery,
	useGetSubjectByIdQuery,
	usePutSubjectByIdMutation,
} = subjectsApi;
