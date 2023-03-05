import { FC } from 'react';

const Param: FC<{
	name: string;
	descr: string;
	required?: boolean;
	isMethod?: boolean;
}> = ({ descr, name, required, isMethod }) => {
	const backgroundColor = required
		? '#f7cac6'
		: isMethod
		? '#c5e3f5'
		: 'antiquewhite';

	return (
		<div>
			<div
				style={{
					display: 'inline-flex',
					gap: '20px',
					alignItems: 'center',
					backgroundColor,
					borderRadius: '5px',
					padding: '10px',
				}}
			>
				<span style={{ fontSize: '20px' }}>
					<strong>{name}</strong>
				</span>
				<i style={{ fontSize: '20px' }}>&mdash;</i>
				<span style={{ fontSize: '20px' }}>{descr}</span>
			</div>
		</div>
	);
};

export default Param;
