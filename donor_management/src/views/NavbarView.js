import React from 'react';
import { connect } from "react-redux";
import { Navbar } from '../components';

class NavbarView extends React.Component {
    render(){
        return(
            <Navbar isAdmin={this.props.isAdmin} signOut={this.props.signOut} location={this.props.location}/>
        );
    }
}


const mapStateToProps = state => ({
    isAdmin: state.userReducer.isAdmin
});

export default connect(
    mapStateToProps,
    {}
)(NavbarView);