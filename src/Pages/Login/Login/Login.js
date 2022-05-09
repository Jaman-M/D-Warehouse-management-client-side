import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    //use sighInWithEmailPassword
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      if (user) {
          navigate('/home');
      };

    const handleSubmit = event=>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
      );

    const navigateRegister = () =>{
        navigate('register');
    }

    const resetPassword = async() => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('sent email');
    }

    return (
        <div className='container w-50 mx-auto mt-5'>
            <h2>Please login</h2>
                <Form onSubmit={handleSubmit}>       
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
                
                <p>New to D-Warehouse? <Link to="/register" className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link> </p>
                <p>Forget password <Link to="/register" className='text-danger pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</Link> </p>
                <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;