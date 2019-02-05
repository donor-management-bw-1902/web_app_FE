import React from 'react';

const authenticate = App => Login =>
    class extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                loggedIn: false
            }
        }

        componentDidMount() {
            if(localStorage.getItem('User')){
                this.setState(prevState => ({loggedIn: !prevState.loggedIn}));
            }
        }

        render(){
            if(this.state.loggedIn){
                return <App />
            } else {
            return <Login />
        }
        }
    };


export default authenticate;