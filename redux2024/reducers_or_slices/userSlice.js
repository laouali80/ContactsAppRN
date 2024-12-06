import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../../components/api";

const initialState = {};

// User slice
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    // Actions
    updateUser(state, action) {
      Object.assign(state, action.payload); // Immer handles immutability
    },
    updateLastAddedContact(state, action) {
      state.lastAdded = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(logInUser.pending, (state) => {
        state.status = "pending";
      })
      .addCase(logInUser.fulfilled, (state, action) => {
        state.status = action.payload.status;
        state.token = action.payload.token;
        state.loginErr = null; // Clear any previous error
      })
      .addCase(logInUser.rejected, (state, action) => {
        // console.log("here.....", action.payload);
        state.status = action.payload.status;
        state.loginErr = action.payload.err;
      });
  },
});

export const logInUser = createAsyncThunk(
  "logInUser",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const token = await login(username, password);
      // console.log(response);
      return {
        status: "fulfilled",
        token: token,
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
export const { updateUser, updateLastAddedContact } = userSlice.actions;

// Exporting the reducer
export default userSlice.reducer;
