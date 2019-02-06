import React from 'react';
import { connect } from 'react-redux';

import { SignUp } from '../components';
import { addNewUser } from '../store/actions';
import '../styles/SignUp.css';

class SignUpView extends React.Component {
    state = {
        username: '',
        password: '',
        name: ''
    };

    handleSignUp = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    SignUp = e => {
        e.preventDefault();
        const newUser = { username: this.state.username, password: this.state.password, name: this.state.name };
        this.props.addNewUser(newUser, this.props.authToken);
        // const boardMember = this.state.username;
        // if(this.state.password.length < 3) {
        //     alert("Password must be atleast 3 characters long!");
        // } else {
        //     localStorage.setItem('boardmember', boardMember)
        // }
        this.props.history.push('/admin');
        
        if(!this.props.error){
            alert("Board Member Created!");
        }
    }

    componentDidMount(){
        if(!this.props.authToken){
            this.props.history.push('/');
        }
    }

    render() {
        return (
            <div className="sign-up-wrapper">
                <h1>Create Board Member</h1>
                <SignUp 
                    SignUp={this.SignUp}
                    username={this.state.username}
                    password={this.state.password}
                    name={this.state.name}
                    handleSignUp={this.handleSignUp}
                />
            </div>
        );
    }
};

const mapStateToProps = state => ({
    authToken: state.userReducer.authToken
});

export default connect(
    mapStateToProps,
    { addNewUser }
)(SignUpView);