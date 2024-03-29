import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

import SubjectsList from './components/SubjectsList/SubjectsList';

const component = () => (
	<Provider store={store}>
		<SubjectsList />
	</Provider>
);

const meta = {
	title: 'modules/SubjectsList',
	component,
} satisfies Meta<typeof SubjectsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {};
