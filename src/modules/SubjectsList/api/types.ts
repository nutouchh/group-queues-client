import { IStudent, StudentStatus } from '../../StudentsList';

export interface ISubjectStudent {
	studentId: number;
	status: keyof typeof StudentStatus;
}

export interface ISubject {
	name: string;
	id: number;
	students: ISubjectStudent[];
}

export interface ISubjectStudentFullData {
	student: IStudent;
	status: keyof typeof StudentStatus;
}

export interface ISubjectFullData {
	name: string;
	id: number;
	students: ISubjectStudentFullData[];
}

export interface IPutSubjectStudentData {
	subjectId: number;
	studentId: number;
	status: keyof typeof StudentStatus;
}
