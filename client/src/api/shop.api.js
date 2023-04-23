import axios from 'axios';
import { getEnv } from '@/helpers';

const { VITE_API_URL } = getEnv();

console.log( VITE_API_URL );

console.log( getEnv() );

const shopApi = axios.create({
	baseURL: VITE_API_URL,
});

export { shopApi };
