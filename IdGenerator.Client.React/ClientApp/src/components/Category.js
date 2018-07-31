import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//import { actionCreators } from '../store/Categories';
import { getCategoriesAsync, addCategory  } from '../actions/category'


import { MainHeader } from './shared/MainHeader';
import { DataTable } from './shared/DataTable';
import { BasicSegment } from './shared/BasicSegment';
import { BasicFormInputs } from './shared/BasicFormInputs';
import { BasicFormSubmit } from './shared/BasicFormSubmit';




class Categories extends Component {
    
    state = {categoryId: '', categoryName:''};

    getApiUrl() {
        return 'http://localhost:64098/api/Category';
    }

    componentDidMount() {
        this.props.getCategoriesAsync();
    }

    postCategory(id, name) {

        this.props.addCategory({ id: id, name: name }); 


        //const headers = new Headers();
        //headers.append('Content-Type', 'application/json');

        //var categoryInput = { id: id, name: name };
        //const options = {
        //    method: 'POST',
        //    headers,
        //    body: JSON.stringify(categoryInput)
        //};

        //const request = new Request(this.getApiUrl(), options);
        //fetch(request)
        //    .then(reposnse => {

        //        if (reposnse.status === 201) {
        //            this.props.addCategoryWithDispatch(categoryInput);
        //        }                
        //    });
        
       
    }

    handleAddCategory = () => {
       this.postCategory(this.state.categoryId, this.state.categoryName);
    }

    handleCategoryId = (event) => {
        this.setState({ categoryId: event.target.value });
    }

    handleCategoryName = (event) => {
        this.setState({ categoryName: event.target.value });
    }


    render() {
        return (
            <div>
                <MainHeader text='Categories' icon='edit outline' />     
                
                <BasicSegment name="Create" color='blue'>
                    <BasicFormInputs names={['Id', 'Name']} count='2' handlers={[(event) => this.handleCategoryId(event), (event) => this.handleCategoryName(event)]}/>
                    <BasicFormSubmit content='Add' align='right' primary onClick={this.handleAddCategory} />                   
                </BasicSegment>      

                <BasicSegment name="All" color='blue'>
                    <DataTable data={this.props.categories} columnNames={['Id', 'Name']} dataPropsNames={['id', 'name']}/>
                </BasicSegment>

            </div>

                            
        );
    }
}


const mapStateToProps = (state) => {
    console.log('state');
    console.log(state);

    return {
        categories: state.categories
    };

}

const mapDispatchToProps = { getCategoriesAsync, addCategory };


export default connect(mapStateToProps, mapDispatchToProps)(Categories);

//export default connect(
//    state => state.Categories,
//    dispatch => bindActionCreators(actionCreators, dispatch)
//)(Categories);