import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, CardImg, CardBody, Button, CustomInput } from "reactstrap";
import uuid from "uuid/v4";

const PicsumImage = () => {
  const images = useSelector(state => state.images);
  const selectedImage = useSelector(state => state.selectedImage);
  const dispatch = useDispatch();

  let imageUrl = selectedImage ? images[selectedImage].url : "";

  let handleChange = e => {
    let id = uuid();
    dispatch({
      type: "ADD_IMAGE",
      payload: {
        id,
        url: URL.createObjectURL(e.target.files[0])
      }
    });
    dispatch({ type: "SELECTED_IMAGE_CHANGE", payload: id });
  };

  return (
    <div >
      {imageUrl ? (
        <Card>
          <CardImg top width="100%" src={imageUrl} alt="Card image cap" />
          <CardBody>
            <div className="row">
              <div className="col-3">
                <Button
                  outline
                  className="mr-3"
                  color="primary"
                  size="sm"
                  onClick={() =>
                    dispatch({ type: "SELECTED_IMAGE_CHANGE", payload: "" })
                  }
                >
                  Clear
                </Button>
              </div>
              <div className="col-9">
                <CustomInput
                  width="100px"
                  type="file"
                  id="exampleCustomFileBrowser"
                  onChange={handleChange}
                  name="customFile"
                  label="Upload Images!"
                  size="sm"
                />
              </div>
            </div>
          </CardBody>
        </Card>
      ) : (
        "Please Select Image"
      )}
    </div>
  );
};

export default PicsumImage;
