import axios from "axios";
import React, { useReducer, useState } from "react";
import Spinner from "../components/Spinner";
import ErrorSpinner from "../components/ErrorSpinner";
import { reducer } from "../functions/reducer";

// Initial states for useReducer
const initialState = {
  show: false,
  errorMessage: false,
  isLoading: false,
};

// MainPage function
export default function MainPage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { show, errorMessage, isLoading } = state;
  const [inputValue, setInputValue] = useState(null);
  const [info, setInfo] = useState(null);

  // Input change function
  function onChangeInput(e) {
    setInputValue(e.target.value);
  }
  // Enter button pressed
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleClick();
    }
  }

  //Search button function
  function handleClick() {
    dispatch({ type: "FETCH_START" });
    var FETCH_URL =
      "https://api.weatherapi.com/v1/current.json?key=a3b5720f8c00466f91a142434231807&q=" +
      inputValue +
      "&aqi=no";
    axios
      .get(FETCH_URL)
      .then((response) => {
        setInfo(response.data);
        hourChecker();
        dispatch({ type: "FETCH_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  }

  // Hour settings for card styles
  function hourChecker() {
    var mode = "card mt-5 col-12 bg-dark text-light";
    const hour = info?.location?.localtime?.slice(11, 13);
    if (hour >= 6 && hour <= 20) {
      return (mode = "card mt-5 col-lg-12 col-md-6 bg-light text-dark");
    } else {
      return (mode = "card mt-5 col-12 bg-dark text-light");
    }
  }

  // Rendering
  return (
    <div>
      <div className="headerText mt-5">
        <h1>Weather for today</h1>
      </div>
      <div className="row d-flex justify-content-center">
        <input
          className="text-center mt-5 col-4"
          onKeyDown={handleKeyPress}
          onChange={onChangeInput}
          on
          style={{ width: "40%" }}
          type="text"
          id="message"
          placeholder="Enter the city: ex. Baku"
        />
        <button
          type="button"
          onClick={handleClick}
          className="btn btn-primary mt-5 g-0 col-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
      </div>
      <div className="row justify-content-md-center mb-5">
        <div className={isLoading ? "loading-spinner" : "d-none"}>
          <h1 className="loadingTextH1">Loading please wait...</h1>
          <Spinner />
        </div>
        <div className={errorMessage ? "message mt-3" : "d-none"}>
          <h1 className="errorMessageTxtH1">Error occured</h1>
          <ErrorSpinner />
          <h5 className="errorMessageTxtH5">Please check or change location</h5>
        </div>
        <div
          className={
            show
              ? "col-12 col-md-12 col-lg-6 d-flex text-center justify-content-center"
              : "d-none"
          }
        >
          <div className={hourChecker()}>
            <div className="card-body text-center">
              <h1>{info?.location?.name}</h1>
              <h6>{info?.location?.region}</h6>
              <h6>
                {info?.location?.country} -{" "}
                {info?.location?.localtime?.slice(0, 10)}
              </h6>
              <hr />
              <div className="container">
                <div className="row justify-content-center">
                  <h4>
                    {info?.current?.condition?.text}
                    <img
                      alt=""
                      width="50px"
                      src={info?.current?.condition.icon}
                    />
                  </h4>
                  <div className="row d-inline justify-content-center g-0">
                    <div className="alert alert-primary col-12 col-md-12 mb-3 text-break">
                      <h4>
                        {info?.current?.temp_c} C / {info?.current?.temp_f} F
                      </h4>
                    </div>
                    <div className="alert alert-primary col-12 col-md-12 mb-3 text-break">
                      <h4>
                        Wind: {info?.current?.wind_kph} km/h (
                        {info?.current?.wind_dir})
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
