import { FC, ReactNode } from 'react';

const BlocksList: FC<{
	children?: ReactNode;
}> = ({ children }) => {
	return (
		<div
			style={{
				display: 'inline-flex',
				flexDirection: 'column',
				gap: '10px',
			}}
		>
			{children}
		</div>
	);
};

export default BlocksList;
