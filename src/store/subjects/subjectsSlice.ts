import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ISubjectState } from './types';
import { ISubject } from '../../modules/SubjectsList';

const initialState: ISubjectState = {
	activeSubject: undefined,
	activeId: 0,
};

const subjectsSlice = createSlice({
	name: 'subjects',
	initialState,
	reducers: {
		setActiveSubject(state, action: PayloadAction<ISubject>) {
			state.activeSubject = action.payload;
		},
		setActiveSubjectId(state, action: PayloadAction<number>) {
			state.activeId = action.payload;
		},
	},
});

export const { setActiveSubject, setActiveSubjectId } = subjectsSlice.actions;
export default subjectsSlice.reducer;
