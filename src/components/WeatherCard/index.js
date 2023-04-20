import React from "react";
import "./index.css";
import { useSelector } from "react-redux";

const WeatherCard = () => {
  const data = useSelector((state) => state.weatherDetail);
  const { main, coord } = data.weather;
  console.log(data, "DATA");
  return (
    <>
      {main && (
        <div className="main">
          <div className="inner-main">
            <div className="today">
              <span className="today-heading">Today Forcast</span>
              <p>
                Temperature: {main?.temp}
                °C
              </p>
              <p>lat: {coord?.lat}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherCard;
