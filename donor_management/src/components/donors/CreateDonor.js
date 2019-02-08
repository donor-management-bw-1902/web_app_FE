import React from 'react';

import '../../styles/Admin.css';

const CreateDonor = props => {

    return (
        <div className="donor-info-wrapper">
            <input type="text" name="donorName" placeholder="Name" value={props.donorName} onChange={props.handleInput}/>
            <input type="email" name="email" placeholder="Email" value={props.email} onChange={props.handleInput}/>
            <input type="text" name="city" placeholder="City" value={props.city} onChange={props.handleInput}/>
            <input type="text" name="address" placeholder="Address" value={props.address} onChange={props.handleInput}/>
            <input type="number" name="zip" placeholder="Zip" value={props.zip} onChange={props.handleInput}/>

            <label htmlFor="date">Date Last Contacted:</label>
            <input id="date" type="date" name="lastContacted"  value={props.lastContacted} onChange={props.handleInput}/>

            <label htmlFor="methodOfCommunication">Method of Communication</label>
            <select id="methodOfCommunication" name="methodOfCommunication" value={props.methodOfCommunication} onChange={props.handleInput}>
                <option value="">--Please choose an option--</option>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
            </select>
        
            <button onClick={props.addNewDonor}>Next</button>
        </div>
    );
};

export default CreateDonor;