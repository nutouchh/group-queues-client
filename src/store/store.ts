import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { studentsApi } from '../modules/StudentsList';
import studentsSlice from './students/studentsSlice';
import subjectsSlice from './subjects/subjectsSlice';
import {
	subjectsReducer,
	subjectsReducerPath,
	subjectsMiddleware,
} from '../modules/SubjectsList';

export const store = configureStore({
	reducer: {
		subjects: subjectsSlice,
		students: studentsSlice,
		[studentsApi.reducerPath]: studentsApi.reducer,
		[subjectsReducerPath]: subjectsReducer,
	},

	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(studentsApi.middleware, subjectsMiddleware),

	devTools: true,
});

export type TypedState = ReturnType<typeof store.getState>;
export type TypedDispatch = typeof store.dispatch;

export const useTypedDispatch: () => TypedDispatch = useDispatch;
export const useTypedSelector: TypedUseSelectorHook<TypedState> = useSelector;
