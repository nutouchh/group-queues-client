import { FC } from 'react';
import './mainPage.scss';
import Header from '../../components/Header/Header';
import MainPageContent from '../../components/MainPageContent/MainPageContent';

const MainPage: FC = () => {
	return (
		<div>
			<Header />
			<main>
				<MainPageContent />
			</main>
		</div>
	);
};

export default MainPage;
