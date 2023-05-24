import { createSlice } from "@reduxjs/toolkit";

const state = {
  userId: null,
  nickName: null,
  stateChange: false,
  userEmail: null,
  avatar: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: state,
  reducers: {
    updateUserProfile: (state, { payload }) => ({
      ...state,
      userId: payload.userId,
      nickName: payload.nickName,
      userEmail: payload.userEmail,
    }),

    authStateChange: (state, { payload }) => ({
      ...state,
      stateChange: payload.stateChange,
    }),

    authSignOut: () => state,
  },
});

console.log('authSlice', authSlice);

    

