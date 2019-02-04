import React from 'react';

const Donor = props => {
    return (
        <div className="donor-wrapper">
            <h1>{props.name}</h1>
            <p>{props.lastContacted}</p>
        </div>
    );
}

export default Donor;