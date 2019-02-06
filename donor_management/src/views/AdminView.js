import React from 'react';
import { connect } from 'react-redux';

import { Admin } from '../components';
import '../styles/Admin.css';

class AdminView extends React.Component {
    componentDidMount(){
        if(this.props.isAdmin === 1){
            if(!localStorage.getItem('AuthToken')){
                this.props.history.push('/');
            }
        } else {
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
    isAdmin: state.userReducer.isAdmin
});

export default connect(
    mapStateToProps,
    {}
)(AdminView);