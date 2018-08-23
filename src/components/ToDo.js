import React from 'react';


class ToDo extends React.Component
{

    markComplete = (e) => {
        alert('marking ' + this.props.toDo.text + ' done? ' + e.target.checked);
    }

    render() 
    {
        return (
            <div>
                <input 
                    type="checkbox" 
                    value={this.props.toDo.isDone} 
                    onChange={this.markComplete}            
                />
                {this.props.toDo.text} 
            </div>
        );
    }
}
export default ToDo;