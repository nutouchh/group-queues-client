import {
	subjectsApi,
	usePutSubjectByIdMutation,
	usePutStudentDataBySubjectIdMutation,
} from './api/subjectsApi';
import SubjectsList from './components/SubjectsList/SubjectsList';
import { ISubject, ISubjectStudentsData } from './api/types';

export {
	SubjectsList,
	subjectsApi,
	usePutSubjectByIdMutation,
	usePutStudentDataBySubjectIdMutation,
};

export type { ISubject, ISubjectStudentsData };
