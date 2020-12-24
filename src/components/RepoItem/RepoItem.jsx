import React from 'react'

import styles from './repoitem.module.css'

const RepoItem = ({repo}) => {
	return (
		<div className={styles.repo}>
			<div className={styles.titleContainer}>
				<h3>
					<a href={repo.html_url} target="_blank" className={styles.title}>
						{repo.name}
					</a>
				</h3>
			</div>
			<div className={styles.repoInfo}>
				<p className={`textWhite bgBlack ${styles.data}`}>Stars: {repo.stargazers_count}</p>
				<p className={`textWhite bgBlack ${styles.data}`}>Forks: {repo.forks_count}</p>
				<p className={`textWhite bgBlack ${styles.data}`}>Watchers: {repo.watchers_count}</p>
				{
					repo.language && <p className={`textWhite bgBlack ${styles.data}`}>
						Language: {repo.language}
					</p>
				}
			</div>
		</div>
	)
}

export default RepoItem