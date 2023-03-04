import SubjectsList from './components/SubjectsList/SubjectsList';
import {
	subjectsReducer,
	subjectsReducerPath,
	subjectsMiddleware,
} from './api/subjectsApi';
import { ISubject } from './api/types';

export {
	SubjectsList,
	subjectsReducerPath,
	subjectsReducer,
	subjectsMiddleware,
};

export type { ISubject };
