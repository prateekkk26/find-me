import React from 'react'

import RepoItem from '../RepoItem/RepoItem.jsx'
import styles from './repos.module.css'

const Repos = ({repos}) => {
	return (
		<div className={styles.repos}>
			<p className={styles.title}>Latest repositories</p>
			<div className={styles.repositories}>
				{
					repos.map(repo => {
						return(
							<RepoItem key={repo.id} repo={repo} />
						)
					})
				}
			</div>
		</div>
	)
}

export default Repos