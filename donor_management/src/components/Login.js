import React from 'react';

const Login = props => {
    return (
        <form>
            <input type="text" name="username" placeholder="Username" value={props.username} onChange={props.handleLogin}/>
            <input type="password" name="password" placeholder="Password" value={props.password} onChange={props.handleLogin}/>
            <div className="login-btn-wrapper">
                <button onClick={props.login}>Login</button>
            </div>
        </form>
    );
};

export default Login;