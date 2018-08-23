import React from 'react';
import {connect} from 'react-redux';

import ToDo from './ToDo';
import CreateToDo from './CreateToDo';
export const TodoList = (props) => (
    <div id="list">
    {
        props.toDos &&
        props.toDos.map((item, index)=> 
            <ToDo key={index} toDo={item} />
        ) 
    }
    </div>
);
const mapStateToProps = (state) => {
    return {
        toDos: state.toDos
    };
}
export default connect(mapStateToProps)(TodoList);