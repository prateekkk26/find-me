import React from 'react'
import {Link} from 'react-router-dom'

import styles from './navbar.module.css'

const Navbar = () => {
	return (
		<nav className={`bgBlack textWhite ${styles.navbar}`}>
			<div className={styles.container}>
				<Link to="/" className={styles.logo}>
					<h1>Github Finder</h1>
				</Link>
			</div>
		</nav>
	)
}

export default Navbar