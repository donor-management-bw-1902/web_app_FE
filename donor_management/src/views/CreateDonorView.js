import React from 'react';
import { connect } from 'react-redux';

import { CreateDonor } from '../components';
import { addNewDonor, addDonation } from '../store/actions';
import AddDonations from '../components/AddDonations';

import '../styles/Admin.css';

let id = 0;
class CreaterDonorView extends React.Component {
    state = {
        donorName: '',
        phoneNumber:'',
        email: '',
        city: '',
        address: '',
        zip: '',
        donation: '',
        pastDonations: [],
        lastContacted: '',
        methodOfCommunication: '',
        locationOfDonation: '',
        isSelected: false,
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
    }

    addNewDonor = e => {
        e.preventDefault();
        const newDonor = { 
            name: this.state.donorName, 
            email: this.state.email,
            city: this.state.city,
            address: this.state.address,
            zip: this.state.zip,
            contactMethod: this.state.methodOfCommunication,
            lastContacted: this.state.lastContacted
        }
        this.props.addNewDonor(newDonor, this.props.authToken);
        this.setState({ isSelected: !this.state.isSelected });
    }

    addDonation = e => {
        e.preventDefault();
        id++;
        const donation = { donation: this.state.donation, id: id, isAddedDonation: false }
        const newDonations = this.state.pastDonations.concat(donation);
        this.setState({ pastDonations: newDonations, donation: ''});
    }

    dbAddDonation = e => {
        e.preventDefault();
        const donor = this.props.donors.find(donor => donor.email === this.state.email);
        const dValue = e.target.parentElement.value;
        console.log(dValue)
        const donation = {donationAmount: dValue, donationLocation: this.state.locationOfDonation, donorID: donor.id };
        this.props.addDonation( donation, this.props.authToken );

        let pastDonations = [...this.state.pastDonations];
        let index = pastDonations.findIndex(donation => donation.id === Number(e.target.parentElement.id));

        pastDonations[index+1].isAddedDonation = true;
        this.setState({pastDonations, isAddedDonation: true })
    }

    componentDidMount(){
        if(!this.props.authToken){
            this.props.history.push('/');
        }
    }

    render(){
        return (
            <div className="admin-wrapper">
                <div className="create-donor-tabs">
                    <h1 className={`header-tab ${!this.state.isSelected ? "selected-tab" : null}`}>Create Donor</h1>
                    <h1 className={`header-tab ${this.state.isSelected ? "selected-tab" : null}`}>Donations</h1>
                </div>
                <div className={`create-donor-tab ${!this.state.isSelected ? "selected" : null}`}>
                    <CreateDonor 
                        donorName={this.state.donorName} 
                        phoneNumber={this.state.phoneNumber}
                        email={this.state.email}
                        city={this.state.city}
                        address={this.state.address}
                        zip={this.state.zip}
                        lastContacted={this.state.lastContacted} 
                        methodOfCommunication={this.state.methodOfCommunication}
                        handleInput={this.handleInput}
                        addNewDonor={this.addNewDonor}
                    />
                </div>
                <div className={`create-donor-tab ${this.state.isSelected ? "selected" : null}`}>
                    <AddDonations 
                        donation={this.state.donation}
                        pastDonations={this.state.pastDonations}
                        locationOfDonation={this.state.locationOfDonation}
                        handleInput={this.handleInput}
                        handleSelect={this.handleSelect}
                        addDonation={this.addDonation}
                        dbAddDonation={this.dbAddDonation}
                    />
                </div >
            </div>
        );
    }
}

const mapStateToProps = state => ({
    donors: state.donorReducer.donors,
    authToken: state.userReducer.authToken
});

export default connect(
    mapStateToProps,
    { addNewDonor, addDonation }
)(CreaterDonorView);