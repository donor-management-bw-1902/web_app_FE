import React from 'react';
import { connect } from 'react-redux';

import { UpdateDonor } from '../../components';
import { updateDonor } from '../../store/actions';

import '../../styles/UpdateDonor.css';

class UpdateDonorView extends React.Component {
    state = {
        donorName: '',
        phoneNumber:'',
        email: '',
        city: '',
        address: '',
        zip: '',
        lastContacted: '',
        methodOfCommunication: '',
        id: ''
    };

    handleInput = e => {
        e.preventDefault();
        
        this.setState({ [e.target.name]: e.target.value} );
    }

    updateDonor = () => {
        const newDonor = { 
            name: this.state.donorName, 
            email: this.state.email,
            city: this.state.city,
            address: this.state.address,
            zip: this.state.zip,
            contactMethod: this.state.methodOfCommunication,
            lastContacted: this.state.lastContacted
        }
        this.props.updateDonor(newDonor, this.state.id, localStorage.getItem('AuthToken'));
        this.props.history.push('/donors');
    }

    componentDidMount() {
        const donor = this.props.donors.find(donor => `${donor.id}` === this.props.match.params.id);
        
        if(!donor) return this.props.history.push('/donors');

        if(localStorage.getItem('isAdmin') === '1'){
            if(!localStorage.getItem('AuthToken')){
                this.props.history.push('/');
            } else {
                this.setState({ 
                    donorName: donor.name,
                    email: donor.email,
                    city: donor.city,
                    address: donor.address,
                    zip: donor.zip,
                    lastContacted: donor.lastContacted,
                    methodOfCommunication: donor.contactMethod,
                    id: donor.id
                });
            }
        } else {
            this.props.history.push('/');
        }
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
            handleInput={this.handleInput}
            updateDonor={this.updateDonor} 
            history={this.props.history}
            />
        );
    }
}

const mapStateToProps = state => ({
    donors: state.donorReducer.donors
});

export default connect(
    mapStateToProps,
    { updateDonor }
)(UpdateDonorView);