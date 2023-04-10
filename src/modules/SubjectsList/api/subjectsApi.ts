import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IPutSubjectStudentData, ISubject, ISubjectFullData } from './types';

export const subjectsApi = createApi({
	reducerPath: 'subjectsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://n140935672385.fvds.ru:8080/api/subjects',
	}),
	endpoints: builder => ({
		getSubjects: builder.query<ISubject[], void>({
			query: () => '',
		}),

		getSubjectById: builder.query<ISubjectFullData, number>({
			query: id => `/${id}`,
		}),

		putSubjectById: builder.mutation<void, ISubject>({
			query: data => ({
				url: `/${data.id}`,
				method: 'PUT',
				body: data,
			}),
		}),

		putStudentDataBySubjectId: builder.mutation<void, IPutSubjectStudentData>(
			{
				query: data => ({
					url: `/${data.subjectId}/students/${data.studentId}`,
					method: 'PUT',
					body: data,
				}),
			}
		),
	}),
});

export const {
	useGetSubjectsQuery,
	useGetSubjectByIdQuery,
	usePutSubjectByIdMutation,
	usePutStudentDataBySubjectIdMutation,
} = subjectsApi;
