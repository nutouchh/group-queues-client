import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { ISubject } from './types';

const subjectsApi = createApi({
	reducerPath: 'subjectsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/subjects' }),
	endpoints: builder => ({
		getSubjects: builder.query<ISubject[], void>({
			query: () => '',
		}),
		getSubjectById: builder.query<ISubject, number>({
			query: id => `/${id}`,
		}),
		postSubjectById: builder.mutation<void, { data: ISubject; id: number }>({
			query: ({ data, id }) => ({
				url: `/${id}`,
				method: 'PUT',
				body: data,
			}),
		}),
	}),
});

export const {
	useGetSubjectsQuery,
	useGetSubjectByIdQuery,
	reducer: subjectsReducer,
	reducerPath: subjectsReducerPath,
	middleware: subjectsMiddleware,
} = subjectsApi;
