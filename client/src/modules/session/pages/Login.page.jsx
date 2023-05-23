import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { startLogin, startSignin } from '@/store';
import { getLastPath } from '@/helpers';
import { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';

export const LoginPage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [ isloggin, setIsloggin ] = useState( true );
	const [ showPass, setShowPass ] = useState( false );

	const handleLogin = async (event) => {
		event.preventDefault();
		await dispatch( startLogin({ email: "jose@gmail.com", password: "jose12345" }) );
		await navigate( getLastPath(), { replace: true });
	};

	const handleSignup = async (event) => {
		event.preventDefault();
		await dispatch( startSignin({ name: "José", surname: "Rodríguez", email: "jose@gmail.com", password: "jose12345", phone: 3105556789 }) );
		await navigate( getLastPath(), { replace: true });
	};

	const handleGoBack = (event) => {
		event.preventDefault();
		navigate('/');
	};

	// const handleBackground = `https://res.cloudinary.com/dlgvigwlh/image/upload/w_${ window.screen.availWidth },h_${ window.screen.availHeight },c_fill,g_south/v1684591512/Aura-B/Posts/surtido-plano-cosmeticos-espacio-copia_1_o0bprr.png`;

	const handleSwitchForm = () => setIsloggin( !isloggin );

	const handleTogglePass = () => setShowPass( !showPass );

	if ( localStorage.getItem('sessionToken') ) 
		return <Navigate to={ '/' } />;

	return (
		<section className={`Auth ${ isloggin ? '' : 'Auth--sign-up' }`}>
			{/* <img className="animate-in fade-in absolute -z-10 duration-1000 hue-rotate-60 w-full h-full object-cover brightness-50" src={ handleBackground } alt="" /> */}
			<div className={`Auth__container`}>
				<div className="Auth__item">
					<form className="Auth__form" onSubmit={ handleLogin } >
						<button className="ShoppingCart__close-button fluid" onClick={ handleGoBack }><MdClose /></button>
						<h1 className="Auth__title">Log In</h1>
						<span className="Auth__description">Log in to continue.</span>
						<label className="form__input">
							<input className="form__input-field" type="email" name="email" autoComplete="off" disabled={ !isloggin }/>
							<span className="form__input-label">Email</span>
						</label>
						<label className="form__input">
							<input className="form__input-field" type={ showPass ? 'text' : 'password' } name="password"  disabled={ !isloggin }/>
							<span className="form__input-label">Password</span>
							<span className="form__input-icon" onClick={ handleTogglePass }>
								{ showPass ? <IoEyeOffOutline /> : <IoEyeOutline /> }	
							</span>
						</label>
						<button className="form__button fluid" disabled={ !isloggin }>Continue</button>
						<p className="Auth__options">
							<span>Don't have an account?</span>
							<span onClick={ handleSwitchForm }>Sign up</span>
						</p>
					</form>
				</div>
				
				<div className="Auth__item">
					<form className="Auth__form" onSubmit={ handleSignup } >
						<button className="ShoppingCart__close-button fluid" onClick={ handleGoBack }><MdClose /></button>
						<h1 className="Auth__title">Sign Up</h1>
						<span className="Auth__description">Sign up to create an account.</span>
						<label className="form__input">
							<input className="form__input-field" type="text" name="name" autoComplete="off" disabled={ isloggin }/>
							<span className="form__input-label">Name</span>
						</label>
						<label className="form__input">
							<input className="form__input-field" type="text" name="surname" autoComplete="off" disabled={ isloggin }/>
							<span className="form__input-label">Surname</span>
						</label>
						<label className="form__input">
							<input className="form__input-field" type="number" name="phone" autoComplete="off" disabled={ isloggin }/>
							<span className="form__input-label">Phone</span>
						</label>
						<label className="form__input">
							<input className="form__input-field" type="email" name="email" autoComplete="off" disabled={ isloggin }/>
							<span className="form__input-label">Email</span>
						</label>
						<label className="form__input">
							<input className="form__input-field" type={ showPass ? 'text' : 'password' } name="password"  disabled={ isloggin }/>
							<span className="form__input-label">Password</span>
							<span className="form__input-icon" onClick={ handleTogglePass }>
								{ showPass ? <IoEyeOffOutline /> : <IoEyeOutline /> }
							</span>
						</label>
						<button className="form__button fluid" disabled={ isloggin }>Continue</button>
						<p className="Auth__options">
							<span>Already have an account?</span>
							<span onClick={ handleSwitchForm }>Log in</span>
						</p>
					</form>
				</div>
			</div>
		</section>
	);
};
