import React from "react";
import NavItem from "./NavItem";
import { Category } from "../../redux/slices/categorySlice";

interface Props {
  categories: Category[] | null;
  activeId: number | null;
  onActiveChange: (page: number) => void;
}
function Navbar({ categories, activeId, onActiveChange }: Props) {
  return (
    <div className="header-elements">
      {categories?.map((category) => (
        <NavItem
          active={activeId === category.id}
          category={category}
          onActiveChange={onActiveChange}
          key={`heder-category-${category.id}`}
        />
      ))}
    </div>
  );
}

export default Navbar;
