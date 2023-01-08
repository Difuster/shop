import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuth: true,
  user: {
    id: null,
    email: "",
  },
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.isAuth = true;
    },
    logOut: (state, action) => {
      state.isAuth = false;
    }
  }
});

export const {actions} = userSlice;
export default userSlice.reducer;
