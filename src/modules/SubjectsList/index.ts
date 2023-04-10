import {
	subjectsApi,
	usePutSubjectByIdMutation,
	usePutStudentDataBySubjectIdMutation,
} from './api/subjectsApi';
import SubjectsList from './components/SubjectsList/SubjectsList';
import {
	ISubjectFullData,
	ISubjectStudentFullData,
	ISubjectStudent,
	ISubject,
} from './api/types';

export {
	SubjectsList,
	subjectsApi,
	usePutSubjectByIdMutation,
	usePutStudentDataBySubjectIdMutation,
};

export type {
	ISubjectFullData,
	ISubject,
	ISubjectStudentFullData,
	ISubjectStudent,
};
