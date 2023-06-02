import type { Category } from "../../redux/slices/categorySlice";
import { useNavigate } from "react-router-dom";

interface Props {
  category: Category;
}
function HeaderItem({ category }: Props) {
  const navigate = useNavigate();
  const onNavigate = (id: number) => {
    navigate(`/category/${id}`);
  };

  return (
    <p className="header-item-text" onClick={() => onNavigate(category.id)}>
      {category.name}
    </p>
  );
}

export default HeaderItem;
