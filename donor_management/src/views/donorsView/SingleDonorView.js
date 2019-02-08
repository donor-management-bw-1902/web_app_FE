import React from 'react';
import { connect } from 'react-redux';

import { SingleDonor } from '../../components';
import { getDonations } from '../../store/actions';

class SingleDonorView extends React.Component {
    state = {
        donor: '',
        donorId: '',
        pastDonations: []
    }
    //method to be used as a callback function to grab the donations of the selected donor and save them to the state
    getDonations(id) {
        const pastDonations = this.props.donations.filter(donations => id === donations.donorID);
        this.setState({ pastDonations });
    }

    componentDidMount(){
        this.props.getDonations();
        const donor = this.props.donors.find(donor => `${donor.id}` === this.props.match.params.id);
        
        if(!localStorage.getItem('AuthToken')) {
            this.props.history.push('/');
        }
        if(!donor){
            this.props.history.push('/donors');
        } else {
            this.setState({ donor }, () => {
                setTimeout(() => { this.getDonations(donor.id);}, 300);
            });
        }
    }
    
    render(){
        return (
            <SingleDonor donor={this.state.donor} history={this.props.history} pastDonations={this.state.pastDonations} />
        );
    }
}
//passes down the states from the reducer as props to this component
const mapStateToProps = state => ({
    donors: state.donorReducer.donors,
    donations: state.donorReducer.donations
});
//HOC connect is used to allow this component to use the props that are passed down from the reducers as well as methods from the actions creator
export default connect(
    mapStateToProps,
    { getDonations }
)(SingleDonorView);