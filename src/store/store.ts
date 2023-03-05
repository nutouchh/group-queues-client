import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { studentsApi } from '../modules/StudentsList';
import { subjectsApi } from '../modules/SubjectsList';
import studentsSlice from './students/studentsSlice';
import subjectsSlice from './subjects/subjectsSlice';

export const store = configureStore({
	// 2 reducers for local 'slice' state
	// and 2 reducers for 'api' state
	reducer: {
		subjects: subjectsSlice,
		students: studentsSlice,
		[studentsApi.reducerPath]: studentsApi.reducer,
		[subjectsApi.reducerPath]: subjectsApi.reducer,
	},

	// middlewares for apis' stable work
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(
			studentsApi.middleware,
			subjectsApi.middleware
		),

	devTools: true,
});

// typed variants of state / dispatch / selector
export type TypedState = ReturnType<typeof store.getState>;
export type TypedDispatch = typeof store.dispatch;

export const useTypedDispatch: () => TypedDispatch = useDispatch;
export const useTypedSelector: TypedUseSelectorHook<TypedState> = useSelector;
