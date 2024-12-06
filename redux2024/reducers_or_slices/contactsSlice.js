import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../../components/api";

const initialState = {
  contactsList: [],
  loading: true,
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
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contactsList = action.payload.contacts;
        state.loading = false;
        state.Err = null; // Clear any previous error
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        // console.log("here.....", action.payload);
        state.status = action.payload.status;
        state.Err = action.payload.err;
      });
  },
});

export const fetchContacts = createAsyncThunk("fetchContacts", async () => {
  try {
    const contacts = await fetchUsers();
    // console.log(response);
    return {
      contacts: contacts,
    };
  } catch (err) {
    return {
      loading: "rejected",
      err: err.message,
    };
  }
});

// exporting the actions
export const { addContact } = contactsSlice.actions;

// Exporting the reducer
export default contactsSlice.reducer;
