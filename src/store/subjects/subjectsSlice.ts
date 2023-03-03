import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ISubject, ISubjectState } from './types';

const initialState: ISubjectState = {
	list: [
		{ name: 'Предмет 1', id: 0, studentsData: [0, 1, 2, 3, 4] },
		{ name: 'Предмет 2', id: 1, studentsData: [0, 1, 2, 3, 4] },
		{ name: 'Предмет 3', id: 2, studentsData: [0, 1, 2, 3, 4] },
		{ name: 'Предмет 4', id: 3, studentsData: [0, 1, 2, 3, 4] },
		{ name: 'Предмет 5', id: 4, studentsData: [0, 1, 2, 3, 4] },
	],
	activeId: 0,
};

const subjectsSlice = createSlice({
	name: 'subjects',
	initialState,
	reducers: {
		setSubjects(state, action: PayloadAction<ISubject[]>) {
			state.list = action.payload;
		},
		setActiveSubject(state, action: PayloadAction<number>) {
			state.activeId = action.payload;
		},
	},
});

export const { setSubjects, setActiveSubject } = subjectsSlice.actions;
export default subjectsSlice.reducer;
