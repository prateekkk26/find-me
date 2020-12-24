import React from 'react'
import{ Link } from 'react-router-dom'

import styles from './useritem.module.css'

function UserItem({user: {login, avatar_url, html_url}}) {
	return (
		<div className={styles.userItem}>
			<div className={styles.container}>
				<div className={styles.imageContainer}>
					<img src={avatar_url} alt={login} className={styles.image} />
				</div>
				<h3>{login}</h3>
				<Link to={`/user/${login}`} className={styles.link}>
					<p>More</p>
				</Link>
			</div>
		</div>
	)
}

export default UserItem