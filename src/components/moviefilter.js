import React, { useState, useEffect } from "react";

let Moviesfilter = (props) => {
  let [filterdata, setFilterData] = useState(props.movies);

  let data = props.movies;
  // console.log(data);
  const genres = [
    "Drama",
    "Crime",
    "Action",
    "Fantasy",
    "Western",
    "Science Fiction",
    "Thriller",
    "War",
    "Animation",
  ];
  //   console.log(data);
  console.log("filtering by ",props.selectedMovie);

  useEffect(() => {
    if (props.selectedMovie) {
      let arr = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].genre == props.selectedMovie) {
          arr.push(data[i]);
        }
      }
      //  console.log(arr);
      setFilterData(arr);
    }
  }, [props.selectedMovie]);

  return (
    <div className="moviefiter">
      <h3>Filter by {props.selectedMovie}</h3>
      <div className="buttons">
        {genres.map((iteam, index) => (
          <button
            key={index}
            onClick={(e) => {
              props.setSelectedMovie(iteam);
              {
                filterdata && props.setData(filterdata);
              }
            }}
          >
            {iteam}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Moviesfilter;
