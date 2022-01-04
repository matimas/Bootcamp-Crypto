import React from 'react';
import { Spin } from 'antd';
const Loader = () => {
	return (
		<div className='spinner'>
			<Spin size='large' />
		</div>
	);
};

export default Loader;
