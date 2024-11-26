// A store keeps the state(s) and reducer(s) and get invoke to dispatch an update(Action) or to return the state(s)
// run this file: node store.js

class Store {
  constructor(reducer, initialState) {
    this.reducer = reducer;
    this.state = initialState;
  }

  getState() {
    return this.state;
  }

  dispatch(update) {
    this.state = this.reducer(this.state, update);
  }
}

const merge = (prev, next) => Object.assign({}, prev, next);
const reducer = (prevState, update) => merge(prevState, update);

// const reducer = (prevState, update) => ({
//   ...prevState,
//   ...update,
// });

const store = new Store(reducer);

store.dispatch({ foo: "foo" });
store.dispatch({ bar: "bar" });
store.dispatch({ foo: "baz" });

console.log(store.getState());
