import React, { useState, useEffect } from "react";
// import { GifGridItem } from "./GifGridItem";
// import { getGifs } from "./../helpers/getGifs";

export const GifGrid = ({ category }) => {
  // const [images, setImages] = useState([]);

  // useEffect(() => {
  //   getGifs(category).then(setImages);
  // }, [category]);

  return (
    <>
      <h2>{category}</h2>
      {/* <div>
        <ol className="card-grid">
          {images.map((item) => {
            return <GifGridItem key={item.id} {...item} />;
          })}
        </ol>
      </div> */}
    </>
  );
};
