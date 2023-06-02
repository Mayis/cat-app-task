import ApiSlice from "../slice";

export default class CategorySlice extends ApiSlice {
  static GetCats(limit: number, page: number, category_id: number) {
    return this.request(
      `/images/search?limit=${limit}&page=${page}&category_ids=${category_id}`
    );
  }
  static GetCatCategoris() {
    return this.request("/categories");
  }
}
