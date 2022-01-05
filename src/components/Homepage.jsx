import React from 'react';
import millify from 'millify';
import { Typography, Row, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';
import { Cryptocurrencies, News } from '../components';
import Loader from './Loader';

const { Title } = Typography;

const Homepage = () => {
	const { data, isFetching } = useGetCryptosQuery(8);
	const globalStats = data?.data?.stats;

	if (isFetching) return <Loader />;

	return (
		<>
			<Title level={2} className='heading'>
				Global Crypto Stats
			</Title>
			<div style={{ display: 'flex' }}>
				<Row>
					<Statistic
						style={{ marginRight: '1.5vw' }}
						title='Total Criptocurrencies'
						value={globalStats.total}
					/>
					<Statistic
						style={{ marginRight: '1.5vw' }}
						title='Total Excahnges'
						value={millify(globalStats.totalExchanges)}
					/>
					<Statistic
						style={{ marginRight: '1.5vw' }}
						title='Total Market cap'
						value={millify(globalStats.totalMarketCap)}
					/>
					<Statistic
						style={{ marginRight: '1.5vw' }}
						title='Total 24h Volume'
						value={millify(globalStats.total24hVolume)}
					/>
					<Statistic
						title='Total Markets'
						value={millify(globalStats.totalMarkets)}
					/>
				</Row>
			</div>
			<div className='home-heading-container'>
				<Title level={2} className='home-title'>
					Top 8 CryptoCurrencies in the world
				</Title>
				<Title level={3} className='show-more'>
					<Link to='/cryptocurrencies'>Show More Coins</Link>
				</Title>
			</div>
			<Cryptocurrencies simplified />
			<div className='home-heading-container'>
				<Title level={2} className='home-title'>
					Latest Crypto News
				</Title>
				<Title level={3} className='show-more'>
					<Link to='/news'>Show More News</Link>
				</Title>
			</div>
			<News simplified />
		</>
	);
};

export default Homepage;
