import React, { Component, PropTypes } from 'react';

export default class AddTodo extends Component {
  handleClick = (e) => {
    e.preventDefault();
    const text = this.input.value;
    if (text) {
      this.props.onAddClick(text);
      this.input.value = '';
    }
  }

  render() {
    return (
      <div className="add-todo columns">
        <div className="column is-10">
          <input className="input" type="text" ref={c => { this.input = c; }} />
        </div>
        <div className="column is-2">
          <button
            className="button is-success"
            onClick={this.handleClick} >
            Add
          </button>
        </div>
      </div>
    );
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired,
};
