import ApiSlice from "./slice";
import CategorySlice from "./slices/categorySlice";

export default class Api extends ApiSlice {
  static category = CategorySlice;
}
