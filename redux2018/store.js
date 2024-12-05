import { createStore } from "redux";
// const { createStore} = require('redux')
import reducer from "./reducer";
import { addContact } from "./actions";

// const DEFAULT_STATE = { user: {}, contacts: [] };

const store = createStore(reducer);

/*
// user
store.dispatch(updateUser({ foo: "foo" }));
store.dispatch(updateUser({ bar: "bar" }));
store.dispatch(updateUser({ foo: "baz" }));
*/

// contact
store.dispatch(addContact({ name: "test 1", phone: "12345678" }));
store.dispatch(addContact({ name: "test 2", phone: "12345678" }));
store.dispatch(addContact({ name: "test 3", phone: "12345678" }));

console.log(store.getState());

export default store;
