import { SelectChangeEvent } from '@mui/material/Select';
import { FC, useMemo } from 'react';
import changeName from '../../../../service/changeName';
import { useTypedDispatch, useTypedSelector } from '../../../../store/store';
import { setActiveSubject } from '../../../../store/subjects/subjectsSlice';
import CheckItem from '../../../../UI/CheckItem/CheckItem';
import { ISubjectStudentsData } from '../../../SubjectsList';
import { useGetStudentsQuery } from '../../api/studentsApi';
import { IStudentWithData, StudentStatus } from '../../api/types';
import './studentsList.scss';

const StudentsList: FC = () => {
	// get 'slice' state
	const activeSubject = useTypedSelector(
		state => state.subjects.activeSubject
	);

	// get 'api' data
	const { data: rawStudents } = useGetStudentsQuery();

	// get dispatch
	const dispatch = useTypedDispatch();

	/**
	 * create from raw students list students list "sorted" by data of active subject
	 * @depends_on [rawStudents, activeSubject]
	 */
	const sortedStudents = useMemo<IStudentWithData[] | undefined>(
		function (): IStudentWithData[] | undefined {
			if (!rawStudents || !activeSubject) {
				return undefined;
			}

			const newStudents: IStudentWithData[] = activeSubject.studentsData.map(
				student => {
					// create student from subject data
					const newStudent: IStudentWithData = {
						...student,
						name: '...',
					};

					// find name by id from raw students
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

	/**
	 * move checked student to the end of the list and change their status to default
	 * @param students rendered students
	 * @param id checked student's id
	 */
	const onCheck = (students: IStudentWithData[], id: number) => {
		if (activeSubject) {
			const newStudents: ISubjectStudentsData[] = [];

			// use forEach to combine filter and map
			// we need to create from IStudentWithData[] -> ISubjectStudentsData[]
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

			// update state (to send data to the server)
			dispatch(
				setActiveSubject({ ...activeSubject, studentsData: newStudents })
			);
		}
	};

	/**
	 * change student's status
	 * @param students rendered students
	 * @param index student's index in array students
	 */
	const onStatusChange = (
		e: SelectChangeEvent,
		students: IStudentWithData[],
		index: number
	) => {
		if (activeSubject) {
			const targetStatus = e.target.value as keyof typeof StudentStatus;

			// mapping through students and edit status of student with {index}
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

			// update state (to send data to the server)
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
							text={changeName('Белослудцев А. А.')}
							key={student.id}
							canBeChecked={i < 3}
							onCheck={() => onCheck(sortedStudents, student.id)}
							status={student.status}
							onStatusChange={(e: SelectChangeEvent) =>
								onStatusChange(e, sortedStudents, i)
							}
						></CheckItem>
				  ))
				: null}
		</ul>
	);
};

export default StudentsList;
