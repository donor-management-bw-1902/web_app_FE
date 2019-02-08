import React from 'react';
import { connect } from 'react-redux';

import { CreateDonor, AddDonations } from '../../components';
import { addNewDonor, addDonation } from '../../store/actions';

import '../../styles/Admin.css';

let id = 0; //variable used to track the id of the donations being rendered to the screen
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
    //method used to handle selecting the location of the donation being made.
    handleSelect = e => {
        e.preventDefault();
        const selected = e.target.value;//variable used to store the selected donation location from the select element
        //copies the array of donations from state
        let pastDonations = [...this.state.pastDonations];
        //finds the index of the donation based on the donation the user is clicking on and stores that index in the variable
        let index = pastDonations.findIndex(donation => donation.id === Number(e.target.parentElement.id)); 
        //sets the location of the donation grabed from the select element to the donation at the index grabed from the array of donations in the pastDonations variable 
        pastDonations[index+1].locationOfDonation = selected;
        //sets the state of the pastDonations array to the new array of pastDonations with the updated locationOfDonation state set for that donation
        this.setState({ pastDonations, locationOfDonation: selected });
    }
    //method used to send a new donor object up to the database
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
        this.props.addNewDonor(newDonor, localStorage.getItem('AuthToken'));
        this.setState({ isSelected: !this.state.isSelected });
    }
    //method used to render the donations onto the webapp screen
    addDonation = e => {
        e.preventDefault();
        id++;//increases the id each time the addDonation method is ran
        const donation = { donation: this.state.donation, id: id, isAddedDonation: false } // new donation object that has a boolean value to track if the donation was sent to the Database yet
        const newDonations = this.state.pastDonations.concat(donation);//variable used to create a new array of pastDonations with the new donation object being added to it
        this.setState({ pastDonations: newDonations, donation: ''});
    }
    //method used to send the new donation to the database 
    dbAddDonation = e => {
        e.preventDefault();
        //searches through the array of donors from props to the email that is in state since the email is the unique key for every donor
        const donor = this.props.donors.find(donor => donor.email === this.state.email);
        const dValue = e.target.parentElement.value;
        const donation = {donationAmount: dValue, donationLocation: this.state.locationOfDonation, donorID: donor.id };
        this.props.addDonation( donation, localStorage.getItem('AuthToken'));

        let pastDonations = [...this.state.pastDonations];
        let index = pastDonations.findIndex(donation => donation.id === Number(e.target.parentElement.id));

        pastDonations[index+1].isAddedDonation = true;
        this.setState({pastDonations, isAddedDonation: true })
    }

    componentDidMount(){
        if(localStorage.getItem('isAdmin') === '1'){
            if(!localStorage.getItem('AuthToken')){
                this.props.history.push('/');
            }
        } else {
            this.props.history.push('/');
        }
    }

    render(){
        return (
            <div className="create-donor-wrapper">
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
                        history={this.props.history}
                    />
                </div >
            </div>
        );
    }
}
//passes down the states from the reducer as props to this component
const mapStateToProps = state => ({
    donors: state.donorReducer.donors
});
//HOC connect is used to allow this component to use the props that are passed down from the reducers as well as methods from the actions creator
export default connect(
    mapStateToProps,
    { addNewDonor, addDonation }
)(CreaterDonorView);