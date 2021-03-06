import React from 'react';

import '../../styles/Admin.css';

const AddDonations = props => {
    const addedDonations = e => {
        e.preventDefault();
        props.history.push('/admin');
        alert('Donor Created!');
    }
    return(
        <div className="add-donations">
            <h2>Past Donations</h2>
            <ul>
                {props.pastDonations.map((donation, index) => {
                    return <li key={index} id={index} value={donation.donation}>
                    {`$${donation.donation}`} 
                        <select name="locationOfDonation" value={props.pastDonations[index].locationOfDonation} onChange={props.handleSelect}>
                            <option value="">--Please choose a location--</option>
                            <option value="adopt-a-community">Adopt-a-Community</option>
                            <option value="nutritour">Nutritour</option>
                            <option value="other">Other</option>
                        </select>
                        <button onClick={props.dbAddDonation}>{props.pastDonations[index].isAddedDonation ? "Added!" : "Add Donation"}</button>
                    </li>;
                })}
            </ul>
            <label htmlFor="donation">Add a Donation:</label>
            <form onSubmit={props.addDonation}>
                <input id="donation" type="number" name="donation" placeholder="Donation Amount" value={props.donation} onChange={props.handleInput}/>
                <button>+</button>
            </form>
            <button onClick={e => addedDonations(e)}>Finish</button>
        </div>
    );
}

export default AddDonations;