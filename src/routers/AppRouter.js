import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'; 

import Header from '../components/Header';
import ToDoList from '../components/ToDoList';
import EditToDo from '../components/EditToDo';
import CreateToDo from '../components/CreateToDo';
import NotFoundPage from    '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" exact={true} component={ToDoList} />
                <Route path="/create" component={CreateToDo} />
                 <Route path="/edit/:id" component={EditToDo} />
                 <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;