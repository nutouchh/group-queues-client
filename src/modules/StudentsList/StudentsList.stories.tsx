import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

import StudentsList from './components/StudentsList/StudentsList';

const component = () => (
	<Provider store={store}>
		<StudentsList />
	</Provider>
);

const meta = {
	title: 'modules/StudentsList',
	component,
} satisfies Meta<typeof StudentsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {};
