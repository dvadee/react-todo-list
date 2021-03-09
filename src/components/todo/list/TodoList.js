import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTodosByVisibilityFilter } from '../../../redux/selectors';
import TodoListItem from './item/TodoListItem';
import TodoListEmpty from './empty/TodoListEmpty';

class TodoList extends React.Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
  };

  render() {
    const { todos } = this.props;

    if (todos.length > 0) {
      return (
        <div>
          {todos.map((todo) => (
            <TodoListItem {...todo} key={todo.id} />
          ))}
        </div>
      );
    } else {
      return <TodoListEmpty />;
    }
  }
}

const mapStateToProps = (state) => ({
  todos: getTodosByVisibilityFilter(state, state.visibilityFilter),
});

export default connect(mapStateToProps)(TodoList);
