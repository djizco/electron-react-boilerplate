import React, { PropTypes } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

export default function Todo(props) {
  return (
    <div className="todo-app">
      <h1 className="title is-1 has-text-centered">Todo List:</h1>
      <div className="columns">
        <div className="column is-8 is-offset-2 text-center">
          <AddTodo onAddClick={props.handleAddClick} />
        </div>
      </div>
      <div className="columns">
        <div className="column is-8 is-offset-2 text-left">
          <TodoList todos={props.todos} />
        </div>
      </div>
    </div>
  );
}

Todo.propTypes = {
  handleAddClick: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
};
