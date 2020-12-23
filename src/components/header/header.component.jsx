import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

const Header = () => {
	const [current, setCurrent] = useState('home');

	useEffect(() => {
		if (window.location.pathname === '/create') {
			setCurrent('create');
		}
	}, [window.location.pathname]);

	const handleClick = (e) => {
		setCurrent(e.key);
	};

	return (
		<Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
			<Menu.Item key="home">
				<Link to="/">Home</Link>
			</Menu.Item>
			<Menu.Item key="create">
				<Link to="/create">Create Todo</Link>
			</Menu.Item>
		</Menu>
	);
};

export default Header;
