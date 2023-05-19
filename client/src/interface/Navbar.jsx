import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onToogleShoppingCart, onToogleSidebar, startLogout } from '@/store';
import { DropdownButton, Search } from '@/interface';
import { MdMenu, MdOutlineShoppingCart } from 'react-icons/md';
import { FaRegUser } from 'react-icons/fa';
import { RiLoader4Line } from 'react-icons/ri';

export const Navbar = () => {
	const { status, user } = useSelector( state => state.session );
	const { isLoading, shoppingCart } = useSelector( state => state.app );
	const dispatch = useDispatch();
	const navigate = useNavigate();

	// const handleDropdown = () => {
	// 	navigate('/account');
	// };

	const handleLogin = () => {
		navigate('/login');
	};

	const handleLogout = () => {
		navigate('/', { replace: true });
		dispatch(startLogout());
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
					<svg viewBox="0 0 4074 1351" xmlns="http://www.w3.org/2000/svg">
						<path d="M3717 400H3585L3228 1334H3371L3651 601.5L3931 1334H4074L3717 400Z" fill="inherit"/>
						<path d="M1492 1351C1725.62 1351 1915 1173.03 1915 953.5V399H1781V940.5C1781 1093.76 1651.61 1218 1492 1218C1332.39 1218 1203 1093.76 1203 940.5V400H1069V953.5C1069 1173.03 1258.38 1351 1492 1351Z" fill="inherit"/>
						<path d="M701.5 0.5H145.5V133.5H701.5V0.5Z" fill="inherit"/>
						<path d="M489.5 400.5H357.5L0.5 1334.5H143.5L423.5 602L703.5 1334.5H846.5L489.5 400.5Z" fill="inherit"/>
						<path fillRule="evenodd" clipRule="evenodd" d="M2249 400V1335H2383V1013H2727L2890 1335H3040L2846.41 953.807C2921.95 898.032 2971 808.031 2971 706.5C2971 537.225 2834.67 400 2666.5 400H2249ZM2663.5 879C2759.32 879 2837 801.769 2837 706.5C2837 611.231 2759.32 534 2663.5 534H2383V879H2663.5Z" fill="inherit"/>
					</svg>
				</NavLink>
			</div>
			<div className="Navbar__nav">
				<NavLink to="/categories">Categories</NavLink>
				<NavLink to="/products">Products</NavLink>
				<NavLink to="/contact">Contact</NavLink>
			</div>
			<div className="Navbar__controls">
				<Search />
				<button 
					className="Navbar__controls-cart fluid" 
					onClick={ () => dispatch(onToogleShoppingCart()) } 
					disabled={ isLoading } 
				>
					{ ( isLoading ) 
						? 	<RiLoader4Line className="animate-spin" />
						: 	<>
								<MdOutlineShoppingCart />
								{ 
									!!shoppingCart.length && (
										<span className="Navbar__notify">
											<span className="Navbar__nofity-ping animate-ping"></span>
											<span className="Navbar__notify-icon"></span>
										</span>
									)
								}
							</> 
					}
				</button>
				<DropdownButton 
					className="Navbar__controls-login"
         		disabled={ isLoading || status === 'checking' }
					conditions={ !isLoading && status === 'auth' }
				>
					<span 
						className={`Navbar__controls-login-button fluid ${ (status === 'auth' && !isLoading ) ? 'logged' : '' }`} 
						onClick={ (status !== 'auth') ? handleLogin : null }
					>
						{ 
							( isLoading || status === 'checking' )
							? 	<RiLoader4Line className="animate-spin text-2xl"/>
							: 	( status === 'auth' ) 
								? user.name[0]
								: <FaRegUser /> 
						}
					</span>
					<div className="Navbar__controls-login-dropdown">
						<ul>
							<li><Link to='/account'>My Account</Link></li>
							<li><Link to='/account/orders'>My Orders</Link></li>
						</ul>
						<ul>
							<li><span onClick={ handleLogout }>Log Out</span></li>
						</ul>
					</div>
				</DropdownButton>
			</div>		
		</nav>
	);
};
