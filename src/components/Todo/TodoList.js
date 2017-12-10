import React, {Component} from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputText: "",
            displayType: 'all',
            todos: []
        };
    }

    onSubmit = event => {
        event.preventDefault();

        const trimmed = this.state.inputText.trim();
        if (trimmed.length > 0) {
            this.addTodo(trimmed);
            this.setState({
                inputText: ''
            });
        }
    };

    addTodo = text => {
        this.setState({
            todos: [...this.state.todos, {text, completed: false}]
            //Another good way to do this is -=> todos: this.state.todos.concat({text, completed: false})
            //BAD WAY -=> todos: this.state.todos.push({text, completed: false})
        });
    };

    handleOnChange = event => {
        const key = event.target.value;
        this.setState({
            inputText: key
        })

    };

    remove(id) {

    };

    toggle(id) {
        const newTodos = this.state.todos.map((item, index) => {
            if(index === id) {
                return Object.assign(item, {
                    completed: !item.completed
                })
            }
            return item;
        });
        this.setState({todos: newTodos})
    };

    renderTodoList() {
        let filteredList = [];
        console.log(this.props.filter)
        switch(this.props.filter){
            case 'active':
                filteredList = this.state.todos.filter(item => !item.completed);
;                break;
            case 'completed':
                filteredList = this.state.todos.filter(item => item.completed);
                break;
            default:
                filteredList = [...this.state.todos];
        }

        return filteredList.map((item, index) => (
            <TodoItem
                toggle={() => this.toggle(index)}
                remove={() => this.remove(index)}
                item={item}
                key={index}
            />
        ))
    };

    render() {
        // console.log(this.state.todos);
        return (
            <section className="section">
                <div className="section">
                    <form onSubmit={this.onSubmit} className="columns">
                        <div className="column is-four-fifths">
                            <input
                                type="text"
                                className="input column"
                                placeholder="Add a To Do"
                                value={this.state.inputText}
                                onChange={this.handleOnChange}
                                maxLength={20}
                            />
                        </div>
                        <div className="column has-text-left">
                                <span className="icon has-text-primary fa fa-2x" onClick={this.onSubmit}>
                                    <i className="fa fa-plus"/>
                                </span>
                        </div>
                    </form>
                </div>
                <div className="section">
                    {this.renderTodoList()}
                </div>
                <footer className="footer">
                    <div className="content has-text-centered">
                        <button className="button" onClick={() => this.props.setVisibilityFilter('all')}>All</button>
                        <button className="button" onClick={() => this.props.setVisibilityFilter('completed')}>Completed</button>
                        <button className="button" onClick={() => this.props.setVisibilityFilter('active')}>Active</button>
                    </div>
                </footer>
            </section>
        );
    }
}
