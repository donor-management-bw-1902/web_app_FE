import React from 'react';
import { connect } from 'react-redux';

import { UpdateDonor } from '../components';
import { updateDonor } from '../store/actions';


class UpdateDonorView extends React.Component {
    state = {
        donor: '',
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
        this.setState({ [e.target.name]: e.target.value });
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
        this.setState({ donor });
    }

    render() {
        if(!this.state.donor) return <h2>Opps!</h2>;
        return(
            <UpdateDonor donor={this.state.donor}/>
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