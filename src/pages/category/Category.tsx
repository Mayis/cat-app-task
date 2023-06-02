import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Picture from "../home/Picture";
import useGetPictures from "../../hooks/useGetPictures";
import Loading from "../../components/common/Loading";
import ReactPaginate from "react-paginate";
import Paginate from "../../components/common/Paginate";

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
