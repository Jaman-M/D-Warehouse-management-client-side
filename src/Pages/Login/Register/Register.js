import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Register.css'
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {

    //for create user with email-password
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }
    if(user){
        navigate('/home');
    }
    const handleRegister = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email,password);
    }
    return (
        <div className='register-form mt-5'>
            <h2 className=''>Please register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' />
                <input type="email" name="email" id="" placeholder='Your email Address' required/>
                <input type="password" name="password" id="" placeholder='password' required/>
                <input type="checkbox" name="terms" id="terms" />
                <label htmlFor="terms">Accept Terms and conditions</label>
                <input className='w-50 mx-auto btn mt-2 mb-2 btn-primary ' type="submit" value="Register" />
            </form>
            <p>Already have an account ? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>

            <SocialLogin></SocialLogin>
            
        </div>
    );
};

export default Register;