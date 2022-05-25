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
      //   console.log(action.payload);
      state.user = action.payload;
    },
  },
});

export const { setCredentials } = authSlice.actions;

export default authSlice.reducer;
