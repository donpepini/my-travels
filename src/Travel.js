// src/Quote.js
import React from "react";

const Travel = ({ destination, country, photo, distance }) => (
  <figure>
    <img src={photo} alt={destination} />
    <figcaption>
        <p>Pays: {country}</p>
        <p>Distance: {distance}</p>
    </figcaption>
  </figure>
);

export default Travel;
