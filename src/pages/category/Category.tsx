import React, { useState } from "react";
// components
import Picture from "../../components/common/Picture";
import Loading from "../../components/common/Loading";
import Paginate from "../../components/common/Paginate";

// hooks
import { useParams } from "react-router-dom";
import useGetPictures from "../../hooks/useGetPictures";

function Category() {
  const { category_id } = useParams();
  const [page, setPage] = useState(1);
  const { pictures, loading } = useGetPictures(10, page, +category_id!);
  const handlePageChange = (page: number) => setPage(page);
  return (
    <div id="container">
      <div className="home">
        {loading ? (
          <Loading />
        ) : (
          pictures?.map((picture) => (
            <Picture pic={picture} key={`cat-picture-${picture.id}`} />
          ))
        )}
      </div>
      <Paginate onPageChange={handlePageChange} />
    </div>
  );
}

export default Category;
