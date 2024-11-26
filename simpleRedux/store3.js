// Optimize the redux
// A store keeps the state(s) and reducer(s) and get invoke to dispatch an update(Action) or to return the state(s)
// An ation  has {type: 'add', payload: ''}
// run this file: node store3.js

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

// action types
const UPDATE_USER = "UPDATE_USER";
const UPDATE_CONTACT = "UPDATE_CONTACT";

// merge two object
const merge = (prev, next) => Object.assign({}, prev, next);

const contactReducer = (prevState, action) => {
  if (action.type === UPDATE_CONTACT) return [...prevState, action.payload];
  return prevState;
};

const userReducer = (prevState, action) => {
  if (action.type === UPDATE_USER) return merge(prevState, action.payload);

  if (action.type === UPDATE_CONTACT)
    return merge(prevState, { lastAdded: action.payload });
  return prevState;
};

const reducer = (prevState, action) => ({
  user: userReducer(prevState.user, action),
  contacts: contactReducer(prevState.contacts, action),
});

// action cretors
const updateUser = (update) => ({
  type: UPDATE_USER,
  payload: update,
});

const addContact = (newContact) => ({
  type: UPDATE_CONTACT,
  payload: newContact,
});

const store = new Store(reducer, DEFAULT_STATE);

// user
store.dispatch(updateUser({ foo: "foo" }));
store.dispatch(updateUser({ bar: "bar" }));
store.dispatch(updateUser({ foo: "baz" }));

// contact
store.dispatch(addContact({ name: "test 1", phone: "12345678" }));
store.dispatch(addContact({ name: "test 2", phone: "12345678" }));
store.dispatch(addContact({ name: "test 3", phone: "12345678" }));

console.log(store.getState());
