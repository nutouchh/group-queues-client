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
} from '../../api/subjectsApi';
import './subjectsList.scss';

const SubjectsList: FC = () => {
	const { data: subjects } = useGetSubjectsQuery();
	const activeId = useTypedSelector(state => state.subjects.activeId);
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
