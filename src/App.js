import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Moviedisplay from "./components/movieDisplay";
import movies from "./components/movieData";
import Moviesfilter from "./components/moviefilter";
function App() {
  let [data, setData] = useState(movies);
  let [selectedMovie, setSelectedMovie] = useState("genres");

  return (
    <div className="app">
      <h3 className="heading">Top 15 Movies of All Time</h3>
      <Moviesfilter
        selectedMovie={selectedMovie}
        setSelectedMovie={setSelectedMovie}
        setData={setData}
        movies={movies}
      />
      <Moviedisplay data={data} selectedMovie={selectedMovie} />
    </div>
  );
}

export default App;
