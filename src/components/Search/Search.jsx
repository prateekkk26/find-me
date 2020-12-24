import React, { useState, useContext } from 'react'

import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

import styles from './search.module.css'

const Search = () => {
	const githubContext = useContext(GithubContext);
	const alertContext = useContext(AlertContext);

	const [text, setText] = useState('');

	const onChange = (e) => setText(e.target.value);

	const onSubmit = (e) => {
		e.preventDefault();
		if(text === '') {
			alertContext.setAlert('Please enter something')
		}
		else {
			githubContext.searchUsers(text);
			setText('');
		}
	}

	return (
		<div className={styles.search}>
			<form onSubmit={onSubmit} className={styles.form}>
				<input 
					type="text" 
					name="text" 
					placeholder="Search for the username" 
					value={text} 
					onChange={onChange} 
					className={styles.input}
				/>
				<input 
					type="submit" 
					value="Search" 
					className={`textWhite bgBlue ${styles.submit}`} 
				/>
				{githubContext.users.length > 0 && (
					<button 
						onClick={githubContext.clearUsers} 
						className={`textWhite bgBlack ${styles.clear}`}>Clear
					</button>
				)}
			</form>
		</div>
	)
}

export default Search