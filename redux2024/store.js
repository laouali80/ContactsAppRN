import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { PersistGate } from "redux-persist/integration/react";
import userReducer from "../redux2024/reducers_or_slices/userSlice";
import contactReducer, {
  fetchContacts,
} from "../redux2024/reducers_or_slices/contactsSlice";
import { addContact } from "./reducers_or_slices/contactsSlice";
import { updateLastAddedContact } from "./reducers_or_slices/userSlice";

// Persist configuration
const persistConfig = {
  key: "root",
  storage,
};

// Combine reducers
const rootReducer = combineReducers({
  user: userReducer,
  contacts: contactReducer,
});

// Wrap the root reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
const store = configureStore({
  reducer: persistedReducer,
});

// Create the persistor
const persistor = persistStore(store);

export { store, persistor };

// Dispatching actions
// store.dispatch(updateUser({ foo: "foo" }));
// store.dispatch(updateUser({ bar: "bar" }));
// store.dispatch(updateUser({ foo: "baz" }));

// store.dispatch(addContact({ name: "test 1", phone: "12345678" }));
// store.dispatch(addContact({ name: "test 2", phone: "12345678" }));
// store.dispatch(addContact({ name: "test 3", phone: "12345678" }));

// store.dispatch(updateLastAddedContact({ name: "test 3", phone: "12345678" }));

// store.dispatch(fetchContacts);
// console.log(store.getState());

export default store;
