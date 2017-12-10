import React from 'react';
import TodoList from "./TodoList";

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: 'all'
        }
    }

    setVisibilityFilter = filter => {
        this.setState({filter});
    };

    render() {
        return (
            <div className="container">
                <div className="columns">
                    <div className="column is-2"></div>
                    <div className="column is-8">
                        <TodoList setVisibilityFilter={this.setVisibilityFilter} filter={this.state.filter}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Todo;