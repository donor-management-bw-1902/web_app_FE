import React from 'react';
import { connect } from "react-redux";

import { Donors } from '../components';
import { getUsers } from '../store/actions';

class DonorsView extends React.Component {

    componentDidMount() {
        this.props.getUsers();
    }

    render(){
        return (
            <> 
                {this.props.isFetchingUsers && (
                    <h1>Loading......</h1>
                )}
                {this.props.users && (
                    <div>
                        <h1>Donors</h1>
                        <Donors />
                    </div>
                )}
            </>
        );
    }
}

const mapStateToProps = state => ({
    users: state.userReducer.users,
    isFetchingUsers: state.userReducer.isFetchingUsers
});

export default connect(
    mapStateToProps,
    { getUsers }
)(DonorsView);