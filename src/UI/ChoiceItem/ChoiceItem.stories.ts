import type { Meta, StoryObj } from '@storybook/react';

import ChoiceItem from './ChoiceItem';

const meta = {
	title: 'UI/ChoiceItem',
	component: ChoiceItem,
} satisfies Meta<typeof ChoiceItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
	args: {
		text: 'Example',
		active: true,
	},
};
