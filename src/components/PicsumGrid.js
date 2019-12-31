import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const PicsumGrid = () => {
  const images = useSelector(state => state.images);
  const selectedImage = useSelector(state => state.selectedImage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "GET_IMAGES" });
  }, []);

  return (
    <div className="image-list">
      {Object.values(images).map(image => {
        return (
          <img
            key={image.id}
            onClick={() =>
              dispatch({ type: "SELECTED_IMAGE_CHANGE", payload: image.id })
            }
            className="img-thumbnail"
            style={
              image.id === selectedImage ? { backgroundColor: "#f8b400" } : {}
            }
            width="200px"
            height="120px"
            src={image.download_url}
            alt={image.download_url}
          />
        );
      })}
    </div>
  );
};

export default PicsumGrid;
