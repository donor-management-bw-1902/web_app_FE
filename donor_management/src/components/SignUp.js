import React from 'react';

function SingUp (props) {
    return (
        <form onSubmit={props.SignUp}>
            <input type="text" name="username" placeholder="Username" value={props.username} onChange={props.handleSignUp}/>
            <input type="password" name="password" placeholder="Password" value={props.password} onChange={props.handleSignUp}/>
            <input type="email" name="email" placeholder="Email Address" value={props.email} onChange={props.handleSignUp}/>
            <button>Create Account</button>
        </form>
    );
};

export default SingUp;