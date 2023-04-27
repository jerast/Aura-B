import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '@/store';

export const Navbar = () => {
	const { status, user } = useSelector((state) => state.session);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogout = () => {
		dispatch(startLogout());
		navigate('/', { replace: true });
	};

	return (
		<nav>
			{
				user.role !== 'admin' && (
					<>
						<NavLink to="/">Home</NavLink>
						<NavLink to="/categories">Categories</NavLink>
						<NavLink to="/products">Products</NavLink>
					</>
				)
			}
			{
				user.role === 'customer' && (
					<>
						<NavLink to="/account/">MyAccount</NavLink>
						<NavLink to="/account/orders">MyOrders</NavLink>
					</>
				)
			}
			{ user.role === 'admin' && <NavLink to="/admin/">Admin</NavLink> }

			{ status === 'not-auth' && <NavLink to="/login">Login</NavLink> }
			{ status === 'auth' && <button onClick={ handleLogout }>Logout</button> }
		</nav>
	);
};
