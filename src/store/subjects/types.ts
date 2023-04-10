import { ISubjectFullData } from '../../modules/SubjectsList';

export interface ISubjectState {
	activeSubject: ISubjectFullData | undefined;
	activeId: number;
}
