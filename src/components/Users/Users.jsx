import React, { useContext } from 'react';

import UserItem from '../UserItem/UserItem.jsx';
import Spinner from '../Spinner/Spinner.jsx';
import GithubContext from '../../context/github/githubContext';
import styles from './users.module.css'

const Users = () => {
	const githubContext = useContext(GithubContext);

	const { loading, users } = githubContext;

	if (loading) {
		return <Spinner />
	} 
	else {
		return(
			<div className={styles.users}>
				<div className={styles.container}>
					{users.map(user => (
						<UserItem key={user.id} user={user} />
					))}
				</div>
			</div>
		)
	}
}


export default Users