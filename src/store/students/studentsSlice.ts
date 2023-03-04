import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IStudent } from '../../modules/StudentsList/api/types';
import { IStudentState } from './types';

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
