import React from "react";
import todos from "./todoData";

class TodoItem extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todos
    };
  }
  handleChange = () => {
    this.setState((prevState) => {
      return { completed: !prevState.completed };
    });
  };
  render() {
    const { todos } = this.state;
    return todos.map((todo) => {
      return (
        <div className="todo-item">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={this.handleChange}
          />
          <label> {todo.text} </label>
        </div>
      );
    });
  }
}

export default TodoItem;
