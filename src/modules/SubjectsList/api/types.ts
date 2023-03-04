import { StudentStatus } from '../../StudentsList';

interface ISubjectStudentsData {
	id: number;
	status: StudentStatus;
}

export interface ISubject {
	name: string;
	id: number;
	studentsData: ISubjectStudentsData[];
}
