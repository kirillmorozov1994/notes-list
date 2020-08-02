import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Header from '../Header'
import MainPage from '../Pages/MainPage'
import EditPage from '../Pages/EditPage'

const App: React.FC = () => {
	return (
		<>
			<Header />
			<div className="container">
				<Switch>
					<Route path="/" exact component={MainPage} />
					<Route path="/:id" exact component={EditPage} />
					<Redirect to="/" />
				</Switch>
			</div>
		</>
	)
}

export default App
