import React from 'react';
import { Link } from 'react-router-dom';

import Donor from './Donor';

const Donors = props => {
    const conditionalRender = () =>{
        if(props.isAdmin === 1){
            return props.donors.map( donor => {
                return <Link to={`/update/${donor.id}`} key={donor.id}><Donor donor={donor} key={donor.id}/></Link>
            })
        } else {
            return props.donors.map( donor => {
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