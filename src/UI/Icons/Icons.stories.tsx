import type { Meta, StoryObj } from '@storybook/react';

import Icons from './Icons';

const iconsComponent = () => (
	<ul style={{ display: 'flex' }}>
		<Icons.getCheck width={40} />
	</ul>
);

const meta = {
	title: 'UI/Icons',
	component: iconsComponent,
} satisfies Meta<typeof Icons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllIcons: Story = {};
