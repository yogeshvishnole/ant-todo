import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header } from './components';
import { HomePage, CreateTodoPage } from './pages';
import 'antd/dist/antd.css';
import './app.css';

const App = () => {
	return (
		<React.Fragment>
			<Header />
			<Switch>
				<Route path="/" exact component={HomePage} />
				<Route path="/create" exact component={CreateTodoPage} />
			</Switch>
		</React.Fragment>
	);
};

export default App;
