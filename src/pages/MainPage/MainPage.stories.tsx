import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

import MainPage from './MainPage';

const component = () => (
	<Provider store={store}>
		<MainPage />
	</Provider>
);

const meta = {
	title: 'pages/MainPage',
	component,
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {};
