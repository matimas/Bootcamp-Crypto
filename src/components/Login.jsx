import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Typography } from 'antd';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase-config';

const { Text } = Typography;

const Login = () => {
	const [registerEmail, setRegisterEmail] = useState('');
	const [registerPassword, setRegisterPassword] = useState('');

	const register = async () => {
		try {
			const user = await createUserWithEmailAndPassword(
				auth,
				registerEmail,
				registerPassword,
			);
			console.log(user);
		} catch (error) {
			console.log(error.message);
		}
	};

	const onFinish = (values: any) => {
		console.log('Success:', values);
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<Form
			style={{
				height: '74.3vh',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				paddingLeft: '10vw',
			}}
			name='basic'
			labelCol={{ span: 8 }}
			wrapperCol={{ span: 16 }}
			initialValues={{ remember: true }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete='off'
		>
			<Form.Item style={{ textAlign: 'center', paddingLeft: '12vw' }}>
				<Text style={{ fontSize: '25px' }}>Login</Text>
			</Form.Item>
			<Form.Item
				label='Email'
				name='Email'
				rules={[{ required: true, message: 'Please input your Email!' }]}
			>
				<Input
					style={{ maxWidth: '300px' }}
					onChange={(e) => setRegisterEmail(e.target.value)}
				/>
			</Form.Item>

			<Form.Item
				label='Password'
				name='password'
				rules={[{ required: true, message: 'Please input your password!' }]}
			>
				<Input.Password
					style={{ maxWidth: '300px' }}
					onChange={(e) => setRegisterPassword(e.target.value)}
				/>
			</Form.Item>

			<Form.Item
				name='remember'
				valuePropName='checked'
				wrapperCol={{ offset: 8, span: 16 }}
			>
				<Checkbox>Remember me</Checkbox>
			</Form.Item>

			<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
				<Button type='primary' htmlType='submit' onClick={register}>
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default Login;
