import { FC, ReactNode } from 'react';

const ParamsList: FC<{
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

export default ParamsList;
