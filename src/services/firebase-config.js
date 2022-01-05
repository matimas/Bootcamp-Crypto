import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyCYosD9FBV3Q-4TD0UflxaYGcy9u7PO7T0',
	authDomain: 'authentication-crypto.firebaseapp.com',
	projectId: 'authentication-crypto',
	storageBucket: 'authentication-crypto.appspot.com',
	messagingSenderId: '700590884424',
	appId: '1:700590884424:web:5734c48e907681a2d27a7d',
	measurementId: 'G-SRK993F9W5',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
