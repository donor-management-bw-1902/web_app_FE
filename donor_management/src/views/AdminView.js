import React from 'react';
import { connect } from 'react-redux';

import Admin from '../components/Admin';
import { addNewDonor } from '../store/actions';

class AdminView extends React.Component {
    render(){
        return (
            <div>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    donors: state.donorReducer.donors
});

export default connect(
    mapStateToProps,
    { addNewDonor }
)(AdminView);