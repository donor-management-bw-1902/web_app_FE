import React from 'react';

function SingUp (props) {
    return (
        <form>
            <input type="text" name="username" placeholder="Username" />
            <input type="password" name="password" placeholder="Password" />
            <input type="email" name="email" placeholder="Email Address" />
            <button>Create Account</button>
        </form>
    );
};

export default SingUp;