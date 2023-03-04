export enum StudentStatus {
	SKIP_AHEAD = 'пропускаю вперёд',
	PASSED = 'работа сдана',
	WAITING = 'встал в очередь',
}

export interface IStudent {
	name: string;
	id: number;
}

export type IStudentWithData = {
	status: keyof typeof StudentStatus;
} & IStudent;
