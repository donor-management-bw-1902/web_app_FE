import React from 'react';
import { connect } from "react-redux";

import { Donors } from '../components';
import { getDonors } from '../store/actions';

class DonorsView extends React.Component {

    componentDidMount() {
        this.props.getDonors(this.props.authToken);
        
        if(!this.props.authToken){
            this.props.history.push('/');
        }
    }

    render(){
        return (
            <> 
                {this.props.isFetchingDonors && (
                    <h1>Loading......</h1>
                )}
                {this.props.donors && (
                    <div className="donors-wrapper">
                        <h1>Donors</h1>
                        <Donors donors={this.props.donors} isAdmin={this.props.isAdmin}/>
                    </div>
                )}
            </>
        );
    }
}

const mapStateToProps = state => ({
    donors: state.donorReducer.donors,
    isFetchingDonors: state.donorReducer.isFetchingDonors,
    authToken: state.userReducer.authToken,
    isAdmin: state.userReducer.isAdmin
});

export default connect(
    mapStateToProps,
    { getDonors }
)(DonorsView);