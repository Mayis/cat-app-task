import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL } from "../../helpers/api";
import request from "../../helpers/request";
import { RootState } from "../store";

export interface Picture {
  height: number;
  width: number;
  id: string;
  url: string;
}
export interface Category {
  id: number;
  name: string;
}

interface initialStateT {
  categories: null | Category[];
  categoryPictures: null | Picture[];
  loading: boolean;
}

const initialState: initialStateT = {
  categories: null,
  categoryPictures: null,
  loading: false,
};

export const getCategoryPictures = createAsyncThunk(
  "category/getCategoryPictures",
  async ({
    limit,
    page,
    category_id,
  }: {
    limit: number;
    page: number;
    category_id: number;
  }) => {
    return request(
      "GET",
      baseURL +
        `/images/search?limit=${limit}&page=${page}&category_ids=${category_id}`
    ).then((data) => data);
  }
);

export const getCategories = createAsyncThunk(
  "category/getCategories",
  async () => {
    return request("GET", baseURL + "/categories ").then((data) => data);
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCategoryPictures.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategoryPictures.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.categoryPictures = payload;
      })
      .addCase(getCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategories.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.categories = payload;
      });
  },
});

export default categorySlice.reducer;

export const categoriesSelector = (state: RootState) =>
  state.category.categories;

export const categoryPictureSelector = (state: RootState) =>
  state.category.categoryPictures;

export const globalLoading = (state: RootState) => state.category.loading;
