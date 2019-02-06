import React from 'react';
import { connect } from 'react-redux';

import { SingleDonor } from '../components';

class SingleDonorView extends React.Component {
    state = {
        donor: ''
    }

    componentDidMount(){
        const donor = this.props.donors.find(donor => `${donor.id}` === this.props.match.params.id);

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
            <SingleDonor donor={this.state.donor} history={this.props.history}/>
        );
    }
}

const mapStateToProps = state => ({
    donors: state.donorReducer.donors
});

export default connect(
    mapStateToProps,
    {}
)(SingleDonorView);