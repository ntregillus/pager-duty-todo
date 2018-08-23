import moment from 'moment';
import uuid from 'uuid';

export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const createToDo = (todo = {}) => {
    return (dispatch) => {
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
            setTimeout(() => {
                //taking a few seconds to remove, this will allow ui to show as strike through,
                // also allow user to edit state inbetween if they do not actually want ot complete
                console.log('attempting to remove id ', todoToAdd.id);
                dispatch(removeToDo(todoToAdd.id));
            }, 3000)
        }

        dispatch({
            type: ADD_TODO,
            toDo: todoToAdd
        });
    };   
}

export const editToDo = (toDo)=>{
    if(toDo.isDone && !toDo.completedDate){
        toDo.completedDate = moment();
    }

    return {
        type: EDIT_TODO,
        toDo: toDo
    };
}

export const removeToDo = (id) => {
    return {
        type: REMOVE_TODO,
        id: id
    };
};