import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { AuthState, LoginPayload } from "./types";

const initialState: AuthState = {
  loading: false,
  user: null,
  error: null,
};

// fake api
const fakeLoginApi = (data: LoginPayload) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.email === "test@gmail.com" && data.password === "123456") {
        resolve({ id: 1, name: "Manish", email: data.email });
      } else {
        reject("Invalid credentials");
      }
    }, 1000);
  });
};


export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (data: LoginPayload, { rejectWithValue }) => {
    try {
      const response: any = await fakeLoginApi(data);
      return response;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  }
);


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
