import React, { useState } from "react";

// When the temperature is lower than 10 => "It's cold snowflake"(in blue)
// When the temperature is between 10 and 30 => "It's nice blossom"(in black)
// When the temperature is above 30 => "It's warm sunny"(in red)

const Temperature = () => {
  const [temperature, setTemperature] = useState(
    <p className="blue">It's cold</p>
  );
  const handleOnChange = e => {
    e.target.value < 10
      ? setTemperature(<p className="blue">It's cold</p>)
      : e.target.value >= 10 && e.target.value <= 30
      ? setTemperature(<p className="black">It's nice</p>)
      : setTemperature(<p className="red">It's warm</p>);
  };
  return (
    <div className="temperature-page">
      <input type="number" defaultValue={0} onChange={handleOnChange} />
      {temperature && temperature}
    </div>
  );
};

export default Temperature;
