import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "../components/GifGridItem";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h2 className="animate__fadeInDown">{category}</h2>
      {loading && (
        <div className="animate__animated animate__flash">Cargando</div>
      )}

      <div>
        <ol className="card-grid">
          {images.map((item) => {
            return <GifGridItem key={item.id} {...item} />;
          })}
        </ol>
      </div>
    </>
  );
};
