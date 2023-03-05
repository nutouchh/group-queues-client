import type { Meta, StoryObj } from '@storybook/react';

import CheckItem from './CheckItem';

const meta = {
	title: 'UI/CheckItem',
	component: CheckItem,
} satisfies Meta<typeof CheckItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
	args: {
		text: 'Example',
		canBeChecked: true,
		status: 'SKIP_AHEAD',
		onCheck: () => {
			//
		},
	},
};
