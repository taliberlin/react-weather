import React from "react";
import "./App.css";
import Weather from "./Weather";
import SourceCode from "./SourceCode";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <br />
        <br />
        <form>
          <div className="row search">
            <div className="col search">
              <input
                type="text"
                placeHolder="Enter city..."
                className="form-control"
                autoComplete="off"
              />
            </div>
            <div className="col search-btn d-flex">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary me-2"
              />
              <input
                type="submit"
                value="Current Location"
                className="btn btn-primary"
              />
            </div>
          </div>
        </form>
        <br />
        <br />
        <Weather />
        <SourceCode />
      </div>
    </div>
  );
}
