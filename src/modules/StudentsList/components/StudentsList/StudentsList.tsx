import { SelectChangeEvent } from '@mui/material/Select';
import { FC } from 'react';
import changeName from '../../../../service/changeName';
import { useTypedDispatch, useTypedSelector } from '../../../../store/store';
import { setActiveSubject } from '../../../../store/subjects/subjectsSlice';
import CheckItem from '../../../../UI/CheckItem/CheckItem';
import {
	ISubjectStudent,
	ISubjectStudentFullData,
	usePutStudentDataBySubjectIdMutation,
	usePutSubjectByIdMutation,
} from '../../../SubjectsList';
import { StudentStatus } from '../../api/types';
import './studentsList.scss';

const StudentsList: FC = () => {
	// get 'slice' state
	const activeSubject = useTypedSelector(
		state => state.subjects.activeSubject
	);
	const students = activeSubject?.students;

	// get 'api' data
	const [putSubject] = usePutSubjectByIdMutation();
	const [putSubjectStudent] = usePutStudentDataBySubjectIdMutation();

	// get dispatch
	const dispatch = useTypedDispatch();

	/**
	 * move checked student to the end of the list and change their status to default
	 * @param students rendered students
	 * @param id checked student's id
	 */
	const onCheck = (students: ISubjectStudentFullData[], id: number) => {
		if (activeSubject) {
			const studentsForServer: ISubjectStudent[] = [];
			const studentsForClient: ISubjectStudentFullData[] = [];

			// use forEach to combine filter and map
			// we need to create from ISubjectStudentFullData[] -> ISubjectStudent[]
			students.forEach(({ student, status }, i) => {
				if (student.id != id) {
					studentsForServer.push({ studentId: student.id, status });
					studentsForClient.push({ student, status });
				}
			});

			const checkedStudentData: ISubjectStudentFullData | undefined =
				students.find(({ student }) => student.id == id);

			if (checkedStudentData) {
				studentsForServer.push({
					studentId: checkedStudentData.student.id,
					status: 'WAITING',
				});
				studentsForClient.push({
					student: checkedStudentData.student,
					status: 'WAITING',
				});
			}

			// update state and send data to the server
			const newSubjectForServer = {
				...activeSubject,
				students: studentsForServer,
			};
			const newSubjectForClient = {
				...activeSubject,
				students: studentsForClient,
			};
			putSubject(newSubjectForServer);
			dispatch(setActiveSubject(newSubjectForClient));
		}
	};

	/**
	 * change student's status
	 * @param students rendered students
	 * @param index student's index in array students
	 */
	const onStatusChange = (
		e: SelectChangeEvent,
		students: ISubjectStudentFullData[],
		studentId: number
	) => {
		if (activeSubject) {
			const targetStatus = e.target.value as keyof typeof StudentStatus;

			// mapping through students and edit status of student with {index}
			const newStudents: ISubjectStudentFullData[] = students.map(
				studentsData => {
					if (studentsData.student.id != studentId) {
						return studentsData;
					}

					return {
						student: studentsData.student,
						status: targetStatus,
					};
				}
			);

			// update state and send data to the server
			putSubjectStudent({
				status: targetStatus,
				studentId,
				subjectId: activeSubject.id,
			});
			dispatch(
				setActiveSubject({
					...activeSubject,
					students: newStudents,
				})
			);
		}
	};

	return (
		<ul className='students-list'>
			{students
				? students.map(({ status, student }, i) => (
						<CheckItem
							text={changeName(student.name)}
							key={student.id}
							canBeChecked={i < 3}
							onCheck={() => onCheck(students, student.id)}
							status={status}
							onStatusChange={(e: SelectChangeEvent) =>
								onStatusChange(e, students, student.id)
							}
						></CheckItem>
				  ))
				: null}
		</ul>
	);
};

export default StudentsList;
