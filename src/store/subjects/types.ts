import { ISubject } from '../../modules/SubjectsList';

export interface ISubjectState {
	activeSubject: ISubject | undefined;
	activeId: number;
}
