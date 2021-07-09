import React, { useState, useEffect } from "react";
import "./row.css";
import MyfTvShows from "./requests";
import TopTrinding from "./axios";
import lessReated from "./lessReted";

function Row({ title, err, isLargeRow }) {
  let a;
  if (err === 1) {
    a = MyfTvShows;
  } else if (err === 2) {
    a = TopTrinding;
  } else {
    a = lessReated;
  }

  return (
    <div className="row">
      <div className="title1">
        <h1 className="title">{title}</h1>
      </div>

      <div className="row_posters" id={title}>
        {a.map(function (item) {
          return (
            <img
              kay={item[0]}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              src={item[1]}
              alt={item[0]}
            ></img>
          );
        })}
      </div>
    </div>
  );
}

export default Row;
