import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { startLogin } from '@/store';
import { getLastPath } from '@/helpers';

export const LoginPage = () => {
	const { status } = useSelector( state => state.session );
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogin = () => {
		dispatch( startLogin() );
		navigate( getLastPath(), { replace: true });
	};

	if ( status === 'auth' ) return <Navigate to={ '/' } />;

	return (
		<>
			<h1>LoginPage</h1>
			<button className="button" onClick={ handleLogin }>
				Login
			</button>
		</>
	);
};
