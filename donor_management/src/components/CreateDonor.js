import React from 'react';

import '../styles/Admin.css';

const CreateDonor = props => {

    return (
        <div>
            <input type="text" name="donorName" placeholder="Name" value={props.donorName} onChange={props.handleInput}/>
            <input type="email" name="email" placeholder="Email" value={props.email} onChange={props.handleInput}/>
            <input type="number" name="phoneNumber" placeholder="Phone Number" value={props.phoneNumber} onChange={props.handleInput}/>
            <label>
                Date Last Contacted
                <input type="date" name="lastContacted"  value={props.lastContacted} onChange={props.handleInput}/>
            </label>
            
            <label>
                Method of Communication
                <select name="methodOfCommunication" value={props.methodOfCommunication} onChange={props.handleInput}>
                    <option value="">--Please choose an option--</option>
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                </select>
            </label>
            <h2>Past Donations</h2>
            <ul>
                {props.pastDonations.map((donation, index) => {
                    return <li key={index} id={index}>
                    {`$${donation.donation}`} 
                        <select name="locationOfDonation" value={props.pastDonations[index].locationOfDonation} onChange={props.handleSelect}>
                            <option value="">--Please choose a location--</option>
                            <option value="adopt-a-community">Adopt-a-Community</option>
                            <option value="nutritour">Nutritour</option>
                            <option value="other">Other</option>
                        </select>
                    </li>;
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

export default CreateDonor;