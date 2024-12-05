import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

// Contacts slice
const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState,
  reducers: {
    // Actions
    addContact(state, action) {
      state.push(action.payload); // Immer handles immutability
    },
  },
});

// exporting the actions
export const { addContact } = contactsSlice.actions;

// Exporting the reducer
export default contactsSlice.reducer;
