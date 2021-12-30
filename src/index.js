import React from 'react';
import ReactcDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

ReactcDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById('root'),
);
