import React from 'react';

const SingUp = props => {
    return (
        <form onSubmit={props.SignUp}>
            <input type="text" name="username" placeholder="Username" value={props.username} onChange={props.handleSignUp}/>
            <input type="password" name="password" placeholder="Password" value={props.password} onChange={props.handleSignUp}/>
            <input type="text" name="name" placeholder="Name" value={props.name} onChange={props.handleSignUp}/>
            <button>Create Account</button>
        </form>
    );
};

export default SingUp;