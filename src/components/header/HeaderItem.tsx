import React from "react";
import type { Category } from "../../redux/slices/categorySlice";

interface Props {
  category: Category;
}
function HeaderItem({ category }: Props) {
  return <p className="header-item-text">{category.name}</p>;
}

export default HeaderItem;
