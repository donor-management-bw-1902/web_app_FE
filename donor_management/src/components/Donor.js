import React from 'react';

const Donor = props => {
    return (
        <div className="donor-wrapper">
            <h1>{props.donor.name}</h1>
            <p>Last Contacted on : {props.donor.lastContacted}</p>
        </div>
    );
}

export default Donor;