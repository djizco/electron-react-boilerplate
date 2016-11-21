import React, { PropTypes } from 'react';

export function Button(props) {
  return (
    <button
      type="button"
      className={props.className}
      onClick={props.handleClick} >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default function Counter(props) {
  return (
    <div className="app-flex counter-app">
      <h1 className="app-header">Counter:</h1>
      <div className="counter">{props.counter}</div>
      <div className="columns">
        <div className="column is-6 text-center">
          <Button
            className="button is-success"
            handleClick={props.onIncrement} >
            Increment
          </Button>
        </div>
        <div className="column is-6 text-center">
          <Button
            className="button is-danger"
            handleClick={props.onDecrement} >
            Decrement
          </Button>
        </div>
      </div>
    </div>
  );
}

Counter.propTypes = {
  counter: PropTypes.number,
  onDecrement: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
};
