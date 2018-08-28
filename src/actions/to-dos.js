import moment from 'moment';
import uuid from 'uuid';

export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

const persistToDos = (todoList) => {
    localStorage.setItem('todos', JSON.stringify(todoList));
};
export const getStoredToDos = () => {
    const str = localStorage.getItem('todos');
    if(str){
        return JSON.parse(str).map((item) => {
            return {
                priority: 0,
                ...item
            };
        });
    }else{
        return [];
    }
};

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
            priority: 0,
            id: uuid(),
            ... todo
        };  
        const existing = getStoredToDos();
        persistToDos([...existing, todoToAdd]);
        
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
        const updated = getStoredToDos().map((item) => {
            if(item.id === toDo.id){
                return {
                    ... item,
                    ... toDo
                };
            }
            return item;
        });

        persistToDos(updated);

        dispatch({
            type: EDIT_TODO,
            toDo: toDo
        });
        handleIsDoneTrue(dispatch, toDo);

    };

};

export const removeToDo = (id) => {

    const persistList = getStoredToDos().filter((item) =>{
        return item.id !== id;
    });
    persistToDos(persistList);
    return {
        type: REMOVE_TODO,
        id: id
    };
};