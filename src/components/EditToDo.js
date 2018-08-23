import React from 'react';

class EditToDo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            toDo: props.toDo||{
                isDone: false,
                text: ''
            }
        };
    }
    onIsDoneChange = (e) => {
        this.state.toDo.isDone = e.target.checked;
    }
    onTextChange = (e) => {
        this.state.toDo.text = e.target.value;
    }
    saveChanges = () =>
    {
        console.log(this.state.toDo);
    }
    render() {
        return (
            <form onSubmit={this.saveChanges}>
                <input type="checkbox" 
                    value={this.state.toDo.isDone}
                    onChange={this.onIsDoneChange}
                />
                <input type="text" maxLength="50" 
                    value={this.state.toDo.text}
                    onChange={this.onTextChange}
                />
                <button>Save</button>
            </form>
        );
    }
} 
export default EditToDo;