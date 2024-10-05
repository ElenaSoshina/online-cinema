import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/screens/Home'
import NotFound from '../components/screens/NotFound'

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	)
}

export default AppRoutes
