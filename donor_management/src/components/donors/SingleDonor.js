import React from 'react';
import Loader from 'react-loader-spinner';

import '../../styles/SingleDonor.css';

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
            </div>
            <div className="past-donations">
                <h2>Past Donations</h2>
                <div className="donations">
                    {props.pastDonations.length !== 0 ? props.pastDonations.map((donation, index) => {
                        return (
                            <div className="donation" key={index}>
                                <label htmlFor="donation">Donation Amount:</label>
                                <p id="donation">${donation.donationAmount}</p>
                                <label htmlFor="location">Location of Donation:</label>
                                <p id="location">{donation.donationLocation}</p>    
                            </div>
                        );
                    }) : <Loader type="Rings" color="black" height={120} width={120} />}
                </div>
            </div>
            <button onClick={() => props.history.push('/donors')}>Back</button>
        </div>
    );
}

export default SingleDonor;