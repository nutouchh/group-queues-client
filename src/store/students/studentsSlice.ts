import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
	IStudent,
	IStudentState,
	StudentStatus,
} from '../../modules/StudentsList/api/types';

const initialState: IStudentState = {
	list: [
		{ name: 'Иванов Иван Иванович', id: 0, status: StudentStatus.WAITING },
		{ name: 'Петров Пётр Петрович', id: 1, status: StudentStatus.WAITING },
		{
			name: 'Сергеев Сергей Сергеевич',
			id: 2,
			status: StudentStatus.WAITING,
		},
		{
			name: 'Алексеев Алексей Алексеевич',
			id: 3,
			status: StudentStatus.WAITING,
		},
		{ name: '...', id: 4, status: StudentStatus.WAITING },
	],
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
