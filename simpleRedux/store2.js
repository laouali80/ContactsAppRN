// A store keeps the state(s) and reducer(s) and get invoke to dispatch an update(Action) or to return the state(s)
// An ation  has {type: 'add', payload: ''}
// rn this file: node store2.js

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

const DEFAULT_STATE = { user: {}, contacts: [] };

// merge two object
const merge = (prev, next) => Object.assign({}, prev, next);

const contactReducer = (prevState, newContact) => [...prevState, newContact];

const userReducer = (prevState, update) => merge(prevState, update);

const reducer = (prevState, action) => {
  // if (action.type === "UPDATE_USER") {
  //   return {
  //     ...prevState,
  //     user: userReducer(prevState.user, action.payload),
  //   };
  // }
  if (action.type === "UPDATE_USER") {
    return merge(prevState, {
      user: userReducer(prevState.user, action.payload),
    });
  }
  if (action.type === "UPDATE_CONTACT") {
    return merge(prevState, {
      contacts: contactReducer(prevState.contacts, action.payload),
    });
  }

  return state;
};

const store = new Store(reducer, DEFAULT_STATE);

// user
store.dispatch({ type: "UPDATE_USER", payload: { foo: "foo" } });
store.dispatch({ type: "UPDATE_USER", payload: { bar: "bar" } });
store.dispatch({ type: "UPDATE_USER", payload: { foo: "baz" } });

// contact
store.dispatch({
  type: "UPDATE_CONTACT",
  payload: { name: "test 1", phone: "12345678" },
});
store.dispatch({
  type: "UPDATE_CONTACT",
  payload: { name: "test 2", phone: "12345678" },
});

console.log(store.getState());
