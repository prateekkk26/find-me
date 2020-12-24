import React from 'react'

import styles from './notfound.module.css'
import Layout from '../Layout/Layout.jsx'

const NotFound = () => {
	return (
		<Layout>
			<div className={styles.error}>
				<div className={styles.container}>
					<h1>404 Page not found</h1>
				</div>
			</div>
		</Layout>
	)
}

export default NotFound