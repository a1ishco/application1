import axios from "axios";
import React, { useReducer, useState } from "react";
import "./styles.css";
import Spinner from "../components/Spinner";
import ErrorSpinner from "../components/ErrorSpinner";
import { reducer } from "../functions/reducer";

// Initial states for useReducer
const initialState = {
  show: false,
  errorMessage: false,
  isLoading: false,
};

// Forecast function
export default function Forecast() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { show, errorMessage, isLoading } = state;
  const [inputValue, setInputValue] = useState(null);
  const [info, setInfo] = useState(null);

  //Input change function
  function onChangeInput(e) {
    setInputValue(e.target.value);
  }

  // Enter button pressed
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleClick();
    }
  }

  // Search button function
  function handleClick() {
    dispatch({ type: "FETCH_START" });
    var FETCH_URL =
      "https://api.weatherapi.com/v1/forecast.json?key=a3b5720f8c00466f91a142434231807&q=" +
      inputValue +
      "&days=5&aqi=no&alerts=no";
    axios
      .get(FETCH_URL)
      .then((response) => {
        setInfo(response.data);
        dispatch({ type: "FETCH_SUCCESS" });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "FETCH_ERROR" });
      });
  }

  // Rendering
  return (
    <main className="forecast mb-5">
      {/* {info?.forecast.forecastday.map((datas, i) => (
                <div key={i}>
                    <div><hr />Date: {datas?.date}</div>


                    {datas.hour.map((hours, j) => (
                        <div key={j}>
                            <div>Hours: {hours?.time} Temp: {hours?.temp_c}C/{hours?.temp_f}F {hours?.condition.text} <img width="50px" src={hours?.condition.icon} /></div>
                        </div>))}
                
                </div>))} */}
      <div className="headerText mt-5">
        <h1>Weather forecast for 5 days by hours</h1>
      </div>

      <div className="row d-flex justify-content-center">
        <input
          className="text-center mt-5 col-4"
          onKeyDown={handleKeyPress}
          onChange={onChangeInput}
          style={{ width: "40%" }}
          type="text"
          id="message"
          placeholder="Enter the city: ex. Baku"
        />
        <button
          type="button"
          onClick={handleClick}
          className="btn
                 btn-primary mt-5 g-0 col-1"
        >
          <svg
            className="svgIcon feather feather-search"
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
      <div className="row d-flex m-0 justify-content-center col-12">
        <div className="container">
          <div className={isLoading ? "loading-spinner" : "d-none"}>
            <h1 className="loadingTextH1">Loading please wait...</h1>
            <Spinner />
          </div>
          <div className={errorMessage ? "message mt-3" : "d-none"}>
            <h1 className="errorMessageTxtH1">Error occured</h1>
            <ErrorSpinner />
            <h5 className="errorMessageTxtH5">
              Please check or change location
            </h5>
          </div>
          <div
            className={
              show
                ? "col-12 col-md-12 col-lg-12 d-flex text-center justify-content-center"
                : "d-none"
            }
          >
            <div className="card mt-5 col-12 bg-light text-dark g-2">
              <div className="card-body text-center">
                <div className="justify-content-md-center">
                  <div className="card-title">
                    <h1>{info?.location?.name}</h1>
                    <h6>{info?.location?.region}</h6>
                    <h6>{info?.location?.country}</h6>
                  </div>
                  <div className="dateCard">
                    <h4>
                      {info?.forecast?.forecastday.map((datas, i) => (
                        <div key={i}>
                          <div className="mb-3">{datas?.date}</div>
                          <table className="table table-hover">
                            <tbody>
                              <tr>
                                <th>Hour</th>
                                <th>Temperature C/F</th>
                                <th>Weather</th>
                                <th>Wind</th>
                                <th>Rain</th>
                              </tr>

                              {datas?.hour.map((hours, j) => (
                                <tr key={j}>
                                  <td>{(hours?.time).slice(10, 16)}</td>
                                  <td>
                                    {hours?.temp_c}C <hr /> {hours?.temp_f}F
                                  </td>
                                  <td>
                                    {hours?.condition.text}
                                    <hr />
                                    <img
                                      alt=""
                                      width="50px"
                                      src={hours?.condition.icon}
                                    />
                                  </td>
                                  <td>
                                    {hours?.wind_kph} km/h <hr />(
                                    {hours?.wind_dir})
                                  </td>
                                  <td>{hours?.chance_of_rain}%</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ))}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
