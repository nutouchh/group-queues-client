import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ISubjectState } from './types';
import { ISubject } from '../../modules/SubjectsList';

/**
 * @property activeSubject: chosen subject's data
 * @property activeId: chosen subject's id
 */
const initialState: ISubjectState = {
	activeSubject: undefined,
	activeId: 0,
};

// slice with necessary local state for subjects
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
