import React, { useState } from "react";

// An text input
// A range input, between 0 and 200
// A text with the following pattern: "... x ... px", where ...is the value of the range input
// An image where the "src" is the value of the text input
// For this task, you need 2 states: size and url.

const CustomizeImage = () => {
  const [url, setUrl] = useState("");
  const [size, setSize] = useState(80);

  const handleUrl = e => {
    setUrl(e.target.value);
  };
  const handleSize = e => {
    setSize(e.target.value);
  };

  return (
    <div className="customize-image-page">
      <input type="text" onChange={handleUrl} />
      <br />
      <input type="range" min="0" max="200" onChange={handleSize} />
      <p>
        {size && size} x {size && size}px
      </p>
      <img src={url && url} alt="" width={size && size} height={size && size} />
    </div>
  );
};

export default CustomizeImage;
