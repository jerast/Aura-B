import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@/store';
import { AppRoutes } from '@/routes';
import { Navbar } from '@/interface';
// import './index.css'

ReactDOM.createRoot( document.getElementById('root') ).render(
	// <React.StrictMode>
		<Provider store={ store }>
			<BrowserRouter>
				<Navbar />
				<AppRoutes />
			</BrowserRouter>
		</Provider>
	// </React.StrictMode>
);
