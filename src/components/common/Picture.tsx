import React from "react";

import type { Picture as PictureT } from "../../redux/slices/categorySlice";

interface Props {
  pic: PictureT;
}
function Picture({ pic }: Props) {
  return (
    <div className="cat-pic">
      <img src={pic.url} alt={`cat-${pic.id}`} className="cat-image" />
    </div>
  );
}

export default Picture;
