import React from 'react';
import { connect } from 'react-redux';

import { SignUp } from '../components';
import { addNewUser } from '../store/actions';

class SignUpView extends React.Component {
    state = {
        username: '',
        password: '',
        email: ''
    };

    handleSignUp = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    SingUp = () => {
        const newUser = { username: this.state.username, password:this.state.password, email: this.state.email };
        this.props.addNewUser(newUser);
    }

    render() {
        return (
            <SignUp />
        );
    }
};

const mapStateToProps = state => ({});

export default connect(
    mapStateToProps,
    { addNewUser }
)(SignUpView);