import React from 'react';
import { connect } from "react-redux";
import Loader from 'react-loader-spinner';

import { Donors, PageNumbers } from '../../components';
import { getDonors } from '../../store/actions';

import '../../styles/Donors.css';

class DonorsView extends React.Component {
    state ={
        currentPage: 1,
        donorsPerPage: 10,
    }

    handlePage = e => {
        const pageList = document.querySelectorAll('.page-list');
        const newPageList = Array.from(pageList);
        
        newPageList.forEach(page => {
          if(page.id === e.target.id){
            page.classList.add('current-page');
          } else {
            page.classList.remove('current-page');
          }
        });
        this.setState({
          currentPage: e.target.id
        });
    }

    nextPageClick = e => {
        let changePage = this.state.currentPage; 

        if(e.target.classList.contains('right')) {
            changePage++;
       } else {
            changePage--;
       }
       this.setState({ currentPage: changePage });
    }

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
                     <Loader type="Rings" color="black" height={80} width={80} />
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

const mapStateToProps = state => ({
    donors: state.donorReducer.donors,
    isFetchingDonors: state.donorReducer.isFetchingDonors,
    isAdmin: state.userReducer.isAdmin
});

export default connect(
    mapStateToProps,
    { getDonors }
)(DonorsView);