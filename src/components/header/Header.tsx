import React from "react";
import "./scss/header.css";
// components
import HeaderItem from "./HeaderItem";

// hooks
import useGetCategories from "../../hooks/useGetCategories";
import { useNavigate } from "react-router-dom";

function Header() {
  const { categories } = useGetCategories();
  const navigate = useNavigate();
  return (
    <div id="header">
      <div className="header-logo">
        <h1 className="cat-logo" onClick={() => navigate("/")}>
          CAT APP
        </h1>
      </div>
      <div className="header-elements">
        {categories?.map((category) => (
          <HeaderItem
            category={category}
            key={`heder-category-${category.id}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Header;
