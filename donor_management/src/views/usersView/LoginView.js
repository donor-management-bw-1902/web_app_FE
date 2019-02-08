import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { Login } from '../../components';
import { login, resetAuthToken } from '../../store/actions';
import '../../styles/Login.css';

class LoginView extends React.Component {
    state = {
        username: '',
        password: '',
        isError : true // state used for checking if there is an error from loggin in or not
    };

    handleLogin = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    //method used to send the username and password up to the database using the action creator login
    login = e => {
        e.preventDefault();
        const user = { username: this.state.username, password: this.state.password }
        this.props.login(user);
    }

    componentDidMount(){
        localStorage.clear();
        this.props.resetAuthToken();
    }

    componentDidUpdate(){
        //checks if there is a authtoken in the state and if they user is admin or not. redirects them to the correct page based on if they are an admin or not and
        //saves the authtoken and if they are an admin or not to localstorage
        if(this.props.authToken){
            if(this.props.isAdmin === 0)
            this.props.history.push('/donors')
            else {
                this.props.history.push('/admin')
            }
            localStorage.setItem('AuthToken', this.props.authToken);
            localStorage.setItem('isAdmin', this.props.isAdmin)
        } 
        //checks if the user is currently loggin in or not and if an error from state has been set. If there is an error it saves the error to a variable and sets the 
        //isError component state to false and clears the input text fields
        if(!this.props.isLoggingIn){
            if(this.props.error){
               let error = this.props.error;
                if(this.state.isError){
                    alert(error)
                    this.setState({ isError: false, username: '', password: '' });    
                }
            }   
        } 
    }

    render() {
        if(this.props.isLoggingIn) {
        return (
            <div className="loader-spinner">
                <Loader type="Rings" color="black" height={120} width={120} />
            </div>
        )
        }
        return(
            <div className="login-wrapper">
                <h1>Login</h1>
                <Login 
                    history={this.props.history} 
                    username={this.state.username}
                    password={this.state.password}
                    handleLogin={this.handleLogin}
                    login={this.login}
                />
            </div>
        );
    }
}
//passes down the states from the reducer as props to this component
const mapStateToProps = state => ({
    error: state.userReducer.error,
    authToken: state.userReducer.authToken,
    isAdmin: state.userReducer.isAdmin,
    isLoggingIn: state.userReducer.isLoggingIn
});
//HOC connect is used to allow this component to use the props that are passed down from the reducers as well as methods from the actions creator
export default connect(
    mapStateToProps,
    { login, resetAuthToken }
)(LoginView);