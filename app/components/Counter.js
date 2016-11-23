import React, { PropTypes } from 'react';
import Button from './Button';

export default function Counter(props) {
  return (
    <div className="counter-app app-flex">
      <h1 className="title is-1 has-text-centered">Counter:</h1>
      <div className="counter">{props.counter}</div>
      <div className="columns">
        <div className="column is-6 text-center">
          <Button
            success={true}
            handleClick={props.onIncrement}
            label="Increment" />
        </div>
        <div className="column is-6 text-center">
          <Button
            danger={true}
            handleClick={props.onDecrement}
            label="Decrement" />
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
