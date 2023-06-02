import { useNavigate } from "react-router-dom";

// type
import type { Category } from "../../redux/slices/categorySlice";

interface Props {
  category: Category;
  onActiveChange: (id: number) => void;
  active: boolean;
}
function HeaderItem({ category, onActiveChange, active }: Props) {
  const navigate = useNavigate();

  const onNavigate = (id: number) => {
    onActiveChange(id);
    navigate(`/category/${id}`);
  };

  return (
    <p
      style={{ color: active ? "black" : "gray" }}
      className="header-item-text"
      onClick={() => onNavigate(category.id)}
    >
      {category.name}
    </p>
  );
}

export default HeaderItem;
