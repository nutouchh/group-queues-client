import { StudentStatus } from '../../StudentsList';

export interface ISubjectStudentsData {
	id: number;
	status: keyof typeof StudentStatus;
}

export interface ISubject {
	name: string;
	id: number;
	studentsData: ISubjectStudentsData[];
}
