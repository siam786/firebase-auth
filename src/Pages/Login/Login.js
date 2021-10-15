import React from 'react';
import useAuth from '../../Hooks/UseAuth';

const Login = () => {

    const {signInUsingGoogle} = useAuth();
    return (
        <div>
            <h2>Login Page</h2>
            <button onClick={signInUsingGoogle} className="btn btn-warning">
                Google SignIn
            </button>
        </div>
    );
};

export default Login;