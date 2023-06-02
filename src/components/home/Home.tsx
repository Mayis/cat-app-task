// components
import Picture from "./Picture";

// hooks
import useGetPictures from "../../hooks/useGetPictures";
import Loading from "../common/Loading";

function Home() {
  const { pictures, loading } = useGetPictures(10, 1, 1);

  return (
    <div className="home">
      {loading ? (
        <Loading />
      ) : (
        pictures?.map((picture) => (
          <Picture pic={picture} key={`cat-picture-${picture.id}`} />
        ))
      )}
    </div>
  );
}

export default Home;
