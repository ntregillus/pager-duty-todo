import moment from 'moment';
import uuid from 'uuid';

export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

const persistToDos = (todoList) => {
    localStorage.setItem('todos', JSON.stringify(todoList));
};
const getStoredToDos = () => {
    const str = localStorage.getItem('todos');
    if(str){
        return JSON.parse(str);
    }else{
        return [];
    }
};
export const createToDo = (todo = {}) => {
    const todoToAdd = {
        isDone: false,
        text: '',
        dueDate: moment(),
        createdDate: moment(),
        completedDate: null,
        id: uuid(),
        ... todo
    };
    if(todoToAdd.isDone){
        todoToAdd.completedDate = moment();
    }

    
    return {
        type: ADD_TODO,
        toDo: todoToAdd
    };
};

export const editToDo = (toDo)=>{
    if(toDo.isDone && !toDo.completedDate){
        toDo.completedDate = moment();
    }

    return {
        type: EDIT_TODO,
        toDo: toDo
    };
}

export const removeTodo = (id) => {
    return {
        type: REMOVE_TODO,
        id: id
    };
};