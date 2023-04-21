import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

import "./index.css";
import { setWeather } from "../../redux/actions/weatheraction";

const Input = () => {
  const [input, setInput] = useState(" ");
  const dispatch = useDispatch();

  const handleChange = (value) => {
    setInput(value);
    dispatch(setWeather(value));
  };
  return (
    <div>
      {" "}
      <Form.Control
        type="search"
        className="weatherinput"
        value={input}
        placeholder="Enter a City..."
        onSubmit="12"
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default Input;
