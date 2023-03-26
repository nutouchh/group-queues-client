import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IPutSubjectStudentData, ISubject } from './types';

export const subjectsApi = createApi({
	reducerPath: 'subjectsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/subjects' }),
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
				body: { name: data.name, studentsData: data.studentsData },
			}),
		}),

		putStudentDataBySubjectId: builder.mutation<void, IPutSubjectStudentData>(
			{
				query: data => ({
					url: `/${data.subjectId}/students/${data.studentId}`,
					method: 'PUT',
					body: { status: data.status },
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
