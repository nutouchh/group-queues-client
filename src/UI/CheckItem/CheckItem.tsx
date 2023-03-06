import { FC } from 'react';
import Icons from '../Icons/Icons';
import './checkItem.scss';
import { motion } from 'framer-motion';
import { StudentStatus } from '../../modules/StudentsList/api/types';
import { Select, MenuItem, FormControl } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';

/**
 *	List item with status and check label
 * @param canBeChecked - add check label
 * @param status - what StudentStatus to be set
 */
const CheckItem: FC<{
	text: string;
	canBeChecked?: boolean;
	onCheck?: () => void;
	status?: keyof typeof StudentStatus;
	onStatusChange?: (e: SelectChangeEvent) => void;
}> = ({ canBeChecked, text, onCheck, status, onStatusChange }) => {
	// set statuses' colors in drop-down menu
	let statusClassName = '';
	if (status) {
		switch (status) {
			case 'PASSED':
				statusClassName = 'green-light';
				break;

			case 'SKIP_AHEAD':
				statusClassName = 'primary-light';
				break;

			default:
				statusClassName = 'light';
		}
	}

	return (
		// motion.li is used to add animation after order changing
		<motion.li layout transition={{ duration: 0.5 }} className='check-item'>
			<span className='check-item__name title'>{text}</span>
			<div className='check-item__right'>
				{status ? (
					// FormControl is used to add drop-down menu
					<FormControl variant='standard' sx={{ m: 1 }}>
						<Select
							value={status}
							onChange={onStatusChange}
							displayEmpty
							inputProps={{ 'aria-label': 'Without label' }}
							className={statusClassName + ' small-title'}
						>
							<MenuItem
								value={'PASSED'}
								className='set-green-dark small-title'
							>
								{StudentStatus.PASSED}
							</MenuItem>
							<MenuItem
								value={'SKIP_AHEAD'}
								className='set-primary-dark small-title'
							>
								{StudentStatus.SKIP_AHEAD}
							</MenuItem>
							<MenuItem value={'WAITING'} className='small-title'>
								{StudentStatus.WAITING}
							</MenuItem>
						</Select>
					</FormControl>
				) : null}
				<div className='check-item__svg'>
					{canBeChecked && onCheck ? (
						<Icons.getCheck onClick={onCheck} />
					) : null}
				</div>
			</div>
		</motion.li>
	);
};

export default CheckItem;
