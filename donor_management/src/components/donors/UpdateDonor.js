import React from 'react';

const UpdateDonor = props => {
    const updatedDonor = e => {
        e.preventDefault();

        props.updateDonor();
        props.history.push('/donors')
        alert('Donor updated!');
    }
    return (
        <div className="update-donor-wrapper">
            <h1>Update Form</h1>
            <form>
                <input type="text" name="donorName" placeholder="Name" value={props.donorName} onChange={props.handleInput}/>
                <input type="email" name="email" placeholder="Email" value={props.email} onChange={props.handleInput}/>
                <input type="text" name="city" placeholder="City" value={props.city} onChange={props.handleInput}/>
                <input type="text" name="address" placeholder="Address" value={props.address} onChange={props.handleInput}/>
                <input type="number" name="zip" placeholder="Zip" value={props.zip} onChange={props.handleInput}/>

                <label htmlFor="date-last">Date Last Contacted</label>
                <input id="date-last" type="date" name="lastContacted"  value={props.lastContacted} onChange={props.handleInput}/>
            
                <label htmlFor="methodOfCommunication">Method of Communication</label>
                <select id="methodOfCommunication" name="methodOfCommunication" value={props.methodOfCommunication} onChange={props.handleInput}>
                    <option value="">--Please choose an option--</option>
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                </select>
                
                <button onClick={updatedDonor}>Update</button>
            </form>
        </div>
    );
};

export default UpdateDonor;