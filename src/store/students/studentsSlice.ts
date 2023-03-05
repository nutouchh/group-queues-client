import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IStudentState } from './types';
import { IStudent } from '../../modules/StudentsList';

/**
 * @property list: raw students list
 */
const initialState: IStudentState = {
	list: [],
};

const studentsSlice = createSlice({
	name: 'subjects',
	initialState,
	reducers: {},
});

export default studentsSlice.reducer;
