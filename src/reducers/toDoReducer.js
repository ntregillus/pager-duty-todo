import * as types from '../actions/to-dos';

const defaultToDos = [];
const toDoReducer = (state=defaultToDos, action) => {
    switch(action.type) {
        case types.ADD_TODO: 
            return [...state, action.toDo];
        case types.REMOVE_TODO:
            return state.filter((i)=> i!== action.id);
        case types.EDIT_TODO:
            return state.map((item) => {
                let result = item;
                if(item.id === action.toDo.id){
                    result = {
                        ...item,
                        ...action.toDo
                    };
                }
                return result;
            });
        default:
            return state;
    }
};

export default toDoReducer;