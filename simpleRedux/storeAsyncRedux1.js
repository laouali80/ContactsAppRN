// Optimize the redux
// A store keeps the state(s) and reducer(s) and get invoke to dispatch an update(Action) or to return the state(s)
// An ation  has {type: 'add', payload: ''}
// run this file: node store3.js

import fetch from "isomorphic-fetch";

export const login = async (username, password) => {
  const response = await fetch("http://localhost:5555/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (response.ok) {
    return true;
  }
  const errMessage = await response.json();
  // console.log(errMessage);
  throw new Error(errMessage.detail);
};

class Store {
  constructor(reducer, initialState) {
    this.reducer = reducer;
    this.state = initialState;
  }

  getState() {
    return this.state;
  }

  dispatch(action) {
    if (typeof action === "function") {
      action(this.dispatch.bind(this));
    } else {
      console.log("received an action:", action.type);
      this.state = this.reducer(this.state, action);
    }
  }
}

const DEFAULT_STATE = { user: {}, contacts: [] };

// action types
const UPDATE_USER = "UPDATE_USER";
const UPDATE_CONTACT = "UPDATE_CONTACT";
const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";

// merge two object
const merge = (prev, next) => Object.assign({}, prev, next);

const contactReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_CONTACT:
      return [...state, action.payload];
    default:
      state;
  }
};

const userReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return merge(state, action.payload);
    case UPDATE_CONTACT:
      return merge(state, { lastAdded: action.payload });
    case LOG_IN_SUCCESS:
      return merge(state, { token: "fakeToken" });
    default:
      state;
  }
};

const reducer = (state, action) => ({
  user: userReducer(state.user, action),
  contacts: contactReducer(state.contacts, action),
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

// async action creator
const logInUser = (username, password) => (dispatch) => {
  dispatch({ type: "LOG_IN_SENT" });
  login(username, password)
    .then(() => {
      dispatch({ type: "LOG_IN_SUCCESS" });
    })
    .catch((err) => {
      dispatch({ type: "LOG_IN_REJECTED" });
    });
};

const store = new Store(reducer, DEFAULT_STATE);

store.dispatch(logInUser("username", "password"));
/*
// user
store.dispatch(updateUser({ foo: "foo" }));
store.dispatch(updateUser({ bar: "bar" }));
store.dispatch(updateUser({ foo: "baz" }));

// contact
store.dispatch(addContact({ name: "test 1", phone: "12345678" }));
store.dispatch(addContact({ name: "test 2", phone: "12345678" }));
store.dispatch(addContact({ name: "test 3", phone: "12345678" }));
*/
console.log(store.getState());
