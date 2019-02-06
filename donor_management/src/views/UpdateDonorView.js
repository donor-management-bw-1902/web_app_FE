import React from 'react';
import { connect } from 'react-redux';

import { UpdateDonor } from '../components';
import { updateDonor } from '../store/actions';


class UpdateDonorView extends React.Component {
    state = {
        donorName: '',
        phoneNumber:'',
        email: '',
        city: '',
        address: '',
        zip: '',
        lastContacted: '',
        methodOfCommunication: ''
    };

    handleInput = e => {
        e.preventDefault();
        
        this.setState({ [e.target.name]: e.target.value} );
    }

    updateDonor = e => {
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

    componentDidMount() {
        const donor = this.props.donors.find(donor => `${donor.id}` === this.props.match.params.id);
        console.log(donor)
        this.setState({ 
            donorName: donor.name,
            email: donor.email,
            city: donor.city,
            address: donor.address,
            zip: donor.zip,
            lastContacted: donor.lastContacted,
            methodOfCommunication: donor.contactMethod
         });
    }

    render() {
        if(!this.state.email) return <h2>Opps!</h2>;
        return(
            <UpdateDonor 
            donorName={this.state.donorName}
            email={this.state.email}
            city={this.state.city}
            address={this.state.address}
            zip={this.state.zip}
            lastContacted={this.state.lastContacted}
            methodOfCommunication={this.state.methodOfCommunication}
            handleInput={this.handleInput} />
        );
    }
}

const mapStateToProps = state => ({
    donors: state.donorReducer.donors,
    authToken: state.userReducer.authToken
});

export default connect(
    mapStateToProps,
    { updateDonor }
)(UpdateDonorView);