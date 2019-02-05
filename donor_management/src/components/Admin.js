import React from 'react';

function Admin (props) {
    return (
        <form onSubmit={props.addNewDonor}>
            <input type="text" name="donorName" placeholder="Name" value={props.donorName} onChange={props.handleInput}/>
            <input type="email" name="email" placeholder="Email" value={props.email} onChange={props.handleInput}/>
            <input type="number" name="phoneNumber" placeholder="Phone Number" value={props.phoneNumber} onChange={props.handleInput}/>
            <input type="date" name="dateOfCommunication" placeholder="Date of Communication" value={props.dateOfCommunication} onChange={props.handleInput}/>
            
            <label>
                Method of Communication
                <select value={props.methodOfCommunication} onChange={props.handleSelect}>
                    <option value="">--Please choose an option--</option>
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                </select>
            </label>
            <button>Create Donor</button>
        </form>
    );
};

export default Admin;