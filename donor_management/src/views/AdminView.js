import React from 'react';
import { connect } from 'react-redux';

import Admin from '../components/Admin';
import { addNewDonor } from '../store/actions';


class AdminView extends React.Component {
    state = {
        donorName: '',
        phoneNumber:'',
        email: '',
        donation: '',
        pastDonations: [],
        locationOfDonation: '',
        dateOfCommunication: '',
        methodOfCommunication: ''
    }

    handleInput = e => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSelect = e => {
        this.setState({ methodOfCommunication: e.target.value });
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

    addDonation = e => {
        e.preventDefault();
        const newDonations = this.state.pastDonations.concat(this.state.donation);
        this.setState({ pastDonations: newDonations, donation: '' });
    }
    render(){
        return (
            <div className="admin-wrapper">
                <h1>Create Donor</h1>
                <Admin 
                    donorName={this.state.donorName} 
                    phoneNumber={this.state.phoneNumber}
                    email={this.state.email}
                    dateOfCommunication={this.state.dateOfCommunication} 
                    methodOfCommunication={this.state.methodOfCommunication}
                    handleInput={this.handleInput}
                    handleSelect={this.handleSelect}
                    addNewDonor={this.addNewDonor}
                    donation={this.state.donation}
                    pastDonations={this.state.pastDonations}
                    addDonation={this.addDonation}
                    locationOfDonation={this.state.locationOfDonation}
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