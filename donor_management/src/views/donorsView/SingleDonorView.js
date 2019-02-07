import React from 'react';
import { connect } from 'react-redux';

import { SingleDonor } from '../../components';
import { getDonations } from '../../store/actions';

class SingleDonorView extends React.Component {
    state = {
        donor: '',
        pastDonations: []
    }

    componentDidMount(){
        this.props.getDonations();
        const donor = this.props.donors.find(donor => `${donor.id}` === this.props.match.params.id);
        const pastDonations = this.props.donations.filter(donations => donor.id === donations.donorID);
        this.setState({ pastDonations });

        if(!localStorage.getItem('AuthToken')) {
            this.props.history.push('/');
        }
        if(!donor){
            this.props.history.push('/donors');
        } else {
            this.setState({ donor });
        }
    }

    render(){
        return (
            <SingleDonor donor={this.state.donor} history={this.props.history} pastDonations={this.state.pastDonations}/>
        );
    }
}

const mapStateToProps = state => ({
    donors: state.donorReducer.donors,
    donations: state.donorReducer.donations
});

export default connect(
    mapStateToProps,
    { getDonations }
)(SingleDonorView);