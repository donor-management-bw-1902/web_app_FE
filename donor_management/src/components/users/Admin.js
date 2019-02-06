import React from 'react';

import '../styles/Admin.css';

const Admin = props => {
    return(
        <>
            <button className="sign-up-btn" onClick={() => {props.history.push('/sign-up')}}>Create Board Member</button>
            <button onClick={() => {props.history.push('/donor')}}>Create Donor</button>
            <button onClick={() => {props.history.push('/donors')}}>Donor's List</button>
        </>
    );
}

export default Admin;