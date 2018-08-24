import React from 'react';
import {connect} from 'react-redux';

import ToDo from './ToDo';
import EditToDo from './EditToDo';
import { createToDo } from '../actions/to-dos';
export const TodoList = (props) => (
    <div>
        <div id="list">
        {
            props.toDos &&
            props.toDos.map((item, index)=> 
                (<ToDo key={item.id} toDo={item} />)
            )
        }
        </div>
        <EditToDo onSave={(toDo) => {
            props.createToDo(toDo);
        }} />
    </div>
);
const mapStateToProps = (state) => {
    return {
        toDos: state.toDos
    };
}
const mapDispatchToProps = (dispatch) => ({
    createToDo: (toDo) =>{ 
        console.log('this was hit!')
        dispatch(createToDo(toDo))
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);