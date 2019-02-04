import React from 'react';
import { connect } from 'react-redux';

import Admin from '../components/Admin';
import { addNewDonor } from '../store/actions';

class AdminView extends React.Component {
    state = {
        donorName: '',
        contactInfo: {
            phoneNumber:'',
            email: ''
        },
        pastDonations: [],
        locationOfDonation: '',
        dateOfCommunication: '',
        methodOfCommunication: ''
    }

    handleInput = e => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    }
    addNewDonor = e => {
        e.preventDefault();
        const newDonor = { 
            donorName: this.state.donorName, 
            contactInfo: {phoneNumber: this.state.phoneNumber, email: this.state.email},
            pastDonations: this.state.pastDonations,
            locationOfDonation: this.state.locationOfDonation,
            methodOfCommunication: this.state.methodOfCommunication
        }
        this.props.addNewDonor(newDonor);
    }

    render(){
        return (
            <div>
                <Admin 
                    donorName={this.state.donorName} 
                    contactInfo={this.state.contactInfo} 
                    dateOfCommunication={this.state.dateOfCommunication} 
                    methodOfCommunication={this.state.methodOfCommunication}
                    handleInput={this.handleInput}
                />
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