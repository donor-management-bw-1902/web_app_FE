import React from 'react';
import { connect } from 'react-redux';

import { SignUp } from '../../components';
import { addNewUser } from '../../store/actions';
import '../../styles/SignUp.css';

class SignUpView extends React.Component {
    state = {
        username: '',
        password: '',
        name: ''
    };

    handleSignUp = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    //method used to add a new user to the database using the action creator addNewUser
    SignUp = e => {
        e.preventDefault();
        const newUser = { username: this.state.username, password: this.state.password, name: this.state.name };
        this.props.addNewUser(newUser, localStorage.getItem('AuthToken'));
        this.props.history.push('/admin');
        
        if(!this.props.error){
            alert("Board Member Created!");
        }
    }

    componentDidMount(){
        if(localStorage.getItem('isAdmin') === '1'){
            if(!localStorage.getItem('AuthToken')){
                this.props.history.push('/');
            }
        } else {
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
//passes down the states from the reducer as props to this component
const mapStateToProps = state => ({});

//HOC connect is used to allow this component to use the props that are passed down from the reducers as well as methods from the actions creator
export default connect(
    mapStateToProps,
    { addNewUser }
)(SignUpView);