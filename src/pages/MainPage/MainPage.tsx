import { FC } from 'react';
import './mainPage.scss';
import Header from '../../components/Header/Header';
import MainPageContent from '../../components/MainPageContent/MainPageContent';

export const MainPage: FC = () => {
	return (
		<div>
			<Header />
			<main>
				<MainPageContent />
			</main>
		</div>
	);
};
