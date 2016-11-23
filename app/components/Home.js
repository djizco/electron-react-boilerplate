import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  button: {
    margin: '10px',
  },
};

export default function Home(props) {
  const { toCounter, toTodo } = props;
  return (
    <div className="home-container app-flex">
      <h1 className="title is-1">Electron React App</h1>
      <RaisedButton label="Counter App" style={styles.button} onClick={toCounter} />
      <RaisedButton label="Todo App" style={styles.button} onClick={toTodo} />
    </div>
  );
}

Home.propTypes = {
  toCounter: PropTypes.func.isRequired,
  toTodo: PropTypes.func.isRequired,
};
