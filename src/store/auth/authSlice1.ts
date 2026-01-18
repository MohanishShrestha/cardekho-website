import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { AuthState, LoginPayload, RegisterPayload } from "./types";

const STORAGE_KEY = "my_users";
const LOGGED_USER_KEY = "logged_user";

const loadUsers = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

const saveUsers = (users: any[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
};

const saveLoggedUser = (user: any) => {
  localStorage.setItem(LOGGED_USER_KEY, JSON.stringify(user));
};

const loadLoggedUser = () => {
  const stored = localStorage.getItem(LOGGED_USER_KEY);
  return stored ? JSON.parse(stored) : null;
};

const initialState: AuthState = {
  loading: false,
  user: loadLoggedUser(),
  error: null,
};

const fakeLoginApi = (data: LoginPayload) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = loadUsers();
      const found = users.find(
        (u: any) => u.email === data.email && u.password === data.password
      );

      if (found) resolve(found);
      else reject("Invalid email or password");
    }, 700);
  });
};

const fakeRegisterApi = (data: RegisterPayload) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = loadUsers();

      const exists = users.some((u: any) => u.email === data.email);

      if (exists) {
        reject("Email already registered");
      } else {
        const newUser = { id: Date.now(), ...data };
        const updated = [...users, newUser];
        saveUsers(updated);
        resolve(newUser);
      }
    }, 700);
  });
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (data: LoginPayload, { rejectWithValue }) => {
    try {
      const response: any = await fakeLoginApi(data);
      saveLoggedUser(response);
      return response;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (data: RegisterPayload, { rejectWithValue }) => {
    try {
      const response: any = await fakeRegisterApi(data);
      saveLoggedUser(response);
      return response;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  }
);

const authSlice1 = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem(LOGGED_USER_KEY);
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
      })

      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = authSlice1.actions;
export default authSlice1.reducer;
