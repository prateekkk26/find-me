
import React from 'react'

import Layout from '../Layout/Layout'
import Search from '../Search/Search'
import Users from '../Users/Users'

const Home = () => {
	return (
		<Layout>		
			<Search />
			<Users />
		</Layout>
	)
}

export default Home