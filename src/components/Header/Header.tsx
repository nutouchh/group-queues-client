import { FC } from 'react';
import SubjectsList from '../../modules/SubjectsList/components/SubjectsList/SubjectsList';
import './header.scss';

const Header: FC = () => {
	return (
		<header className='header'>
			<SubjectsList></SubjectsList>
		</header>
	);
};

export default Header;
