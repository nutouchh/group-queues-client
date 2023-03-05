import type { Meta, StoryObj } from '@storybook/react';

import ChoiceItem from './ChoiceItem';

const meta = {
	title: 'ChoiceItem',
	component: ChoiceItem,
} satisfies Meta<typeof ChoiceItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		text: 'Test',
	},
};
