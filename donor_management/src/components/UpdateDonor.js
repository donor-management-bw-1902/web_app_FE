import React from 'react';

const UpdateDonor = props => {
    const updatedDonor = e => {
        e.preventDefault();
        
        props.updateDonor();
        props.history.push('/donors')
    }
    return (
        <div>
            <input type="text" name="donorName" placeholder="Name" value={props.donorName} onChange={props.handleInput}/>
            <input type="email" name="email" placeholder="Email" value={props.email} onChange={props.handleInput}/>
            <input type="text" name="city" placeholder="City" value={props.city} onChange={props.handleInput}/>
            <input type="text" name="address" placeholder="Address" value={props.address} onChange={props.handleInput}/>
            <input type="number" name="zip" placeholder="Zip" value={props.zip} onChange={props.handleInput}/>
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
            <button onClick={updatedDonor}>Update</button>
        </div>
    );
};

export default UpdateDonor;