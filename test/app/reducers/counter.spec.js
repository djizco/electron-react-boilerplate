import Lab from 'lab';
import { expect } from 'code';

import { increment, decrement } from '../../../app/actions/counter';
import reducer from '../../../app/reducers/counter';


const lab = exports.lab = Lab.script();
const { experiment, test } = lab;

experiment('Counter Reducer:', () => {
  test('Increment', done => {
    const action = increment();
    const state = reducer(0, action);

    expect(state).to.be.a.number();
    expect(state).to.equal(1);
    done();
  });

  test('Decrement', done => {
    const action = decrement();
    const state = reducer(0, action);

    expect(state).to.be.a.number();
    expect(state).to.equal(-1);
    done();
  });
});
