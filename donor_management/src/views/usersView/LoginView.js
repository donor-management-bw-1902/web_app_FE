import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { Login } from '../../components';
import { login, resetAuthToken } from '../../store/actions';
import '../../styles/Login.css';
let isError = true;
class LoginView extends React.Component {
    state = {
        username: '',
        password: '',
        isError: false
    };

    handleLogin = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    login = e => {
        e.preventDefault();
        const user = { username: this.state.username, password: this.state.password }
        this.props.login(user);
    }

    componentDidMount(){
        // if(localStorage.getItem('AuthToken')) {
            
        // }
        localStorage.clear();
        this.props.resetAuthToken();
    }

    componentDidUpdate(){
        
        if(this.props.authToken){
            if(this.props.isAdmin === 0)
            this.props.history.push('/donors')
            else {
                this.props.history.push('/admin')
            }
            localStorage.setItem('AuthToken', this.props.authToken);
            localStorage.setItem('isAdmin', this.props.isAdmin)
        } 
        if(!this.props.isLoggingIn ){
            if(this.props.error){
                if(isError){
                    isError = false;
                    alert(this.props.error)
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

const mapStateToProps = state => ({
    error: state.userReducer.error,
    authToken: state.userReducer.authToken,
    isAdmin: state.userReducer.isAdmin,
    isLoggingIn: state.userReducer.isLoggingIn
});

export default connect(
    mapStateToProps,
    { login, resetAuthToken }
)(LoginView);