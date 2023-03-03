import { FC } from 'react';
import { useTypedSelector } from '../../../../store/store';
import { ChoiceItem } from '../../../../UI/ChoiceItem/ChoiceItem';
import './subjectsList.scss';
import { setActiveSubject } from '../../../../store/subjects/subjectsSlice';
import { useTypedDispatch } from '../../../../store/store';

const SubjectsList: FC = () => {
	const subjects = useTypedSelector(state => state.subjects.list);
	const activeId = useTypedSelector(state => state.subjects.activeId);
	const dispatch = useTypedDispatch();

	const onChange = (id: number): void => {
		dispatch(setActiveSubject(id));
	};

	return (
		<ul className='subjects-list'>
			{subjects.map(({ id, name }, i) => (
				<ChoiceItem
					text={name}
					active={id == activeId}
					key={id}
					onClick={() => onChange(id)}
				></ChoiceItem>
			))}
		</ul>
	);
};

export default SubjectsList;
