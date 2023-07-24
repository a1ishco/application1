import React from "react";
import styles from "./loaderStyles.css";

const LoadingPage = () => {
  return (
    <>
      <div className="loader">
        <div className="xcontainer xclouder">
          <div id="cloud">
            <div id="sun"></div>
            <span className="shadow"></span>
            <div className="rain">
              <div className="drop d1"></div>
              <div className="drop d2"></div>
              <div className="drop d3"></div>
              <div className="drop d4"></div>
              <div className="drop d5"></div>
              <div className="drop d6"></div>
              <div className="drop d7"></div>
              <div className="drop d8"></div>
              <div className="drop d9"></div>
              <div className="drop d10"></div>
              <div className="drop d11"></div>
              <div className="drop d12"></div>
              <div className="drop d13"></div>
              <div className="drop d14"></div>
              <div className="drop d15"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingPage;
