import React from 'react';

class EditToDo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isDone: false,
            text: '',
            showComplete: props.showComplete||false
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
            text: this.state.text,
            priority: this.state.priority||0
        });
        this.setState(() => ({
            error: '',
            text: '',
            isDone: false
        }));
    }
    setPriority = (e) => {
        const priority = e.target.value
        this.setState(()=> ({
            priority
        }));
    }

    render() {
        return (
            <form onSubmit={this.saveChanges}>
                {
                    this.state.error &&
                    <p>{this.state.error}</p>
                }
                { this.state.showComplete &&
                <input type="checkbox" 
                    checked={this.state.isDone}
                    onChange={this.onIsDoneChange}
                />
                }
                <input type="number" value={this.state.priority}
                    onChange={this.setPriority} 
                    placeholder="priority"/>
                <input type="text" maxLength="50" 
                    placeholder="text of to do"
                    value={this.state.text}
                    onChange={this.onTextChange}
                />
                <button>Save</button>
            </form>
        );
    }
} 
export default EditToDo;