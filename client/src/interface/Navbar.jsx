import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MdMenu } from 'react-icons/md';
import { onToogleSidebar, startLogout } from '@/store';

export const Navbar = () => {
	const { status, user } = useSelector((state) => state.session);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogout = () => {
		dispatch(startLogout());
		navigate('/', { replace: true });
	};

	return (
		<nav className="Navbar">
			<div>
				<button 
					className="Navbar__sidebar-button"
					onClick={ () => dispatch(onToogleSidebar()) }
				>
					<MdMenu />
				</button>
				<NavLink to="/">Home</NavLink>
			</div>
			<div className="Navbar__search">
				<input className="Navbar__search-input" placeholder="Search something"/>
			</div>
			<div>
				{ status === 'not-auth' && <NavLink to="/login">Login</NavLink> }
				{ status === 'auth' && <button onClick={ handleLogout }>Logout</button> }
			</div>		
		</nav>
	);
};
