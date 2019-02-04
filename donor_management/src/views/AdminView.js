import React from 'react';
import { connect } from 'react-redux';

import Admin from '../components/Admin';
import { addNewUser } from '../store/actions';

class AdminView extends React.Component {
    render(){
        return (
            <div>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    users: state.userReducer.users,
    isUpdatingUser: state.userReducer.isUpdatingUser,
    isDeletingUser: state.userReducer.isDeletingUser,
    userId: state.userReducer.userId
});

export default connect(
    mapStateToProps,
    { addNewUser }
)(AdminView);