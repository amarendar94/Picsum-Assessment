import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux";
import PicsumGrid from "./components/PicsumGrid";
import PicsumImage from "./components/PicsumImage";
import { Navbar, NavbarBrand, NavbarText } from "reactstrap";

function App() {
  return (
    <div>
      <Navbar color="light" light expand="md" fixed="top">
        <NavbarBrand>Lorem Picsum - Amarendar Reddy</NavbarBrand>
      </Navbar>
      <Provider store={store}>
        <div className="container">
          <div className="row">
            <div className="col-3 gallery">
              <PicsumGrid />
            </div>
            <div className="col-9 detail-view d-flex justify-content-center align-items-center">
              <PicsumImage />
            </div>
          </div>
        </div>
      </Provider>
    </div>
  );
}

export default App;
