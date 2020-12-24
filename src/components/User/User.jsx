import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'

import Spinner from '../Spinner/Spinner.jsx'
import Layout from '../Layout/Layout.jsx'
import Repos from '../Repos/Repos.jsx'
import GithubContext from '../../context/github/githubContext'
import styles from './user.module.css'

const User = ({ match }) => {
	const githubContext = useContext(GithubContext);

	const { getUser, loading, user, repos, getUserRepos } = githubContext;

	useEffect(() => {
		getUser(match.params.login);
		getUserRepos(match.params.login);
	}, []);

	const {
		name,
		avatar_url,
		location,
		bio,
		blog,
		login,
		html_url,
		followers,
		following,
		public_repos,
		public_gists,
		company,
		created_at
	} = user

	const d = new Date(created_at);
	const year = d.getFullYear()
	const month = d.getMonth()
	const date = d.getDate()

	if(loading) return <Spinner />
	return (
		<Layout>
			<div className={styles.user}>
				<div className={styles.container}>
					<Link to="/" className={styles.link}>
						Back To Search
					</Link>
					<br />
					<div className={`${styles.header}`}>
						<p>{name}</p>
					</div>
					<div className={`${styles.userMain}`}>
						<div className={styles.flexItem}>
							<div className={styles.imageContainer}>
								<img src={avatar_url} alt={name} className={styles.profile} />
								<a href={html_url} target="_blank" className={styles.githubLink}>View Profile</a>								
							</div>

						</div>
						<div className={`${styles.flexItem}`}>
							<div className={styles.userData}>
								<p className={`textWhite bgGreen ${styles.data}`}>Public Repositories: {public_repos}</p>
								<p className={`textWhite bgBlack ${styles.data}`}>Public Gists: {public_gists}</p>
								<p className={`textWhite bgRed ${styles.data}`}>Followers: {followers}</p>
								<p className={`textWhite bgBlue ${styles.data} ${styles.lastItem}`}>Following: {following}</p>
							</div>
							<div className={styles.generalInfo}>
								{
									login && <div className={styles.infoItem}>
										<h3>Username:</h3>
										<p>{login}</p>
									</div>
								}
								{
									bio && <div className={styles.infoItem}>
										<h3>Bio:</h3>
										<p>{bio}</p>
									</div>
								}
								{
									blog && <div className={styles.infoItem}>
										<h3>Website/Blog:</h3>
										<p>{blog}</p>
									</div>
								}
								{
									company && <div className={styles.infoItem}>
										<h3>Company:</h3>
										<p>{company}</p>
									</div>
								}
								{
									location && <div className={styles.infoItem}>
										<h3>Location:</h3>
										<p>{location}</p>
									</div>
								}
								{
									created_at && <div className={styles.infoItem}>
										<h3>Member since:</h3>
										<p>{date} - {month} - {year}</p>
									</div>
								}
							</div>
						</div>
					</div>
					<Repos repos={repos} />
				</div>
			</div>
		</Layout>
	)
}

export default User