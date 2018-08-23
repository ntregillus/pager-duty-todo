import React from 'react';
import ToDo from './ToDo';

const TodoList = (props) => (
    <div id="list">
    {
        props.toDos &&
        props.toDos.map((item, index)=> 
            <ToDo key={index} toDo={item} />
        ) 
    }
    </div>
);

export default TodoList;