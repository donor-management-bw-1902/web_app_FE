import React from 'react';
import { connect } from 'react-redux';

import { Admin } from '../../components';
import '../../styles/Admin.css';

class AdminView extends React.Component {
    componentDidMount(){
        if(localStorage.getItem('isAdmin') === '1'){
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
//passes down the states from the reducer as props to this component
const mapStateToProps = state => ({});

//HOC connect is used to allow this component to use the props that are passed down from the reducers as well as methods from the actions creator
export default connect(
    mapStateToProps,
    {}
)(AdminView);