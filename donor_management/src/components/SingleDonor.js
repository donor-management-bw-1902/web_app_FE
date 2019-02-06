import React from 'react';

const SingleDonor = props => {
    return (
        <div className="single-donor-wrapper">
            <h1>{props.donor.name}</h1>
        </div>
    );
}

export default SingleDonor;