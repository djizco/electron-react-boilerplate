import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  button: {
    margin: '10px',
  },
};

export function Button(props) {
  return (
    <button
      type="button"
      className="button is-medium is-dark is-outlined"
      onClick={props.onContinue} >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  onContinue: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default function Home(props) {
  return (
    <div className="home-container app-flex">
      <h1 className="home-header">Electron React App</h1>
      <Button onContinue={props.toCounter}>Continue to Counter App</Button>
      <Button onContinue={props.toTodo}>Continue to Todo App</Button>
      <RaisedButton label="Raised Button" style={styles.button} />
      <FlatButton label="Flat Button" style={styles.button} />
    </div>
  );
}

Home.propTypes = {
  toCounter: PropTypes.func.isRequired,
  toTodo: PropTypes.func.isRequired,
};
