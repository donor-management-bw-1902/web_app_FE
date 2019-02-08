import React from 'react';
import { connect } from 'react-redux';

import { Login } from '../../components';
import { login, resetAuthToken } from '../../store/actions';
import '../../styles/Login.css';

class LoginView extends React.Component {
    state = {
        username: '',
        password: ''
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
        if(localStorage.getItem('AuthToken')) {
            localStorage.clear();
        }
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
    }

    render() {
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
    isAdmin: state.userReducer.isAdmin
});

export default connect(
    mapStateToProps,
    { login, resetAuthToken }
)(LoginView);