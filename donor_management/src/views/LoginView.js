import React from 'react';
import { connect } from 'react-redux';

import { Login } from '../components';

class LoginView extends React.Component {
    state = {
        username: '',
        password: ''
    };

    handleLogin = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    login = () => {

    }
    
    render() {
        return(
            <div>
                <Login history={this.props.history}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    users: state.userReducer.users,
    userId: state.userReducer.userId
});

export default connect(
    mapStateToProps,
    {}
)(LoginView);