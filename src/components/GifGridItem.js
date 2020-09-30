import React from "react";

function GifGridItem({ img, deleteImageG }) {
  return (
    <div className="card animate__animated animate__bounce">
      <img src={img.url} alt={img.title} />
      <p>{img.title}</p>
      <button onClick={() => deleteImageG(img.id)} className="button-primary">
        Eliminar
      </button>
    </div>
  );
}

export default GifGridItem;
