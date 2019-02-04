import React from 'react';
import { connect } from 'react-redux';

import UserProfile from '../components/UserProfile';
import { updateUser, deleteUser } from '../store/actions';

class UserProfileView extends React.Component {
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
    { updateUser, deleteUser }
)(UserProfileView);