import React from 'react';
import { connect } from 'react-redux';

import { Login } from '../components';
import { getUsers } from '../store/actions';

class LoginView extends React.Component {
    state = {
        username: '',
        password: ''
    };

    handleLogin = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    login = () => {
        //fetch the users from the DB and compare login info with what is in the database check if admin or not if user is in database redirect them
        //to their webpage either Admin page or Boardmember page
        
        if(this.props.isAdmin){
            this.props.history.push('/admin');
        } else {
            this.props.history.push('/donors');
        }
    }
    
    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        return(
            <div>
                <Login 
                    history={this.props.history} 
                    username={this.state.username}
                    password={this.state.password}
                    handleLogin={this.handleLogin}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    users: state.userReducer.users,
    userId: state.userReducer.userId,
    isAdmin: state.userReducer.isAdmin
});

export default connect(
    mapStateToProps,
    { getUsers }
)(LoginView);