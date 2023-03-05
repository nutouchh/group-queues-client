import { FC, useEffect } from 'react';
import { useTypedDispatch, useTypedSelector } from '../../../../store/store';
import {
	setActiveSubject,
	setActiveSubjectId,
} from '../../../../store/subjects/subjectsSlice';
import ChoiceItem from '../../../../UI/ChoiceItem/ChoiceItem';
import {
	useGetSubjectByIdQuery,
	useGetSubjectsQuery,
	usePutSubjectByIdMutation,
} from '../../api/subjectsApi';
import './subjectsList.scss';

/**
 * Component to render list of subjects
 */
const SubjectsList: FC = () => {
	// get 'slice' state
	const activeId = useTypedSelector(state => state.subjects.activeId);
	const activeSubject = useTypedSelector(
		state => state.subjects.activeSubject
	);

	// get 'api' data
	const { data: subjects } = useGetSubjectsQuery();
	const [putActiveSubject] = usePutSubjectByIdMutation();
	const { data: fetchedActiveSubject, refetch: fetchActiveSubject } =
		useGetSubjectByIdQuery(activeId);

	// get dispatch
	const dispatch = useTypedDispatch();

	/**
	 * @param id clicked subject id
	 */
	const onChange = (id: number): void => {
		dispatch(setActiveSubjectId(id));
	};

	// when active id changes we fetch new subject data
	useEffect(() => {
		fetchActiveSubject();
	}, [activeId]);

	// when subject data changes we set them to local state
	useEffect(() => {
		if (fetchedActiveSubject) {
			dispatch(setActiveSubject(fetchedActiveSubject));
		}
	}, [fetchedActiveSubject]);

	// when user changes local subject data we send them to the server
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
