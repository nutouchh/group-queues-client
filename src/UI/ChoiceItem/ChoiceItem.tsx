import { FC } from 'react';
import './choiceItem.scss';

/**
 * List item with ability to chose it
 * @param active - add active class
 */
const ChoiceItem: FC<{
	text: string;
	active?: boolean;
	onClick: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}> = ({ text, active, onClick }) => {
	return (
		<li
			className={`choice-item small-title${active ? ' active' : ''}`}
			onClick={onClick}
		>
			{text}
		</li>
	);
};

export default ChoiceItem;
