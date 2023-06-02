import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  categoriesSelector,
  getCategories,
  globalLoading,
} from "../redux/slices/categorySlice";

export default function useGetCategories() {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(categoriesSelector);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return { categories };
}
