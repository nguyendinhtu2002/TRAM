import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  lastName: "",
  firstName: "",
  sex: "",
  address: [],
  wishList: [],
  isAdmin: false,
  access_token: "",
};
export const userSlide = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      const {
        isAdmin,
        firstName = "",
        email = "",
        sex = "",
        lastName = "",
        address,
        wishList,
        access_token,
        _id=""
      } = action.payload;
      state.firstName = firstName;
      state.email = email;
      state.lastName = lastName;
      state.sex = sex;
      state.id = _id;
      state.access_token = access_token;
      state.isAdmin = isAdmin;
      state.address=address
    },
    resetUser: (state) => {
      state.firstName = "";
      state.email = "";
      state.lastName = "";
      state.sex = "";
      state.id = "";
      state.access_token = "";
      state.isAdmin = "";
      state.address=[]
    
   
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateUser, resetUser } = userSlide.actions;

export default userSlide.reducer;
