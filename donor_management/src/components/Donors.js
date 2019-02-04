import React from 'react';
import Donor from './Donor';

const Donors = props => {
    return (
        <div className="donors-list">
            {props.users.map( donor => {
                return <Donor donor={donor}/>
            })}
        </div>
    );
}

export default Donors;