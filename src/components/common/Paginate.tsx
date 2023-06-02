import React from "react";
import ReactPaginate from "react-paginate";

interface Props {
  onPageChange: (page: number) => void;
}
function Paginate({ onPageChange }: Props) {
  return (
    <div className="paginate-parent">
      <ReactPaginate
        pageCount={6}
        onPageChange={(page) => onPageChange(page.selected)}
        pageClassName="page"
        activeClassName="active-page"
        className="react-paginate"
        nextClassName="page"
        previousClassName="page"
      />
    </div>
  );
}

export default Paginate;
