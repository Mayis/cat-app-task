import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  categoryPictureSelector,
  getCategoryPictures,
} from "../redux/slices/categorySlice";

export default function useMainPictures(
  limit: number,
  page: number,
  category_id: number
) {
  const dispatch = useAppDispatch();
  const pictures = useAppSelector(categoryPictureSelector);

  useEffect(() => {
    dispatch(getCategoryPictures({ limit, page, category_id }));
  }, [limit, page, category_id, dispatch]);

  return pictures;
}
