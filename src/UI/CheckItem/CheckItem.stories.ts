import type { Meta, StoryObj } from '@storybook/react';

import CheckItem from './CheckItem';

const meta = {
	title: 'CheckItem',
	component: CheckItem,
} satisfies Meta<typeof CheckItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		text: 'Test',
		onCheck: () => {
			//
		},
	},
};
