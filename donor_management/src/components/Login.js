import React from 'react';

function Login (props) {
    return (
        <form>
            <input type="text" name="username" placeholder="Username" />
            <input type="password" name="password" placeholder="Password" />
            <button>Login</button>
            <button onClick={() => {props.history.push('/Sign-up')}}>Sign Up</button>
        </form>
    );
};

export default Login;