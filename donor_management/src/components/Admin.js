import React from 'react';

import '../styles/Admin.css';

const Admin = props => {
    return(
        <>
            <button className="sign-up-btn" onClick={() => {props.history.push('/sign-up')}}>Create User</button>
            <button>Create Donor</button>
        </>
    );
}

export default Admin;