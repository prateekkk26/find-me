import React from 'react'

import Navbar from '../Navbar/Navbar.jsx'
import Footer from '../Footer/Footer.jsx'

const Layout = ({children}) => {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	)
}

export default Layout