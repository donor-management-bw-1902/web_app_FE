import React from 'react';
import { connect } from "react-redux";

import { Donors } from '../components';
import { getDonors } from '../store/actions';

class DonorsView extends React.Component {

    componentDidMount() {
        this.props.getDonors();
    }

    render(){
        return (
            <> 
                {this.props.isFetchingDonors && (
                    <h1>Loading......</h1>
                )}
                {this.props.donors && (
                    <div>
                        <h1>Donors</h1>
                        <Donors donors={this.props.donors}/>
                    </div>
                )}
            </>
        );
    }
}

const mapStateToProps = state => ({
    donors: state.BoardMemberReducer.donors,
    isFetchingDonors: state.BoardMemberReducer.isFetchingDonors
});

export default connect(
    mapStateToProps,
    { getDonors }
)(DonorsView);