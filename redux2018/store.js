import { createStore, applyMiddleware } from "redux";
// const { createStore} = require('redux')
import reducer from "./reducer";
import { addContact } from "./actions";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// const DEFAULT_STATE = { user: {}, contacts: [] };

/*
// thunk: an expression to delay a work
const thunkMiddleware = (store) => (next) => (action) => {
  if (typeof action === "function") {
    action(store.dispatch);
  } else {
    next(action);
  }
};
*/

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
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
