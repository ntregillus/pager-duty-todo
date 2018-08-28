import React from 'react';
import {Link} from 'react-router-dom';


const Header = () => (
    <div className="container">
        <div className="header">
            <h1 className="header__title">Pager Duty: ToDos!</h1>
            <p className="header__subtitle">
                Helping you remember what your honey-do list!
            </p>
        </div>
        <Link to="/">To Dos</Link>|
        <Link to="/report">Report</Link>
    </div>
);

export default Header;