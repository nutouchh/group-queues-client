import { FC } from 'react';
import './mainPage.scss';
import Header from '../../components/Header/Header';
import MainPageContent from '../../components/MainPageContent/MainPageContent';

const MainPage: FC = () => {
	return (
		<>
			<Header />
			<main>
				<MainPageContent />
			</main>
		</>
	);
};

export default MainPage;
