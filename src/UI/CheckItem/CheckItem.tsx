import { FC } from 'react';
import Icons from '../Icons/Icons';
import './checkItem.scss';
import { motion } from 'framer-motion';
import { StudentStatus } from '../../modules/StudentsList/api/types';
import { Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';

const CheckItem: FC<{
	text: string;
	canBeChecked?: boolean;
	onClick: () => void;
	status?: StudentStatus;
	onStatusChange?: (e: SelectChangeEvent) => void;
}> = ({ canBeChecked, text, onClick, status, onStatusChange }) => {
	let statusClassName = '';
	if (status) {
		switch (status) {
			case StudentStatus.PASSED:
				statusClassName = 'green-light';
				break;

			case StudentStatus.SKIP_AHEAD:
				statusClassName = 'primary-light';
				break;

			default:
				statusClassName = 'light';
		}
	}

	return (
		<motion.li layout transition={{ duration: 0.5 }} className='check-item'>
			<span className='check-item__name'>{text}</span>
			<div className='check-item__right'>
				{status ? (
					<FormControl variant='standard' sx={{ m: 1, minWidth: 180 }}>
						<Select
							value={status}
							onChange={onStatusChange}
							displayEmpty
							inputProps={{ 'aria-label': 'Without label' }}
							className={statusClassName}
						>
							<MenuItem
								value={StudentStatus.PASSED}
								className='set-green-dark'
							>
								{StudentStatus.PASSED}
							</MenuItem>
							<MenuItem
								value={StudentStatus.SKIP_AHEAD}
								className='set-primary-dark'
							>
								{StudentStatus.SKIP_AHEAD}
							</MenuItem>
							<MenuItem value={StudentStatus.WAITING}>
								{StudentStatus.WAITING}
							</MenuItem>
						</Select>
					</FormControl>
				) : null}
				{canBeChecked ? <Icons.getCheck onClick={onClick} /> : null}
			</div>
		</motion.li>
	);
};

export default CheckItem;
