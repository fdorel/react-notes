import React, {Component} from 'react';

class AddTodo extends Component {
    state = {
        content: ''
    };

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ''
            }
        )
    };

    render() {
        return (
            <React.Fragment>
            <div className="123">
                <form onSubmit={this.handleSubmit}>
                    <label>Add a new note below</label>
                    <input className="validate" id="newNote" type="text" onChange={this.handleChange} value={this.state.content}/>
                    <button type="submit" className="btn" disabled={!this.state.content || !this.state.content.trim().length}>Add</button>
                </form>
                <h6>To delete notes, click on a note's text.</h6>
            </div>
            </React.Fragment>
        );
    }
}

export default AddTodo;

