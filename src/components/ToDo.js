import React from 'react';
import {connect} from 'react-redux';
import { editToDo } from '../actions/to-dos';

class ToDo extends React.Component
{
    state = {
        toDo:this.props.toDo
    }
    markComplete = (e) => {
        const updates = {
            ...this.state.toDo,
            isDone: e.target.checked
        };
        this.props.updateToDo(updates);
    }

    render() 
    {
        return (
            <div>
                <input 
                    type="checkbox" 
                    checked={this.state.toDo.isDone} 
                    onChange={this.markComplete}            
                />
                {this.props.toDo.text} 
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateToDo: (toDo) => {
        dispatch(editToDo(toDo));

    }
})

export default connect(undefined, mapDispatchToProps)(ToDo);