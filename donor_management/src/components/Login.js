import React from 'react';

function Login (props) {
    return (
        <form>
            <input type="text" name="username" placeholder="Username" value={props.username} onChange={props.handleLogin}/>
            <input type="password" name="password" placeholder="Password" value={props.password} onChange={props.handleLogin}/>
            <button>Login</button>
            <button onClick={() => {props.history.push('/Sign-up')}}>Sign Up</button>
        </form>
    );
};

export default Login;