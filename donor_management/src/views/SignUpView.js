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

    SignUp = e => {
        e.preventDefault();
        const newUser = { username: this.state.username, password:this.state.password, email: this.state.email };
        this.props.addNewUser(newUser);
        const boardMember = this.state.username;
        if(this.state.password.length < 3) {
            alert("Password must be atleast 3 characters long!");
        } else {
            localStorage.setItem('boardmember', boardMember)
        }
        this.props.history.push('/donors');
    }

    render() {
        return (
            <SignUp 
                SignUp={this.SignUp}
                username={this.state.username}
                password={this.state.password}
                email={this.state.email} 
                handleSignUp={this.handleSignUp}
            />
        );
    }
};

const mapStateToProps = state => ({});

export default connect(
    mapStateToProps,
    { addNewUser }
)(SignUpView);