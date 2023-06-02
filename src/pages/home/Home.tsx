import { useState } from "react";
// components
import Picture from "../../components/common/Picture";

// hooks
import useGetPictures from "../../hooks/useGetPictures";
import Loading from "../../components/common/Loading";
import Paginate from "../../components/common/Paginate";

function Home() {
  const [page, setPage] = useState(1);
  const { pictures, loading } = useGetPictures(10, page, 1);
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

export default Home;
