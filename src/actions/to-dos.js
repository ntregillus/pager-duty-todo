import moment from 'moment';
import uuid from 'uuid';

export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

const handleIsDoneTrue = (dispatch, toDo) => {
    if(toDo.isDone){
        toDo.completedDate = moment();
        setTimeout(() => {
            //taking a few seconds to remove, this will allow ui to show as strike through,
            // also allow user to edit state inbetween if they do not actually want ot complete
            console.log('attempting to remove id ', toDo.id);
            dispatch(removeToDo(toDo.id));
        }, 3000);
    }
};

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
        dispatch({
            type: ADD_TODO,
            toDo: todoToAdd
        });
        handleIsDoneTrue(dispatch, todoToAdd);
    };   
};

export const editToDo = (toDo)=>{
    return (dispatch) => {
        if(toDo.isDone && !toDo.completedDate){
            toDo.completedDate = moment();
        }

        dispatch({
            type: EDIT_TODO,
            toDo: toDo
        });
        handleIsDoneTrue(dispatch, toDo);

    };

};

export const removeToDo = (id) => {
    return {
        type: REMOVE_TODO,
        id: id
    };
};