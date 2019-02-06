import React from 'react';
import { connect } from 'react-redux';

import { SingleDonor } from '../components';

class SingleDonorView extends React.Component {
    state = {
        donor: ''
    }

    componentDidMount(){
        const donor = this.props.donors.find(donor => `${donor.id}` === this.props.match.params.id);

        if(!this.props.authToken){
            this.props.history.push('/');
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
    donors: state.donorReducer.donors,
    authToken: state.userReducer.authToken
});

export default connect(
    mapStateToProps,
    {}
)(SingleDonorView);