import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Picture from "../home/Picture";
import useGetPictures from "../../hooks/useGetPictures";
import Loading from "../common/Loading";
import ReactPaginate from "react-paginate";

function Category() {
  const { category_id } = useParams();
  const [page, setPage] = useState(1);
  const { pictures, loading } = useGetPictures(10, page, +category_id!);
  console.log(loading);

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
      <div className="footer">
        <ReactPaginate
          pageCount={6}
          onPageChange={(page) => setPage(page.selected)}
          pageClassName="page"
          activeClassName="active-page"
          className="react-paginate"
          nextClassName="page"
          previousClassName="page"
        />
      </div>
    </div>
  );
}

export default Category;
