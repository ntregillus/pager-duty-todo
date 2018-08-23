import React from 'react';
import {connect} from 'react-redux';
import { editToDo } from '../actions/to-dos';

class ToDo extends React.Component
{
    state = {
        toDo:this.props.toDo,
        className: this.props.toDo.isDone ? 'done': 'to-do'   
    }
    markComplete = (e) => {
        const updates = {
            ...this.state.toDo,
            isDone: e.target.checked
        };
        this.props.updateToDo(updates);
        
        this.setState(()=> ({
            toDo: updates,
            className: updates.isDone ? 'done': 'to-do'
        }));
    }

    render() 
    {
        return (
            <div className={this.state.className}>
                <input 
                    type="checkbox" 
                    checked={this.state.toDo.isDone} 
                    onChange={this.markComplete}            
                />
                <span>{this.props.toDo.text}</span>
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