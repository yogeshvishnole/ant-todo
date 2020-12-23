import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux';

import App from './app';
import GlobalStyle from './globalStyles';

ReactDOM.render(
	<Provider store={store}>
		<GlobalStyle />
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.querySelector('#root')
);
