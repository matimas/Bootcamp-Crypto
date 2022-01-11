import React, { useState, useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { auth } from './services/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import {
	Navbar,
	Login,
	Homepage,
	Cryptocurrencies,
	News,
	CryptoDetails,
} from './components';
import './App.css';
const { Title } = Typography;
const App = () => {
	const [user, setUser] = useState({});

	useEffect(() => {
		onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});
	}, [user]);

	return (
		<div className='app'>
			<div className='navbar'>
				<Navbar />
			</div>
			<div className='main'>
				<Layout>
					<div className='routes'>
						<Switch>
							<Route exact path='/'>
								<Homepage />
							</Route>
							<Route exact path='/login'>
								<Login />
							</Route>
							<Route exact path='/news'>
								<News />
							</Route>
							<Route exact path='/cryptocurrencies'>
								<Cryptocurrencies />
							</Route>
							{user?.email ? (
								<Route exact path='/crypto/:coinId'>
									<CryptoDetails />
								</Route>
							) : (
								<Route>
									<Title
										level={2}
										style={{ textAlign: 'center', color: 'red' }}
									>
										To see the coin details you most to login!!
										<br />
										<Link to='/login'>Login</Link>
									</Title>
								</Route>
							)}
						</Switch>
					</div>
				</Layout>
				<div className='footer'>
					<Title level={5} style={{ color: 'white', textAlign: 'center' }}>
						MatiVerse
						<br />
						All rights reserved
					</Title>
					<Space>
						<Link to='/'>Home</Link>
						<Link to='/cryptocurrencies'>Cryptocurrencies</Link>
						<Link to='/news'>News</Link>
					</Space>
				</div>
			</div>
		</div>
	);
};

export default App;
