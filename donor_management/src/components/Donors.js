import React from 'react';
import { Link } from 'react-router-dom';

import Donor from './Donor';

const Donors = props => {
    return (
        <div className="donors-list">
            {props.donors.map( donor => {
                return <Link to={`/update/${donor.id}`}><Donor donor={donor} key={donor.id}/></Link>
            })}
        </div>
    );
}

export default Donors;