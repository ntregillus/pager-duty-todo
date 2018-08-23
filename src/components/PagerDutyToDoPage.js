import React from 'react';
import ToDoList from './ToDoList';

const PagerDutyToDoPage  = () => (
    <div>
    <ToDoList toDos={[{isDone: false, text: 'blah'}]} />
    </div>
);


export default PagerDutyToDoPage;
