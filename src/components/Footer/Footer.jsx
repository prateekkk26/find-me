import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
	return (
		<footer>
			<div className={styles.container}>
				<p>
					Copyright &copy; - {new Date().getFullYear()}. Created by Prateek Rawat.
				</p>
			</div>
		</footer>
	)
}

export default Footer