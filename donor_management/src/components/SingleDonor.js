import React from 'react';

const SingleDonor = props => {
    return (
        <div className="single-donor-wrapper">
            <h1>{props.donor.name}</h1>
            <p>Email: {props.donor.email}</p>
            <p>City: {props.donor.city} </p>
            <p>Address: {props.donor.address}</p>
            <p>Zip: {props.donor.zip}</p>
            <p>Last Contacted: {props.donor.lastContacted}</p>
            <p>Method of Communication: {props.donor.contactMethod}</p>
            <button onClick={() => props.history.push('/donors')}>Back</button>
        </div>
    );
}

export default SingleDonor;