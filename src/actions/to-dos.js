import moment from 'moment';
import uuid from 'uuid';

export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const createAction = (todo = {}) => {
    const todoToAdd = {
        isDone: false,
        text: '',
        dueDate: moment(),
        id: uuid(),
        ... todo
    };


    return {
        type: ADD_TODO,
        toDo: todoToAdd
    };
}

export const editToDo = (todo)=>{
    return {
        type: EDIT_TODO,
        todo: todo
    };
}

export const removeTodo = (id) => {
    return {
        type: REMOVE_TODO,
        id: id
    };
};