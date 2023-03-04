import { FC, useEffect } from 'react';
import { useTypedDispatch, useTypedSelector } from '../../../../store/store';
import {
	setActiveSubject,
	setActiveSubjectId,
} from '../../../../store/subjects/subjectsSlice';
import { ChoiceItem } from '../../../../UI/ChoiceItem/ChoiceItem';
import {
	useGetSubjectByIdQuery,
	useGetSubjectsQuery,
	usePutSubjectByIdMutation,
} from '../../api/subjectsApi';
import './subjectsList.scss';

const SubjectsList: FC = () => {
	const { data: subjects } = useGetSubjectsQuery();
	const activeId = useTypedSelector(state => state.subjects.activeId);
	const activeSubject = useTypedSelector(
		state => state.subjects.activeSubject
	);

	const [putActiveSubject] = usePutSubjectByIdMutation();
	const { data: fetchedActiveSubject, refetch } =
		useGetSubjectByIdQuery(activeId);

	const dispatch = useTypedDispatch();

	const onChange = (id: number): void => {
		dispatch(setActiveSubjectId(id));
	};

	useEffect(() => {
		refetch();
	}, [activeId]);

	useEffect(() => {
		if (fetchedActiveSubject) {
			dispatch(setActiveSubject(fetchedActiveSubject));
		}
	}, [fetchedActiveSubject]);

	useEffect(() => {
		if (activeSubject) {
			putActiveSubject(activeSubject);
		}
	}, [activeSubject]);

	return (
		<ul className='subjects-list'>
			{subjects
				? subjects.map(({ id, name }, i) => (
						<ChoiceItem
							text={name}
							active={id == activeId}
							key={id}
							onClick={() => onChange(id)}
						></ChoiceItem>
				  ))
				: null}
		</ul>
	);
};

export default SubjectsList;
