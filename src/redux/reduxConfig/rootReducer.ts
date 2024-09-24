import {baseApi} from "../api/baseApi";
import themeReducer from '../features/themeSlice'


export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  theme: themeReducer,
};
