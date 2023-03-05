import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IStudentState } from './types';
import { IStudent } from '../../modules/StudentsList';

const initialState: IStudentState = {
	list: [],
};

const studentsSlice = createSlice({
	name: 'subjects',
	initialState,
	reducers: {
		setStudents(state, action: PayloadAction<IStudent[]>) {
			state.list = action.payload;
		},
	},
});

export const { setStudents } = studentsSlice.actions;
export default studentsSlice.reducer;
