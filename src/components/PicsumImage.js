import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, CardBody, Button, CustomInput } from "reactstrap";
import uuid from "uuid/v4";

const PicsumImage = () => {
  const images = useSelector(state => state.images);
  const selectedImage = useSelector(state => state.selectedImage);
  const dispatch = useDispatch();

  let imageUrl = selectedImage ? images[selectedImage].download_url : "";

  let addImage = e => {
    let id = uuid();
    dispatch({
      type: "ADD_IMAGE",
      payload: {
        id,
        download_url: URL.createObjectURL(e.target.files[0])
      }
    });
    dispatch({ type: "SELECTED_IMAGE_CHANGE", payload: id });
  };

  return (
    <div>
      {imageUrl ? (
        <Card>
          <img
            width="820px"
            height="460px"
            src={imageUrl}
            alt={imageUrl}
          />
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
                  type="file"
                  id="exampleCustomFileBrowser"
                  onChange={addImage}
                  name="customFile"
                  label="Upload Images!"
                  size="sm"
                />
              </div>
            </div>
          </CardBody>
        </Card>
      ) : (
        "Please Select an Image"
      )}
    </div>
  );
};

export default PicsumImage;
