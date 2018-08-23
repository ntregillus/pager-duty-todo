import React from 'react';

class EditToDo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isDone: false,
            text: ''
        };
    }
    onIsDoneChange = (e) => {
        const isDone = e.target.checked
        this.setState(()=> ({isDone}));
    }
    onTextChange = (e) => {
        const text = e.target.value
        this.setState(()=> ({text}));
    }
    saveChanges = (e) =>
    {
        e.preventDefault();
        let error = ''
        if(this.state.text.trim() === ''){
            this.setState(() => ({
                error: 'Text is required for a todo!'
            }));
            return;
        }
       
        console.log('text: ', this.state.text, ' isDone: ', this.state.isDone);
        this.props.onSave({
            isDone: this.state.isDone,
            text: this.state.text
        });
        this.setState(() => ({
            error: '',
            text: '',
            isDone: false
        }));
    }
    render() {
        return (
            <form onSubmit={this.saveChanges}>
                {
                    this.state.error &&
                    <p>{this.state.error}</p>
                }
                <input type="checkbox" 
                    checked={this.state.isDone}
                    onChange={this.onIsDoneChange}
                />
                <input type="text" maxLength="50" 
                    value={this.state.text}
                    onChange={this.onTextChange}
                />
                
                <button>Save</button>
            </form>
        );
    }
} 
export default EditToDo;