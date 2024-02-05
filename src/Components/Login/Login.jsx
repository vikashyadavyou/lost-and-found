import React from 'react'
import './login.css'
// import user_icon from '../Assets/user_icon.png'
// import email_icon from '../Assets/email_icon.png'

const Login = () => {
  return (
    <div className="container">
	<div  className="screen">
		<div  className="screen__content">
			<form  className="login">
				<div  className="login__field">
					<i  className="login__icon fas fa-user"></i>
					<input type="text"  className="login__input" placeholder="User name / Email"/>
				</div>
				<div className="login__field">
					<i  className="login__icon fas fa-lock"></i>
					<input type="password"  className="login__input" placeholder="Password"/>
				</div>
				<button  className="button login__submit">
					<span  className="button__text">Log in now</span>
					<i  className="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
			<div   className="social-login">
				<h3>log in via</h3>
				<div class="social-icons">
					<a href="#"  className="social-login__icon fab fa-instagram"></a>
					<a href="#"  className="social-login__icon fab fa-facebook"></a>
					<a href="#"  className="social-login__icon fab fa-twitter"></a>
				</div>
			</div>
		</div>
		<div class="screen__background">
			<span  className="screen_backgroundshape screenbackground_shape4"></span>
			<span  className="screen_backgroundshape screenbackground_shape3"></span>		
			<span  className="screen_backgroundshape screenbackground_shape2"></span>
			<span  className="screen_backgroundshape screenbackground_shape1"></span>
		</div>		
	</div>
</div>
  )
}

export default Login
