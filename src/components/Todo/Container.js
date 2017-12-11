import {connect} from 'react-redux';
import {addTodo, setVisibilityFilter, toggleTodo} from './actions';
import TodoList from './TodoList';

function mapStateToProps(state) {
    return {
        todos: state.todos,
        displayType: state.displayType
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo: payload => dispatch(addTodo(payload)),
        setVisibilityFilter: displayType => dispatch(setVisibilityFilter(displayType)),
        toggleTodo: index => dispatch(toggleTodo(index)),
    };
}

//TodoList below is the component being passed to the connect function
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);