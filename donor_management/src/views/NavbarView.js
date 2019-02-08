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

//passes down the states from the reducer as props to this component
const mapStateToProps = state => ({});
//HOC connect is used to allow this component to use the props that are passed down from the reducers as well as methods from the actions creator
export default connect(
    mapStateToProps,
    {}
)(NavbarView);