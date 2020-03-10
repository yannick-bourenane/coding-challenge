import React, { useState, useEffect } from "react";
import axios from "axios";

const Celebrities = () => {
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/person/popular?page=1&api_key=${process.env.REACT_APP_MOVIE_API}`
      )
      .then(apiRes => setCelebrities(apiRes.data.results))
      .catch(apiErr => console.log(apiErr));
  }, []);

  const [celebrities, setCelebrities] = useState([]);

  const [selected, setSelected] = useState("");

  const handleClick = index => {
    selected !== index ? setSelected(index) : setSelected("");
  };

  return (
    <div className="celebrities-page">
      <h1>Celebrities</h1>
      {celebrities &&
        celebrities.map((celebrity, i) => (
          <div
            key={i}
            className={i === selected ? "is-selected celebrity" : "celebrity"}
            onClick={() => handleClick(i)}
          >
            <div>
              {celebrity.profile_path ? (
                <img
                  src={
                    "https://image.tmdb.org/t/p/w185" + celebrity.profile_path
                  }
                  alt={celebrity.name}
                  width="75"
                />
              ) : (
                <p>no picture</p>
              )}
              <h3>{celebrity.name}</h3>
            </div>
            {i === selected && (
              <div className="more-info">
                {" "}
                {celebrity.profile_path ? (
                  <img
                    src={
                      "https://image.tmdb.org/t/p/w185" + celebrity.profile_path
                    }
                    alt="Test"
                  />
                ) : (
                  <p>no picture</p>
                )}
                <h2>{celebrity.name}</h2>
                <h3>Known for</h3>
                {celebrity.known_for &&
                  celebrity.known_for.map((info, j) => (
                    <div className="know-for" key={j}>
                      <img
                        src={
                          "https://image.tmdb.org/t/p/w185" + info.poster_path
                        }
                        alt={info.name}
                      />
                      <h3>{info.name}</h3>
                    </div>
                  ))}
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default Celebrities;
