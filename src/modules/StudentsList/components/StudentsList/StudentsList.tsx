import { FC } from 'react';
import { useTypedSelector } from '../../../../store/store';
import CheckItem from '../../../../UI/CheckItem/CheckItem';
import './studentsList.scss';
import { useTypedDispatch } from '../../../../store/store';
import { setStudents } from '../../../../store/students/studentsSlice';
import { IStudent, StudentStatus } from '../../api/types';
import { SelectChangeEvent } from '@mui/material/Select';
import { useGetStudentsQuery } from '../../api/studentsApi';

const StudentsList: FC = () => {
	const { data } = useGetStudentsQuery();

	const students = useTypedSelector(state => state.students.list);
	const subjectsStudentsIds = useTypedSelector(state => {
		return state.subjects.list[state.subjects.activeId];
	});
	const dispatch = useTypedDispatch();

	// const setSortedStudents = (students: IStudent[]) => {

	// }

	const onCheck = (id: number) => {
		const newStudents = students.filter(student => student.id != id);

		const checkedStudent = students.find(student => student.id == id);
		if (checkedStudent) {
			newStudents.push({ ...checkedStudent, status: StudentStatus.WAITING });
		}

		dispatch(setStudents(newStudents));
	};

	const onStatusChange = (e: SelectChangeEvent, i: number) => {
		const targetStatus = e.target.value;

		let studentStatus: string;
		for (studentStatus in StudentStatus) {
			if (
				studentStatus == 'SKIP_AHEAD' ||
				studentStatus == 'PASSED' ||
				studentStatus == 'WAITING'
			) {
				if (StudentStatus[studentStatus] == targetStatus) {
					const student = students[i];
					const newStudents: IStudent[] = [
						...students.slice(0, i),
						{ ...student, status: StudentStatus[studentStatus] },
						...students.slice(i + 1),
					];

					dispatch(setStudents(newStudents));

					break;
				}
			}
		}
	};

	return (
		<ul className='students-list'>
			{students.map((student, i) => (
				<CheckItem
					text={student.name}
					key={student.id}
					canBeChecked={i < 3}
					onClick={() => onCheck(student.id)}
					status={student.status}
					onStatusChange={(e: SelectChangeEvent) => onStatusChange(e, i)}
				></CheckItem>
			))}
		</ul>
	);
};

export default StudentsList;
