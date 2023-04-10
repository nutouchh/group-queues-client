import { bgcolor } from '@mui/system';
import { FC } from 'react';

const Block: FC<{
	name: string;
	descr: string;
	bgColor?: 'primary' | 'info' | 'danger';
	prefixBlock?: {
		text: string;
		color: 'green' | 'orange';
	};
}> = ({ descr, name, bgColor, prefixBlock }) => {
	let backgroundColor: string;
	switch (bgColor) {
		case 'info':
			backgroundColor = '#c5e3f5';
			break;
		case 'danger':
			backgroundColor = '#f7cac6';
			break;
		default:
			backgroundColor = 'antiquewhite';
	}

	let prefixColor: string;
	switch (prefixBlock?.color) {
		case 'orange':
			prefixColor = '#cd7e3a';
			break;
		default:
			prefixColor = '#248331';
	}

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
				{prefixBlock ? (
					<div
						style={{
							backgroundColor: '#fff',
							padding: '5px 7px',
							fontSize: '20px',
							borderRadius: '5px',
							fontWeight: '700',
							color: prefixColor,
						}}
					>
						{prefixBlock.text}
					</div>
				) : null}
				<span style={{ fontSize: '20px' }}>
					<strong>{name}</strong>
				</span>
				<i style={{ fontSize: '20px' }}>&mdash;</i>
				<span style={{ fontSize: '20px' }}>{descr}</span>
			</div>
		</div>
	);
};

export default Block;
