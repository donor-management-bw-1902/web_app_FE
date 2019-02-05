import React from 'react';

import '../styles/Admin.css';

function Admin (props) {

    return (
        <div>
            <input type="text" name="donorName" placeholder="Name" value={props.donorName} onChange={props.handleInput}/>
            <input type="email" name="email" placeholder="Email" value={props.email} onChange={props.handleInput}/>
            <input type="number" name="phoneNumber" placeholder="Phone Number" value={props.phoneNumber} onChange={props.handleInput}/>
            <label>
                Date of Communication
                <input type="date" name="dateOfCommunication" placeholder="Date of Communication" value={props.dateOfCommunication} onChange={props.handleInput}/>
            </label>
            
            <label>
                Method of Communication
                <select value={props.methodOfCommunication} onChange={props.handleSelect}>
                    <option value="">--Please choose an option--</option>
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                </select>
            </label>
            <h2>Past Donations</h2>
            <ul>
                {props.pastDonations.map(donation => {
                    return <li>{donation}</li>;
                })}
            </ul>
            <form onSubmit={props.addDonation}>
                <label>
                    Add a Donation: <input type="number" name="donation" placeholder="Donation Amount" value={props.donation} onChange={props.handleInput}/>
                </label>
            </form>
            <button onClick={props.addNewDonor}>Create Donor</button>
        </div>
    );
};

export default Admin;