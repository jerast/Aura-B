import axios from 'axios';
// import { getEnv } from '@/helpers';

// const { VITE_API_URL } = getEnv();

export const shopApi = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
});
