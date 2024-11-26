// A reducer takes an update and merge it to the prevState
// A reducer return always a new obj
// run this file: node reducer.js

// const merge = (prev, next) => Object.assign({}, prev, next);
// const reducer = (prevState, update) => merge(prevState, update);

const reducer = (prevState, update) => ({
  ...prevState,
  ...update,
});

let state = {};

state = reducer(state, { foo: "foo" });
state = reducer(state, { bar: "bar" });
state = reducer(state, { foo: "baz" });

console.log(state);
