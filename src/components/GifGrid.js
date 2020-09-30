import React, { useState, useEffect } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "../components/GifGridItem";

function GifGrid({ category }) {
  const { data, loading } = useFetchGifs(category);
  const [images, setImages] = useState(data);

  useEffect(() => {
    setImages(data);
  }, [data]);

  const deleteImage = (id) => {
    setImages(images.filter((i) => i.id !== id));
  };

  return (
    <>
      <h2 className="animate__fadeInDown">{category}</h2>
      {loading && (
        <div className="animate__animated animate__flash">Cargando</div>
      )}

      <div>
        <ol className="card-grid">
          {images.map((item) => {
            return (
              <GifGridItem
                key={item.id}
                img={item}
                deleteImageG={deleteImage}
              />
            );
          })}
        </ol>
      </div>
    </>
  );
}

export default GifGrid;
