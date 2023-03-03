import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { studentsApi } from '../modules/StudentsList';
import studentsSlice from './students/studentsSlice';
import subjectsSlice from './subjects/subjectsSlice';

export const store = configureStore({
	reducer: {
		subjects: subjectsSlice,
		students: studentsSlice,
		[studentsApi.reducerPath]: studentsApi.reducer,
	},

	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(studentsApi.middleware),
});

export type TypedState = ReturnType<typeof store.getState>;
export type TypedDispatch = typeof store.dispatch;

export const useTypedDispatch: () => TypedDispatch = useDispatch;
export const useTypedSelector: TypedUseSelectorHook<TypedState> = useSelector;
