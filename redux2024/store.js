import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux2024/reducers_or_slices/userSlice";
import contactReducer from "../redux2024/reducers_or_slices/contactsSlice";
import { addContact } from "./reducers_or_slices/contactsSlice";
import { updateLastAddedContact } from "./reducers_or_slices/userSlice";

// Configure store
const store = configureStore({
  reducer: {
    user: userReducer,
    contacts: contactReducer,
  },
});

// Dispatching actions
// store.dispatch(updateUser({ foo: "foo" }));
// store.dispatch(updateUser({ bar: "bar" }));
// store.dispatch(updateUser({ foo: "baz" }));

store.dispatch(addContact({ name: "test 1", phone: "12345678" }));
store.dispatch(addContact({ name: "test 2", phone: "12345678" }));
store.dispatch(addContact({ name: "test 3", phone: "12345678" }));

store.dispatch(updateLastAddedContact({ name: "test 3", phone: "12345678" }));

// console.log(store.getState());

export default store;
