import React from 'react';
import {connect} from 'react-redux';

import EditToDo from './EditToDo';
import {createToDo} from '../actions/to-dos';
class CreateToDo extends React.Component{
    createToDo = (toDo) => {
        this.props.createToDo(toDo);
        this.props.history.push('/');
    }
    render () {
        return (
            <EditToDo showComplete={true} onSave={this.createToDo} />  
          );
    }
} 
const mapDispatchToProps = (dispatch) => ({
        createToDo: (payload) => {
            dispatch(createToDo(payload));
            
        } 
});
export default connect(undefined, mapDispatchToProps)(CreateToDo);