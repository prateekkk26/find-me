import React, {useContext} from 'react'

import AlertContext from '../../context/alert/alertContext';

import styles from './alert.module.css'

const Alert = () => {

	const alertContext = useContext(AlertContext);
	
	const { alert } = alertContext

	return (
		alert !== null && (
			<div className={styles.alert}>
				<div className={styles.container}>
					<i className="fa fa-info-circle" />{alert.msg}
				</div>
			</div>
		)
	)
}


export default Alert