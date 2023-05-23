import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { onToogleSidebar, startLogout } from '@/store';
import { DropdownButton, Search } from '@/interface';
import { MdClose } from 'react-icons/md';
import { RiLoader4Line } from 'react-icons/ri';
import { FaRegUser } from 'react-icons/fa';

export const Sidebar = () => {
	const { isLoading, sidebarIsOpen } = useSelector( state => state.app );
	const { status, user } = useSelector( state => state.session );
	const [ isShow, toogleShow ] = useState( false );
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		sidebarIsOpen 
			? toogleShow(true) 
			: setTimeout(() => toogleShow(false), 250);
	}, [sidebarIsOpen]);

	const handleCloseSidebar = () => 
		dispatch(onToogleSidebar());

	const handleLogout = () => {
		dispatch(startLogout());
		navigate('/', { replace: true });
		dispatch(onToogleSidebar());
	};

	const handleLogin = () => {
		dispatch(onToogleSidebar());
		navigate('/login', { replace: true });
	};

   return (
      isShow && (
			<div className="Sidebar">
				<div 
					className={`Sidebar__backdrop ${ sidebarIsOpen ? 'animate-in fade-in duration-300' : 'animate-out fade-out duration-300' }`}
					onClick={ handleCloseSidebar }
				/>
				<div className={`Sidebar__content ${ sidebarIsOpen ? 'animate-in slide-in-from-left duration-300' : 'animate-out slide-out-to-left duration-300' }`}>					
					<div className="Sidebar__header">
						<button className="Sidebar__close-button fluid" onClick={ handleCloseSidebar }>
							<MdClose />
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
										? user.name[0]+user.surname[0]
										: <FaRegUser /> 
								}
							</span>
							<div className="Navbar__controls-login-dropdown">
								<ul>
									<li><span onClick={ handleLogout }>Log Out</span></li>
								</ul>
							</div>
						</DropdownButton>
					</div>
					<Search />
					<ul className="Sidebar__group">
						<li><NavLink onClick={ handleCloseSidebar } to="/">Home</NavLink></li>
						<li><NavLink onClick={ handleCloseSidebar } to="/categories">Categories</NavLink></li>
						<li><NavLink onClick={ handleCloseSidebar } to="/products">Products</NavLink></li>
					</ul>
					{
						(!isLoading && status === 'auth') && (
							<ul className="Sidebar__group">
								<li><NavLink onClick={ handleCloseSidebar } to="/account">My Account</NavLink></li>
								<li><NavLink onClick={ handleCloseSidebar } to="/account/orders">My Orders</NavLink></li>
							</ul>
						)
					}
					{
						(!isLoading) && (
							<ul className="Sidebar__group">
								<li>
									<button onClick={ (status === 'auth') ? handleLogout : handleLogin }>
										{ (status === 'auth') ? 'Log Out' : 'Log In' }
									</button>
								</li>
							</ul>
						)
					}
					<svg className="Sidebar__logo" viewBox="0 0 4074 1351" xmlns="http://www.w3.org/2000/svg">
						<path d="M3717 400H3585L3228 1334H3371L3651 601.5L3931 1334H4074L3717 400Z" fill="inherit"/>
						<path d="M1492 1351C1725.62 1351 1915 1173.03 1915 953.5V399H1781V940.5C1781 1093.76 1651.61 1218 1492 1218C1332.39 1218 1203 1093.76 1203 940.5V400H1069V953.5C1069 1173.03 1258.38 1351 1492 1351Z" fill="inherit"/>
						<path d="M701.5 0.5H145.5V133.5H701.5V0.5Z" fill="inherit"/>
						<path d="M489.5 400.5H357.5L0.5 1334.5H143.5L423.5 602L703.5 1334.5H846.5L489.5 400.5Z" fill="inherit"/>
						<path fillRule="evenodd" clipRule="evenodd" d="M2249 400V1335H2383V1013H2727L2890 1335H3040L2846.41 953.807C2921.95 898.032 2971 808.031 2971 706.5C2971 537.225 2834.67 400 2666.5 400H2249ZM2663.5 879C2759.32 879 2837 801.769 2837 706.5C2837 611.231 2759.32 534 2663.5 534H2383V879H2663.5Z" fill="inherit"/>
					</svg>
				</div>
			</div>
		)
   );
};