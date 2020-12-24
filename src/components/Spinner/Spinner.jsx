import React from 'react'

import styles from './spinner.module.css'
import img from '../../loading.svg'

const Spinner = () => {
	return (
		<div className={styles.spinner}>
			<div className={styles.container}>
				<img 
					src={img} 
					alt="Loading..." 
					className={styles.image}
			/>
			</div>
		</div>
	)
}


export default Spinner