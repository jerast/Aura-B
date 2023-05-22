import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { startLogin, startSignin } from '@/store';
import { getLastPath } from '@/helpers';

export const LoginPage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogin = () => {
		dispatch( startLogin({ email: "jose@gmail.com", password: "jose12345" }) );
		navigate( getLastPath(), { replace: true });
	};

	const handleSignin = () => {
		dispatch( startSignin({ name: "José", surname: "Rodríguez", email: "jose@gmail.com", password: "jose12345", phone: 3105556789 }) );
		navigate( getLastPath(), { replace: true });
	};

	if ( localStorage.getItem('sessionToken') ) 
		return <Navigate to={ '/' } />;

	return (
		<section className="fixed bg-red-100 w-full h-screen left-0 top-0 z-50">
			<h1>LoginView</h1>
			<button className="button" onClick={ handleLogin }>
				Login
			</button>
			
			<h1>SigninView</h1>
			<button className="button" onClick={ handleSignin }>
				Signin
			</button>
		</section>
	);
};
