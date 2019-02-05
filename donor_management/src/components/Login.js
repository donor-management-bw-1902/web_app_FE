import React from 'react';

function Login (props) {
    return (
        <form>
            <input type="text" name="username" placeholder="Username" value={props.username} onChange={props.handleLogin}/>
            <input type="password" name="password" placeholder="Password" value={props.password} onChange={props.handleLogin}/>
            <div className="login-btn-wrapper">
                <button>Login</button>
                <button className="sign-up-btn" onClick={() => {props.history.push('/Sign-up')}}>Sign Up</button>
            </div>
        </form>
    );
};

export default Login;