import { combineReducers } from "redux";
// const {combineReducers} = require('redux')
import { UPDATE_CONTACT, UPDATE_USER } from "./actions";

// merge two object
const merge = (prev, next) => Object.assign({}, prev, next);

const contactReducer = (state = [], action) => {
  switch (action.type) {
    case UPDATE_CONTACT:
      return [...state, action.payload];
    default:
      state;
  }
};

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return merge(state, action.payload);
    case UPDATE_CONTACT:
      return merge(state, { lastAdded: action.payload });
    default:
      state;
  }
};

const reducer = combineReducers({
  user: userReducer,
  contacts: contactReducer,
});

// Nesting reducers
// export const reducer = combineReducers({
//   user: combineReducers({
//     meta: userMetaReducer,
//     logins: userLoginReducer,
//   }),
//   contacts: contactReducer,
// });

export default reducer;
