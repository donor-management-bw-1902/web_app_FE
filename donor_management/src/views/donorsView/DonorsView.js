import React from 'react';
import { connect } from "react-redux";
import Loader from 'react-loader-spinner';

import { Donors, PageNumbers } from '../../components';
import { getDonors } from '../../store/actions';

import '../../styles/Donors.css';

class DonorsView extends React.Component {
    state ={
        currentPage: 1, // Tracks current page in the pagination system
        donorsPerPage: 10, // Amount of donors that will be displayed per page
    }
    //method that handles which page the user is on when they click on a page number at the bottom of the webapp
    handlePage = e => {
        const pageList = document.querySelectorAll('.page-list');//grabs all elements with the page-list class name
        const newPageList = Array.from(pageList);//makes the query select into an array
        //loops through the array and applies current page to the page number that the user clicked on and removes it from the others
        newPageList.forEach(page => {
          if(page.id === e.target.id){
            page.classList.add('current-page');
          } else {
            page.classList.remove('current-page');
          }
        });
        //sets currentPage state to the number the user clicked on
        this.setState({
          currentPage: e.target.id
        });
    }
    //method that handles when a user clicks on an arrow for the pagination system that is displayed on the left and right side of the web app in the
    //donors list
    nextPageClick = e => {
        let changePage = this.state.currentPage; 
        const pageList = document.querySelectorAll('.page-list');
        const newPageList = Array.from(pageList);

        if(e.target.classList.contains('right')) {
            changePage++;
        } else {
            changePage--;
        }
        //checks to see if the changePage is higher than the amount of pages or less than 1 if it is sets the current page to the last page or the first page
        if(changePage > Math.ceil(this.props.donors.length / this.state.donorsPerPage)){
            changePage = Math.ceil(this.props.donors.length / this.state.donorsPerPage)
        } else if(changePage < 1){
            changePage = 1
        }

        newPageList.forEach(page => {
            if(page.id !== changePage){
                page.classList.remove('current-page')
            }
        });
        
       this.setState({ currentPage: changePage });
    }
    //method used to render the arrows onto the webpage. Checks if the user is at the first page or the last page and will render the arrows based on what the current page is
    //other wise both arrows will be rendered
    renderPageArrows = () => {

        if(Math.ceil(this.props.donors.length / this.state.donorsPerPage) === this.state.currentPage){
            return (
                <div onClick={this.nextPageClick} className="page-next-arrow left">{'<'}</div>
            );
        } else if (this.state.currentPage === 1){
            return (
                <div onClick={this.nextPageClick} className="page-next-arrow right">{'>'}</div>
            );
        }
        return(
            <>
                <div onClick={this.nextPageClick} className="page-next-arrow right">{'>'}</div>
                <div onClick={this.nextPageClick} className="page-next-arrow left">{'<'}</div>
            </>
        );
    }

    componentDidMount() {
        this.props.getDonors(localStorage.getItem('AuthToken'));
        
        if(!localStorage.getItem('AuthToken')){
            this.props.history.push('/');
        }    
    }

    render(){
        if(this.props.isFetchingDonors){
            return(
                <div className="loader-spinner">
                     <Loader type="Rings" color="black" height={120} width={120} />
                </div>
            );
        }
        return (
            <> 
                {this.props.donors && (
                    <div className="donors-wrapper">
                        <h1>Donors</h1>
                        <Donors donors={this.props.donors} isAdmin={this.props.isAdmin} currentPage={this.state.currentPage} donorsPerPage={this.state.donorsPerPage}/>
                        <PageNumbers donors={this.props.donors} donorsPerPage={this.state.donorsPerPage} handlePage={this.handlePage} currentPage={this.state.currentPage}/>
                        {this.renderPageArrows()}
                    </div>
                )}
            </>
        );
    }
}
//passes down the states from the reducer as props to this component
const mapStateToProps = state => ({
    donors: state.donorReducer.donors,
    isFetchingDonors: state.donorReducer.isFetchingDonors,
    isAdmin: state.userReducer.isAdmin
});
//HOC connect is used to allow this component to use the props that are passed down from the reducers as well as methods from the actions creator
export default connect(
    mapStateToProps,
    { getDonors }
)(DonorsView);