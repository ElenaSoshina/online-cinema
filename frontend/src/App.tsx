import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import AppRoutes from './routes'

function App() {
	return (
		<div className="App">
			<Router>
				<header className="App-header">
					<AppRoutes />
				</header>
			</Router>
		</div>
	)
}

export default App
