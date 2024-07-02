import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  phoneNumber: "",
  githubUrl: "",
  yearsOfExperience: 0,
  password: "",
  confirmPassword: "",
};

export const simpleFormSlice = createSlice({
  name: "simpleForm",
  initialState,
  reducers: {
    updateSimpleForm: (state, action) => {
      const payload = action.payload;
      return {
        ...state,
        name: payload.name,
        email: payload.email,
        phoneNumber: payload.phoneNumber,
        githubUrl: payload.githubUrl,
        yearsOfExperience: payload.yearsOfExperience,
        password: payload.password,
        confirmPassword: payload.confirmPassword,
      };
    },
  },
});

export const { updateSimpleForm } = simpleFormSlice.actions;

export default simpleFormSlice.reducer;

export const selectSimpleForm = (state) => {
  return state.simpleForm;
};