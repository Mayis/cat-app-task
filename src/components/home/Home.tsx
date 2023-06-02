import React from "react";

// hooks
import useMainPictures from "../../hooks/useMainPictures";
import useGetCategories from "../../hooks/useGetCategories";

function Home() {
  const pictures = useMainPictures(10, 1, 1);

  return <div>Home</div>;
}

export default Home;
