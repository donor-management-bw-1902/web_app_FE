import React from 'react';
import { connect } from "react-redux";
import { Navbar } from '../components';

class NavbarView extends React.Component {
    render(){
        return(
            <Navbar history={this.props.history} location={this.props.location}/>
        );
    }
}


const mapStateToProps = state => ({});

export default connect(
    mapStateToProps,
    {}
)(NavbarView);