import axios from 'axios';

export const shopApi = axios.create({
	baseURL: import.meta.env.VITE_API_URL || 'http://192.168.0.1:1000/',
});
