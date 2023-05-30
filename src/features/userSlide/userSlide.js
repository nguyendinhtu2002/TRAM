import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  name: "",
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
        name = "",
        email = "",
        sex = "",
        lastName = "",
        address,
        wishList,
        access_token,
        _id=""
      } = action.payload;
      state.name = name;
      state.email = email;
      state.lastName = lastName;
      state.sex = sex;
      state.id = _id;
      state.access_token = access_token;
      state.isAdmin = isAdmin;
      state.address=address
    },
    resetUser: (state) => {
      state.name = "";
      state.email = "";
      state.hsd = "";
      state.money = 0;
      state.sex = "";
      state.sumMoney = 0;
      state.usename = "";
      state.chiTieu = 0;
      state.access_token = "";
      state.id = "";
      state.phone = "";
      state.isAdmin = false;
      state.boclink = false;
      state.fakelink = false;
      state.click = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateUser, resetUser } = userSlide.actions;

export default userSlide.reducer;
