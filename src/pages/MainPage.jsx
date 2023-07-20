import axios from 'axios';
import React, { useState } from 'react';


export default function MainPage() {
  const [info, setInfo] = useState(null);
  const [inputValue, setInputValue] = useState(null);
  const [show, setShow] = useState(false);

  //Input change function
  function onChangeInput(e) {
    setInputValue(e.target.value)
  }
  function handleKeyPress(event){
    if(event.key === 'Enter'){
      handleClick()
    }
  }

  //Search button function
  function handleClick() {
    setShow(true)
    var FETCH_URL = 'https://api.weatherapi.com/v1/current.json?key=a3b5720f8c00466f91a142434231807&q=' + inputValue + '&aqi=no';
    axios.get(FETCH_URL).then((response) => {
      setInfo(response.data);
    }).catch((err) => {
      console.log(err);
    })
      .finally(() => {
      });

  }


  //Hour settings for card styles
  var mode = "'card mt-5 col-6 bg-dark text-light";
  const hour = (((info?.location?.localtime)?.slice(11, 13)));
  if ((hour >= 6 && hour <= 20)) {
    mode = "card mt-5 col-lg-12 col-md-6 bg-light text-dark"
  }

  //Rendering
  return (
    <div>

<div className="headerText mt-5">
    <h1>Weather for today</h1>
    </div>
        <div className='row d-flex justify-content-center'>

          <input className='text-center mt-5 col-4' onKeyPress={handleKeyPress} onChange={onChangeInput} on style={{ width: '40%' }} type="text" id="message" placeholder='Enter the city: ex. Baku' />
          <button type="button" onClick={handleClick} class="btn btn-primary mt-5 g-0 col-1"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg></button>
        </div>
        <div className="row justify-content-md-center mb-5">
          <div className={show ? 'col-12 col-md-12 col-lg-6 d-flex text-center justify-content-center' : 'd-none'}>
        <div className={mode}>
          <div className="card-body text-center">
            <h1>{info?.location?.name}</h1>
            <h6>{info?.location?.region}</h6>
            <h6>{info?.location?.country} - {(info?.location?.localtime)?.slice(0, 10)}</h6>
            <hr />
            <div className="row justify-content-md-center">
              <h4>{info?.current?.condition?.text}<img width="50px" src={info?.current?.condition.icon} />
              </h4>
              <div className="row justify-content-evenly g-0">
                <div className='alert alert-primary col-4 mb-3 text-break'>
                  {info?.current?.temp_c} Celcius
                </div>
                <div className='alert alert-primary col-4 mb-3 text-break'>
                  {info?.current?.temp_f} Fahreneit
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