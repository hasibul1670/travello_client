import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  siteSettings: "",
  error: "",
  siteColors: "",
  siteWidgets: [],
  updateStatus: false,
  pages: "",
};

const siteSettingSlice = createSlice({
  name: "siteSetting",
  initialState,
  reducers: {
    setSiteSettings(state, action) {
      state.siteSettings = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setSiteColors(state, action) {
      state.siteColors = action.payload;
    },
    setSiteWidgets(state, action) {
      state.siteWidgets = action.payload;
    },
    setUpdateStatus(state, action) {
      state.updateStatus = action.payload;
    },
    setPages(state, action) {
      state.pages = action.payload;
    },
  },
});

export const {setError, setPages, setSiteColors, setSiteWidgets, setSiteSettings, setUpdateStatus} =
  siteSettingSlice.actions;

export default siteSettingSlice.reducer;
