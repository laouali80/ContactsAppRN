import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../../components/api";

const initialState = {
  contactsList: [],
  status: "pending",
};

// Contacts slice
const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState,
  reducers: {
    // Actions
    addContact(state, action) {
      state.contactsList.push(action.payload); // Immer handles immutability
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contactsList = action.payload.contacts;
        state.status = "success";
        state.Err = null; // Clear any previous error
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        // console.log("Payload:", action.payload);
        // console.log("Error:", action.error);
        state.status = action.payload.status;
        state.Err = action.payload.err;
      });
  },
});

export const fetchContacts = createAsyncThunk(
  "fetchContacts",
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await fetchUsers();
      // console.log(response);
      return {
        contacts: contacts,
      };
    } catch (err) {
      return rejectWithValue({
        status: "rejected",
        err: err.message,
      });
    }
  }
);

// exporting the actions
export const { addContact } = contactsSlice.actions;

// Exporting the reducer
export default contactsSlice.reducer;
