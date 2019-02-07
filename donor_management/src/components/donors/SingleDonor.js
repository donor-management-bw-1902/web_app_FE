import React from 'react';

const SingleDonor = props => {
    return (
        <div className="single-donor-wrapper">
            <div className="donor-info">
                <h1>{props.donor.name}</h1>
                <p>Email: {props.donor.email}</p>
                <p>City: {props.donor.city} </p>
                <p>Address: {props.donor.address}</p>
                <p>Zip: {props.donor.zip}</p>
                <p>Last Contacted: {props.donor.lastContacted}</p>
                <p>Method of Communication: {props.donor.contactMethod}</p>
                <button onClick={() => props.history.push('/donors')}>Back</button>
            </div>
            <div className="past-donations">
                <h2>Past Donations</h2>
                {props.pastDonations.length !== 0 ? props.pastDonations.map((donation, index) => {
                    return (
                        <div className="donation" key={index}>
                            <p>Donation Amount: {donation.donationAmount}</p>
                            <p>Location of Donation: {donation.donationLocation}</p>    
                        </div>
                    );
                }) : <h1>Loading...</h1>}
            </div>
        </div>
    );
}

export default SingleDonor;