import React from 'react';
import { Link } from 'react-router-dom';

import Donor from './Donor';

const Donors = props => {
    const indexOfLastDonor = props.currentPage * props.donorsPerPage; //grabs the current page number and amount of donors per page to use as a index
    const indexOfFirstDonor = indexOfLastDonor - props.donorsPerPage; //uses the index of the last donor on a page and subtracts the amount of donors per page to get the first index
    //this variable holds the new array that will display the donor data based off what page the user clicks on
    const currentDonors = props.donors.slice(indexOfFirstDonor, indexOfLastDonor); 

    const conditionalRender = () =>{
        if(localStorage.getItem('isAdmin') === '1'){
            return currentDonors.map( donor => {
                return <Link to={`/update/${donor.id}`} key={donor.id}><Donor donor={donor} key={donor.id}/></Link>
            })
        } else {
            return currentDonors.map( donor => {
                return <Link to ={`donors/${donor.id}`} key={donor.id}><Donor donor={donor} key={donor.id}/></Link>
            })
        }
    }
    return (
        <div className="donors-list">
            {conditionalRender()}
        </div>
    );
}

export default Donors;