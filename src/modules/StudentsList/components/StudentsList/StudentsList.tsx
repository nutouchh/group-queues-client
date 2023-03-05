import { SelectChangeEvent } from '@mui/material/Select';
import { FC, useMemo } from 'react';
import { useTypedDispatch, useTypedSelector } from '../../../../store/store';
import { setActiveSubject } from '../../../../store/subjects/subjectsSlice';
import CheckItem from '../../../../UI/CheckItem/CheckItem';
import { ISubjectStudentsData } from '../../../SubjectsList';
import { useGetStudentsQuery } from '../../api/studentsApi';
import { IStudentWithData, StudentStatus } from '../../api/types';
import './studentsList.scss';

const StudentsList: FC = () => {
	const { data: rawStudents } = useGetStudentsQuery();
	const activeSubject = useTypedSelector(
		state => state.subjects.activeSubject
	);

	const dispatch = useTypedDispatch();

	const sortedStudents = useMemo<IStudentWithData[] | undefined>(
		function (): IStudentWithData[] | undefined {
			if (!rawStudents || !activeSubject) {
				return undefined;
			}

			const newStudents: IStudentWithData[] = activeSubject.studentsData.map(
				student => {
					const newStudent: IStudentWithData = {
						...student,
						name: '...',
					};

					const name = rawStudents.find(
						student => student.id == newStudent.id
					)?.name;

					if (name) {
						newStudent.name = name;
					}

					return newStudent;
				}
			);

			return newStudents;
		},
		[rawStudents, activeSubject]
	);

	const onCheck = (students: IStudentWithData[], id: number) => {
		if (activeSubject) {
			const newStudents: ISubjectStudentsData[] = [];

			students.forEach((student, i) => {
				if (student.id != id) {
					newStudents.push({ id: student.id, status: student.status });
				}
			});

			const checkedStudent: ISubjectStudentsData | undefined = students.find(
				student => student.id == id
			);

			if (checkedStudent) {
				newStudents.push({ id: checkedStudent.id, status: 'WAITING' });
			}

			dispatch(
				setActiveSubject({ ...activeSubject, studentsData: newStudents })
			);
		}
	};

	const onStatusChange = (
		students: IStudentWithData[],
		e: SelectChangeEvent,
		index: number
	) => {
		if (activeSubject) {
			const targetStatus = e.target.value as keyof typeof StudentStatus;

			const newStudents: ISubjectStudentsData[] = students.map(
				(student, i) => {
					if (i < index || i > index) {
						return {
							id: student.id,
							status: student.status,
						};
					}

					return {
						id: student.id,
						status: targetStatus,
					};
				}
			);

			dispatch(
				setActiveSubject({
					...activeSubject,
					studentsData: newStudents,
				})
			);
		}
	};

	return (
		<ul className='students-list'>
			{sortedStudents
				? sortedStudents.map((student, i) => (
						<CheckItem
							text={student.name}
							key={student.id}
							canBeChecked={i < 3}
							onCheck={() => onCheck(sortedStudents, student.id)}
							status={student.status}
							onStatusChange={(e: SelectChangeEvent) =>
								onStatusChange(sortedStudents, e, i)
							}
						></CheckItem>
				  ))
				: null}
		</ul>
	);
};

export default StudentsList;
