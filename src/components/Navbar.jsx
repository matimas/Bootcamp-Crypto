import React, { useState, useEffect } from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import {
	HomeOutlined,
	BulbOutlined,
	FundOutlined,
	MenuOutlined,
	LoginOutlined,
} from '@ant-design/icons';

import icon from '../images/cryptocurrency.jpg';
const Navbar = () => {
	const [activeMenu, setActivMenu] = useState(true);
	const [screenSize, setScreenSize] = useState(null);

	useEffect(() => {
		const handleResize = () => setScreenSize(window.innerWidth);

		window.addEventListener('resize', handleResize);

		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		if (screenSize < 768) {
			setActivMenu(false);
		} else {
			setActivMenu(true);
		}
	}, [screenSize]);

	return (
		<div className='nav-container'>
			<div className='logo-container'>
				<Avatar src={icon} size='large' />
				<Typography.Title level={2} className='logo'>
					<Link to='/'>Mativerse</Link>
				</Typography.Title>
				<Button
					className='menu-control-container'
					onClick={() => setActivMenu(!activeMenu)}
				>
					<MenuOutlined />
				</Button>
			</div>
			{activeMenu && (
				<Menu theme='dark' className='menu-container'>
					<Menu.Item icon={<HomeOutlined />} key='home'>
						<Link to='/'>Home</Link>
					</Menu.Item>
					<Menu.Item icon={<FundOutlined />} key='cryptocurrencies'>
						<Link to='/cryptocurrencies'>Cryptocurrencies</Link>
					</Menu.Item>
					<Menu.Item icon={<BulbOutlined />} key='news'>
						<Link to='/news'>News</Link>
					</Menu.Item>
					<Menu.Item icon={<LoginOutlined />} key='login'>
						<Link to='/login'>Login</Link>
					</Menu.Item>
				</Menu>
			)}
		</div>
	);
};

export default Navbar;
