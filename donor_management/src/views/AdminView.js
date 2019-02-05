import React from 'react';
import { connect } from 'react-redux';

import { Admin } from '../components';
import '../styles/Admin.css';

class AdminView extends React.Component {
    componentDidMount(){
        if(!this.props.authToken){
            this.props.history.push('/');
        }
    }

    render(){
        return(
            <div className="admin-wrapper">
                <Admin history={this.props.history}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    authToken: state.userReducer.authToken,
    isAdmin: state.userReducer.isAdmin
});

export default connect(
    mapStateToProps,
    {}
)(AdminView);