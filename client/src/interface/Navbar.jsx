import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MdMenu, MdOutlineShoppingCart } from 'react-icons/md';
import { RiSearchLine } from 'react-icons/ri';
import { FaRegUser } from 'react-icons/fa';
import { onToogleShoppingCart, onToogleSidebar, startLogout } from '@/store';
import { useState } from 'react';

export const Navbar = () => {
	const { status, user } = useSelector((state) => state.session);
	const [ searchField, onChangeSearchField ] = useState('');
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogout = () => {
		dispatch(startLogout());
		navigate('/', { replace: true });
	};

	const handleLogin = () => {
		navigate('/login', { replace: true });
	};

	const searchProduct = (event) => {
		event.preventDefault();
		navigate(`/products?name=${ searchField }`, { replace: true });
	};

	return (
		<nav className="Navbar">
			<button 
				className="Navbar__sidebar-button fluid"
				onClick={ () => dispatch(onToogleSidebar()) }
			>
				<MdMenu />
			</button>
			<div className="Navbar__logo">
				<NavLink to="/">
					<img src="/app/logo_dark.png" alt="Home" />
				</NavLink>
			</div>
			<div className="Navbar__nav">
				<NavLink to="/categories">Categories</NavLink>
				<NavLink to="/products">Products</NavLink>
				<NavLink to="/Contact">Contact Us</NavLink>
			</div>
			<div className="Navbar__controls">
				<form 
					className="Navbar__controls-search" 
					onSubmit={ searchProduct }
				>
					<input 
						type="text" 
						placeholder="Search Product" 
						name="search"
						value={ searchField }
						onChange={ ({ target }) => onChangeSearchField( target.value ) }
					/>
					<button>
						<RiSearchLine />
					</button>
				</form>
				<button className="Navbar__controls-cart fluid" onClick={ () => dispatch(onToogleShoppingCart()) }>
					<MdOutlineShoppingCart />
				</button>
				<button className="Navbar__controls-login fluid" onClick={ (status === 'auth') ? handleLogout : handleLogin }>
					{ status === 'auth' ? <span className="fluid">{ user.name[0] }</span>  : <FaRegUser />  }
				</button>
			</div>		
		</nav>
	);
};
