import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginResponse } from '../../interfaces/LoginInterface';

interface AuthState {
  user: LoginResponse | null;
}

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null } as AuthState,
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload;
    },
    logOut: (state) => {
      state.user = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;
