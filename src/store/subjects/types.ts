export interface ISubject {
	name: string;
	id: number;
	studentsData: number[];
}

export interface ISubjectState {
	list: ISubject[];
	activeId: number;
}
