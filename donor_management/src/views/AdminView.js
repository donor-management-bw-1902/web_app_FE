import React from 'react';
import { connect } from 'react-redux';

import Admin from '../components/Admin';
import { addNewDonor } from '../store/actions';

let id = 0;
class AdminView extends React.Component {
    state = {
        donorName: '',
        phoneNumber:'',
        email: '',
        donation: '',
        pastDonations: [],
        lastContacted: '',
        methodOfCommunication: '',
        locationOfDonation: ''
    }

    handleInput = e => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSelect = e => {
        e.preventDefault();
        const selected = e.target.value;
        let pastDonations = [...this.state.pastDonations];
        let index = pastDonations.findIndex(donation => donation.id === Number(e.target.parentElement.id));
        pastDonations[index+1].locationOfDonation = selected;
        this.setState({ pastDonations, locationOfDonation: selected });
        console.log(index)
        // this.state.pastDonations.find((value, index) => {console.log(value.donation + index);});
        // this.state.pastDonations.map((donation, index) => {
        //     if(index === Number(e.target.parentElement.id)) {
        //         newDonation = {...donation, locationOfDonation: selected};  
        //     }
        // });
      
        console.log(this.state.pastDonations);
        
        // console.log(this.state.pastDonations[e.target.parentElement.id]);
    }

    addNewDonor = e => {
        e.preventDefault();
        const newDonor = { 
            donorName: this.state.donorName, 
            contactInfo: {phoneNumber: this.state.phoneNumber, email: this.state.email},
            pastDonations: this.state.pastDonations,
            methodOfCommunication: this.state.methodOfCommunication,
            lastContacted: this.state.lastContacted
        }
        this.props.addNewDonor(newDonor);
    }

    addDonation = e => {
        e.preventDefault();
        id++;
        const donation = { donation: this.state.donation, id: id }
        const newDonations = this.state.pastDonations.concat(donation);
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
                    lastContacted={this.state.lastContacted} 
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