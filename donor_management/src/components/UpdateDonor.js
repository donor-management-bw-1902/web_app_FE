import React from 'react';

const UpdateDonor = props => {

    return (
        <div>
            <input type="text" name="donorName" placeholder="Name" value={props.donor.name} />
            <input type="email" name="email" placeholder="Email" value={props.donor.email} />
            {/* <input type="number" name="phoneNumber" placeholder="Phone Number" value={props.phoneNumber} onChange={props.handleInput}/>
            <input type="text" name="city" placeholder="City" value={props.city} onChange={props.handleInput}/>
            <input type="text" name="address" placeholder="Address" value={props.address} onChange={props.handleInput}/>
            <input type="number" name="zip" placeholder="Zip" value={props.zip} onChange={props.handleInput}/> */}
            {/* <label>
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
            </label> */}
            <button>Update</button>
        </div>
    );
};

export default UpdateDonor;