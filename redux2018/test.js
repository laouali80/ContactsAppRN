import { combineReducers, createStore } from "redux";
// const {combineReducers, createStore} = require('redux')

const DEFAULT_STATE = { user: {}, contacts: [] };

// action types
const UPDATE_USER = "UPDATE_USER";
const UPDATE_CONTACT = "UPDATE_CONTACT";

// merge two object
const merge = (prev, next) => Object.assign({}, prev, next);

const contactReducer = (state = [], action) => {
  if (action.type === UPDATE_CONTACT) return [...state, action.payload];
  return state;
};

const userReducer = (state = {}, action) => {
  if (action.type === UPDATE_USER) return merge(state, action.payload);

  if (action.type === UPDATE_CONTACT)
    return merge(state, { lastAdded: action.payload });
  return state;
};

const reducer = combineReducers({
  user: userReducer,
  contacts: contactReducer,
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

const store = createStore(reducer, DEFAULT_STATE);

// user
store.dispatch(updateUser({ foo: "foo" }));
store.dispatch(updateUser({ bar: "bar" }));
store.dispatch(updateUser({ foo: "baz" }));

// contact
store.dispatch(addContact({ name: "test 1", phone: "12345678" }));
store.dispatch(addContact({ name: "test 2", phone: "12345678" }));
store.dispatch(addContact({ name: "test 3", phone: "12345678" }));

console.log(store.getState());
